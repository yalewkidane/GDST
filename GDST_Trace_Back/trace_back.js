// index.js
require('dotenv').config();

// Use Node 18+ (global fetch). If you're on older Node, `npm i node-fetch` and import it.

const Solution_Provider_API_KEY = process.env.Solution_Provider_API_KEY;
const Capability_API_KEY = process.env.Capability_API_KEY;
const X_Capability_Process_UUID = process.env.X_Capability_Process_UUID;

console.log('Solution_Provider_API_KEY:', Solution_Provider_API_KEY ? '***' : 'MISSING');
console.log('Capability_API_KEY:', Capability_API_KEY ? '***' : 'MISSING');
console.log('X_Capability_Process_UUID:', X_Capability_Process_UUID ? '***' : 'MISSING');

if (!Solution_Provider_API_KEY) {
  console.error('❌ Solution_Provider_API_KEY is missing. Confirm .env var name & loading.');
  process.exit(1);
}
if (!Capability_API_KEY) {
  console.error('❌ Capability_API_KEY is missing. Confirm .env var name & loading.');
  process.exit(1);
}
if (!X_Capability_Process_UUID) {
  console.warn('⚠️ X_Capability_Process_UUID is missing. Some queries may be rejected by the Capability Service.');
} 

const Solution_Provider_BASE_URL = 'http://210.113.134.235:24242/epcis/v2/events';
const Capability_Service_BASE_URL = 'https://capability-service.traceability-dialogue.org/epcis/events';

//'https://capability-service.traceability-dialogue.org/epcis/events?MATCH_anyEPC=urn:epc:id:sscc:08600031303.0003';

const seedEpc = 'urn:epc:id:sscc:08600031303.0003';

const uuid_seen = new Set();


async function epcisQuery(queryParams = '') {
  try {
    const fullurl = `${Capability_Service_BASE_URL}?${queryParams}`;
    console.log(`Querying Capability Service: ${fullurl}`);
    res = await fetch(fullurl, {
      method: 'GET',
      headers: {
        'x-api-key': Capability_API_KEY,
        'Accept': 'application/json',
        'X-Capability-Process-UUID': X_Capability_Process_UUID
      }
    });
    if (!res.ok) throw new Error(`x-api-key call failed: ${res.status} ${res.statusText}`);
    const epcisData = await res.json();
    //console.log('x-api-key result:', dataHeader);
    return epcisData;

  } catch (err) {
    console.error('Capability EPCIS Request error:', err.message);
  }
}


