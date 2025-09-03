// MongoDB initialization script
print('Start ###############################');

db = db.getSiblingDB('gdst-digitallink');

// Create collections with indexes
db.createCollection('digitallinks');

// Create indexes for better performance
db.digitallinks.createIndex({ "identifier": 1, "linkType": 1 });
db.digitallinks.createIndex({ "identifier": 1, "linkType": 1, "link": 1 }, { unique: true });
db.digitallinks.createIndex({ "active": 1 });
db.digitallinks.createIndex({ "authRequired": 1 });

// Insert sample data
db.digitallinks.insertMany([
  {
    "identifier": "urn:epc:id:sscc:08600031303.0003",
    "linkType": "gs1:epcis",
    "link": "https://capability-service.traceability-dialogue.org/epcis",
    "title": "",
    "ianaLanguage": "",
    "context": "",
    "mimeType": "",
    "active": false,
    "fwqs": false,
    "defaultLinkType": false,
    "defaultIanaLanguage": false,
    "defaultContext": false,
    "defaultMimeType": false,
    "authRequired": true,
    "createdAt": new Date(),
    "updatedAt": new Date()
  },
  {
    "identifier": "urn:epc:id:sscc:08600031303.0003",
    "linkType": "gs1:masterData",
    "link": "https://master-data-service.traceability-dialogue.org/masterdata",
    "title": "Master Data Service",
    "ianaLanguage": "en",
    "context": "",
    "mimeType": "application/json",
    "active": true,
    "fwqs": false,
    "defaultLinkType": true,
    "defaultIanaLanguage": true,
    "defaultContext": false,
    "defaultMimeType": true,
    "authRequired": false,
    "createdAt": new Date(),
    "updatedAt": new Date()
  }
]);

print('Database initialization completed.');
print('End ###############################');
