// probe.js
require('dotenv').config();

// Node 18+ has global fetch; if you're on older Node, `npm i undici` and:  const { fetch } = require('undici');

const Capability_API_KEY = process.env.Capability_API_KEY;
const X_Capability_Process_UUID = process.env.X_Capability_Process_UUID;


con

const EPC = 'urn:epc:id:sscc:08600031303.0003';
const URL_BASE = 'https://capability-service.traceability-dialogue.org/epcis/events';
const URL_FULL = `${URL_BASE}?MATCH_anyEPC=${EPC}`;

function mask(v) {
  if (!v) return String(v);
  if (v.length <= 6) return '*'.repeat(v.length);
  return v.slice(0,3) + '***' + v.slice(-3);
}

(async () => {
  console.log('Checking env...');
  console.log('Capability_API_KEY:', mask(Capability_API_KEY));
  console.log('X_Capability_Process_UUID:', mask(X_Capability_Process_UUID));

  if (!Capability_API_KEY) {
    console.error('❌ Capability_API_KEY is missing. Confirm .env var name & loading.');
    process.exit(1);
  }

  const tries = [
    {
      name: 'A) Minimal (only x-api-key)',
      headers: {
        'x-api-key': Capability_API_KEY,
        // Many EPCIS servers are fine with default Accept; keep it minimal first.
      }
    },
    {
      name: 'B) JSON (x-api-key + Accept: application/json)',
      headers: {
        'x-api-key': Capability_API_KEY,
        'Accept': 'application/json'
      }
    },
    {
      name: 'C) JSON-LD + Process UUID (closest to your code)',
      headers: {
        'x-api-key': Capability_API_KEY,
        'Accept': 'application/ld+json',
        // Some servers REJECT this header on GET. This try will confirm.
        ...(X_Capability_Process_UUID ? { 'X-Capability-Process-UUID': X_Capability_Process_UUID } : {})
      }
    }
  ];

  for (const t of tries) {
    console.log('\n--- Try', t.name, '---');
    console.log('GET', URL_FULL);
    console.log('Headers:', Object.fromEntries(Object.entries(t.headers).map(([k,v]) => [k, k === 'x-api-key' ? mask(v) : v])));

    try {
      const res = await fetch(URL_FULL, { method: 'GET', headers: t.headers });
      const text = await res.text(); // read as text so we always see server error payloads
      console.log('Status:', res.status, res.statusText);
      console.log('Body:\n', text.slice(0, 2000)); // print first 2KB
    } catch (e) {
      console.error('Fetch error:', e.message);
    }
  }
})();
