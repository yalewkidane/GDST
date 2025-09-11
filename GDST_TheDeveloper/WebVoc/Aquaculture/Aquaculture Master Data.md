# Aquaculture Master Data
Master data on objects, locations, and entities are data that tend not to grow with trade volume. 
Given the similarities across CTEs and to reduce redundancy, GDST has documented Aquaculture Master 
Data here and parcels individual pages based on commodity or life cycle events.

## Master Data
This is the master data that will be used through the events in aquaculture scenarios.

## Product Definitions
Below are examples of master data for product definitions.

### Soy
GTIN: urn:gdst:traceability-solution.com:product:class:7d90c2cd-a801-4e22-acee-82bf27a4844d.soy

Owing Party: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d

Information Provider: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d
```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:7d90c2cd-a801-4e22-acee-82bf27a4844d.soy",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Soy"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d"
}
```
Soy Based Salmon Feed
GTIN: urn:gdst:traceability-solution.com:product:class:7d90c2cd-a801-4e22-acee-82bf27a4844d.feed01

Owing Party: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d

Information Provider: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d

```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:7d90c2cd-a801-4e22-acee-82bf27a4844d.feed01",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Soy-based Salmon Feed"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d"
}
```
Atlantic Salmon Fry
GTIN: urn:gdst:traceability-solution.com:product:class:dfa01b63-aaaa-4454-b13c-c53d6bdfab43.sal-fry

Owing Party: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43

Information Provider: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43

Fish Seafood Presentation Code: FIL

Species Scientific Name: Salmo Salar

Species Purpose Code: SAL
```json
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:dfa01b63-aaaa-4454-b13c-c53d6bdfab43.sal-fry",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Atlantic Salmon Fry"
      }
    ],
    "cbvmda:fishSeafoodPresentationCode": "FIL",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Salmo salar"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "SAL"
    ]
  }
 ```
Atlantic Salmon
GTIN: urn:gdst:traceability-solution.com:product:class:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3.sal-whole

Owing Party: urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3

Information Provider: urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3

Fish Seafood Presentation Code: WHL

Species Scientific Name: Salmo Salar

Species Purpose Code: SAL
```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3.sal-whole",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Atlantic Salmon"
      }
    ],
    "cbvmda:fishSeafoodPresentationCode": "WHL",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Salmo salar"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "SAL"
    ]
}
```
Organization Definitions
Below are examples of master data for organization definitions.

Bob's Hatchery Co.
PGLN: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43

Information Provider: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43
```json
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Hatchery Co."
      }
    ]
  }
```
Jim's Feeding Co.
PGLN: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d

Information Provider: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d
```json
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Jim's Feeding Co."
      }
    ]
  }
```
Per's Salmon Farm Co.
PGLN: urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3

Information Provider: urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3
```json
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Per's Salmon Farm Co."
      }
    ]
  }
```
Fresh Fish Processing Co.
PGLN: urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa

Information Provider: urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa
```json
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Fresh Fish Processing Co."
      }
    ]
  }
  ```
Place Definitions
Below are examples of master data for place definitions.

Bob's Hatchery
GLN: urn:gdst:traceability-solution.com:location:loc:dfa01b63-aaaa-4454-b13c-c53d6bdfab43.hatchery

Owning Party: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43

Information Provider: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43

Email: joe@triunionsf.com

Address: 123 US Highyway 96, San Diego, CA, US
```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:dfa01b63-aaaa-4454-b13c-c53d6bdfab43.hatchery",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Hatchery"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "123 US Highyway 96"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "San Diego"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  }
```
Jim's Feedmill
GLN: urn:gdst:traceability-solution.com:location:loc:7d90c2cd-a801-4e22-acee-82bf27a4844d.feedmill

Owning Party: urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d

Information Provider: urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43

Email: joe@triunionsf.com

Address: 981 Main St., Small Town, CA, US
```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:7d90c2cd-a801-4e22-acee-82bf27a4844d.feedmill",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Jim's Feedmill"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "981 Main St."
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Small Town"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  }
```
Per's Salmon Farm
GLN: urn:gdst:traceability-solution.com:location:loc:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3.farm

Owning Party: urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3

Information Provider: urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3

Address: 456 Walnut Blvd, Verona, CA, US
```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3.farm",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Per's Salmon Farm"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "456 Walnut Blvd"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Verona"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  }
```
Fresh Fish Processor
GLN: urn:gdst:traceability-solution.com:location:loc:30bad813-7fb9-43be-8caa-7e0876552eaa.processingplant

Owning Party: urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa

Information Provider: urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa

Address: 123 Main St., San Diego, CA, US
```json
{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:30bad813-7fb9-43be-8caa-7e0876552eaa.processingplant",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Fresh Fish Processor"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "123 Main St."
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "San Diego"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  }
```
Master Data - GS1 Web Vocab JSON-LD - GDST 1.2 - Full Document
```json
[
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:7d90c2cd-a801-4e22-acee-82bf27a4844d.soy",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Soy"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d"
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:7d90c2cd-a801-4e22-acee-82bf27a4844d.feed01",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Soy-based Salmon Feed"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d"
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:dfa01b63-aaaa-4454-b13c-c53d6bdfab43.sal-fry",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Atlantic Salmon Fry"
      }
    ],
    "cbvmda:tradeItemConditionCode": "FIL",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Salmo salar"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "SAL"
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3.sal-whole",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Atlantic Salmon"
      }
    ],
    "cbvmda:tradeItemConditionCode": "WHL",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Salmo salar"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "SAL"
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:30bad813-7fb9-43be-8caa-7e0876552eaa.sal-fillet",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Atlantic Salmon Fillet"
      }
    ],
    "cbvmda:tradeItemConditionCode": "WHL",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Salmo salar"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "SAL"
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Hatchery Co."
      }
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Jim's Feeding Co."
      }
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Per's Salmon Farm Co."
      }
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Fresh Fish Processing Co."
      }
    ]
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:dfa01b63-aaaa-4454-b13c-c53d6bdfab43.hatchery",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:dfa01b63-aaaa-4454-b13c-c53d6bdfab43",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Hatchery"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "123 US Highyway 96"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "San Diego"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:7d90c2cd-a801-4e22-acee-82bf27a4844d.feedmill",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:7d90c2cd-a801-4e22-acee-82bf27a4844d",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Jim's Feedmill"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "981 Main St."
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Small Town"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3.farm",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:d8f9f0b4-a03d-41a3-aa60-b2be0fd9c2f3",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Per's Salmon Farm"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "456 Walnut Blvd"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Verona"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  },
  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:30bad813-7fb9-43be-8caa-7e0876552eaa.processingplant",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:30bad813-7fb9-43be-8caa-7e0876552eaa",
    "name": [
      {
        "@language": "en-US",
        "@value": "Fresh Fish Processor"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "123 Main St."
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "San Diego"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "CA"
        }
      ],
      "countryCode": "US"
    }
  }
]
```