async function epcisCaptureEvent(uuid, payload) {
  try {
    if (uuid_seen.has(uuid)) return { skipped: true }; // already seen

    //log payload
    //console.log('Payload to send:', JSON.stringify(payload, null, 2));
    // ----- Option B: x-api-key header ----

    res = await fetch(`${Solution_Provider_BASE_URL}`, {
      method: 'POST',
      headers: {
        'x-api-key': Solution_Provider_API_KEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
     
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      throw new Error(`POST failed: ${res.status} ${res.statusText} ${t}`);
    }
    uuid_seen.add(uuid); // mark only after success
    return await res.json().catch(() => ({uuid}));

  } catch (err) {
    console.error('Solution Provider EPCIS Capture Request error:', err.message);
  }
}


async function epcisCapture(events) {
  try {
    const context = events['@context'];
    const eventList = events.epcisBody.queryResults.resultsBody.eventList;
    if (eventList) {
      for (const event of eventList) {
        if (event.eventID) {
          event['@context'] = context; // add context to each event
          const result = await epcisCaptureEvent(event.eventID, event);
          console.log('Capture result:', result);
        }
      }
    }
  } catch (err) {
    console.error('Request error:', err.message);
  }
}

function crawlEpcs(events, epc_seen = new Set(), epc_used = new Set()) {
  const frontier = new Set(); // EPCs to query next

  try {
    const eventList = events?.epcisBody?.queryResults?.resultsBody?.eventList ?? [];
    for (const event of eventList) {
      if (!event?.eventID) continue;

      const candidates = [];
      const pushStr = (v) => {
        if (typeof v === "string") {
          const s = v.trim();
          if (s) candidates.push(s);
        }
      };
      const pushArr = (arr) => {
        if (Array.isArray(arr)) for (const v of arr) pushStr(v);
      };
      const pushQty = (list) => {
        if (Array.isArray(list)) {
          for (const q of list) if (q?.epcClass) pushStr(q.epcClass);
        }
      };

      // 1) Direct EPC arrays
      pushArr(event.epcList);
      pushArr(event.inputEPCList);
      pushArr(event.outputEPCList);
      pushArr(event.childEPCs);

      // 2) Parent EPC
      pushStr(event.parentID);

      // 3) Quantity-based EPCs (all variants you showed)
      pushQty(event.quantityList);
      pushQty(event.childQuantityList);
      pushQty(event.inputQuantityList);
      pushQty(event.outputQuantityList);

      // Record EPCs
      for (const epc of candidates) {
        if (!epc_seen.has(epc) && !epc_used.has(epc)) {
          frontier.add(epc);   // schedule for later query
        }
        epc_seen.add(epc);     // mark discovered
      }
    }

    return { frontier, epc_seen, epc_used };
  } catch (err) {
    console.error("Process error:", err?.message || err);
    return { frontier: new Set(), epc_seen, epc_used };
  }
}



async function crawlAll(seedEpcs) {
  let epc_seen = new Set(seedEpcs);
  let epc_used = new Set();
  let frontier = new Set(seedEpcs);

  while (frontier.size > 0) {
    // take one EPC to query
    const [current] = frontier;
    frontier.delete(current);

    if (epc_used.has(current)) continue;
    epc_used.add(current);

    // query database / API with this EPC
    //const events = await queryByEpc(current);
    console.log(`Crawling with EPCs: ${current}`);
    //const events = await epcisQuery(`MATCH_anyEPC=${encodeURIComponent(current)}`);
    const events = await epcisQuery(`MATCH_anyEPC=${current}`);

    await epcisCapture(events);
    //console.log('Events:', JSON.stringify(events, null, 2));
    //console.log(`  Events found: ${events?.epcisBody?.queryResults?.resultsBody?.eventList}`);
    // extract new EPCs from these events
    const result = crawlEpcs(events, epc_seen, epc_used);
    result.frontier.forEach(f => frontier.add(f));
    epc_seen = result.epc_seen;
    epc_used = result.epc_used;
  }

  return { epc_seen, epc_used };
}

async function main() {
  console.log("Starting API calls...");

  // Example call: Fetch events for a specific EPC
  const epc = 'urn:epc:id:sscc:08600031303.0003';
  console.log(`Fetching events for EPC: ${epc}`);
  //const events = await epcisQuery(`MATCH_anyEPC=${encodeURIComponent(epc)}`);
  //console.log('Events:', JSON.stringify(events, null, 2));

  crawlAll([seedEpc]).then(({epc_seen, epc_used}) => {
    console.log(`Crawling complete. Unique EPCs seen: ${Array.from(epc_seen).join(', ')}`);
    console.log(`Unique EPCs used for queries: ${Array.from(epc_used).join(', ')}`);
  });

  //console.log("Capturing events...");
  //await epcisCapture(events);

  //console.log("Second fetch for the same EPC to demonstrate idempotency.");
  
  //await epcisCapture(events);
  //console.log(`Unique EPCs seen: ${Array.from(epc_seen).join(', ')}`);
  //console.log(`Unique eventIDs seen: ${Array.from(uuid_seen).join(', ')}`);
  //console.log('@context:', events['@context']);
  //console.log('eventList', events.epcisBody.queryResults.resultsBody.eventList);

  //epcisCapture();

  console.log("API calls completed.");
}

main();

