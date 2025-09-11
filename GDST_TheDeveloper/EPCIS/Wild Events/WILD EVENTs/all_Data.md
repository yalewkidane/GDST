Details
A couple of details about this scenario:

This data will be recorded by the processor.
The processor is the First Receiver and will take ownership of the products during the transshipment event.
Although the illustration shows a single Transshipment icon, technically two transshipment events will take place, one for each fishing vessel.
We will use Non-GS1 Identifiers for all of the locations except the processing plant.
Because the processor is the one recording the data, we can use the same product definition for both fishing events, because the processor can ensure unique lot numbers. In the event, that a fisherman was recording their own data, they would need to use separate GTINs in order to ensure no collisions on the lot numbers.
Master Data
In order to model this scenario we will need the following master data:

Product Definitions
Raw Tuna
Locations
Fishing Vessel #1 (owned by Fisherman #1)
Fishing Vessel #2 (owned by Fisherman #2)
Transshipment Vessel #1 (owned by Transshipment Company)
Port of San Diego (managed by Tuna Processor)
Tuna Processing Plant (owned by Tuna Processor)
Trading Parties
Fisherman #1
Fisherman #2
Transshipment Company
Tuna Processor
EPCIS JSON-LD (Event Data)
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2021-09-28T13:37:42.2550000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:44b36d39-d494-4533-8ac0-f1ef80649c2c",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:gdst:example.org:location:loc:fisherman02.1"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l001",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "FV-002",
                "cbvmda:vesselName": "Fishing Vessel #2",
                "gdst:gpsAvailability": false,
                "gdst:imoNumber": "IMO00000002",
                "gdst:vesselTripDate": "2021-09-26T13:37:42.2550000+00:00",
                "cbvmda:catchArea": "urn:gdst:fao:77"
              }
            ]
          },
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "San Diego Fishing Authority",
                "certificationStandard": "San Diego Fishing Authority",
                "certificationIdentification": "SDFA-1001"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "San Diego Fishing Authority",
                "certificationStandard": "San Diego Fishing Authority",
                "certificationIdentification": "SDFA-1001"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanPolicy",
                "certificationAgency": "San Diego Fishing Authority",
                "certificationStandard": "San Diego Fishing Authority",
                "certificationIdentification": "SDFA-1001"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:example.org:party:fisherman02.0",
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      },
      {
        "type": "ObjectEvent",
        "eventTime": "2021-09-28T19:00:00.0000000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:8c7d84dc-cdfd-4817-b462-5b6f46efab43",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "urn:gdst:bizstep:transshipment",
        "disposition": "active",
        "readPoint": {
          "id": "geo:0,0"
        },
        "bizLocation": {
          "id": "urn:gdst:example.org:location:loc:transshipment_company.1"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l001",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "destinationList": [
          {
            "type": "owning_party",
            "destination": "urn:epc:id:sgln:08600031303.0.0"
          }
        ],
        "gdst:productOwner": "urn:epc:id:sgln:08600031303.0.0",
        "cbvmda:certificationList": {
          "certification": [
            {
              "gdst:certificationType": "urn:gdst:certType:transshipmentAuth",
              "certificationAgency": "San Diego Transshipment Authorization",
              "certificationStandard": "San Diego Transshipment Authorization",
              "certificationIdentification": "SDTA-1001"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:harvestCoC",
              "certificationAgency": "San Diego Transshipment Authorization",
              "certificationStandard": "San Diego Transshipment Authorization",
              "certificationIdentification": "SDTA-1001"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:humanPolicy",
              "certificationAgency": "San Diego Transshipment Authorization",
              "certificationStandard": "San Diego Transshipment Authorization",
              "certificationIdentification": "SDTA-1001"
            }
          ]
        },
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      },
      {
        "type": "ObjectEvent",
        "eventTime": "2021-09-29T13:37:40.7180000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:8fa21433-4f32-4ab8-a66e-59efa226e5b7",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:gdst:example.org:location:loc:fisherman01.1"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l002",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "FV-001",
                "cbvmda:vesselName": "Fishing Vessel #1",
                "gdst:gpsAvailability": false,
                "gdst:imoNumber": "IMO00000001",
                "gdst:vesselTripDate": "2021-09-26T13:37:42.2550000+00:00",
                "cbvmda:catchArea": "urn:gdst:fao:77"
              }
            ]
          },
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "San Diego Fishing Authority",
                "certificationStandard": "San Diego Fishing Authority",
                "certificationIdentification": "SDFA-1002"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "San Diego Fishing Authority",
                "certificationStandard": "San Diego Fishing Authority",
                "certificationIdentification": "SDFA-1002"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanPolicy",
                "certificationAgency": "San Diego Fishing Authority",
                "certificationStandard": "San Diego Fishing Authority",
                "certificationIdentification": "SDFA-1002"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:example.org:party:fisherman01.0",
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      },
      {
        "type": "ObjectEvent",
        "eventTime": "2021-09-30T13:37:45.8920000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:b5af7f5e-837d-498d-bcc9-72538db3ab1f",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "urn:gdst:bizstep:transshipment",
        "disposition": "active",
        "readPoint": {
          "id": "geo:12,-12"
        },
        "bizLocation": {
          "id": "urn:gdst:example.org:location:loc:transshipment_company.1"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l002",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "destinationList": [
          {
            "type": "owning_party",
            "destination": "urn:epc:id:sgln:08600031303.0.0"
          }
        ],
        "gdst:productOwner": "urn:epc:id:sgln:08600031303.0.0",
        "cbvmda:certificationList": {
          "certification": [
            {
              "gdst:certificationType": "urn:gdst:certType:transshipmentAuth",
              "certificationAgency": "San Diego Transshipment Authorization",
              "certificationStandard": "San Diego Transshipment Authorization",
              "certificationIdentification": "SDTA-1001"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:harvestCoC",
              "certificationAgency": "San Diego Transshipment Authorization",
              "certificationStandard": "San Diego Transshipment Authorization",
              "certificationIdentification": "SDTA-1001"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:humanPolicy",
              "certificationAgency": "San Diego Transshipment Authorization",
              "certificationStandard": "San Diego Transshipment Authorization",
              "certificationIdentification": "SDTA-1001"
            }
          ]
        },
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      },
      {
        "type": "ObjectEvent",
        "eventTime": "2021-10-01T13:37:52.3610000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:909fc668-a91c-4dc5-88a6-012eab28dffc",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "urn:gdst:bizstep:landing",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:gdst:example.org:location:loc:tuna_processor.port_san_diego"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l001",
            "quantity": 10000.0,
            "uom": "KGM"
          },
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l002",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "gdst:productOwner": "urn:epc:id:sgln:08600031303.0.0",
        "cbvmda:certificationList": {
          "certification": [
            {
              "gdst:certificationType": "urn:gdst:certType:landingAuth",
              "certificationAgency": "San Diego Landing Authority",
              "certificationStandard": "San Diego Landing Authority",
              "certificationIdentification": "SDLA-001"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:humanPolicy",
              "certificationAgency": "San Diego Landing Authority",
              "certificationStandard": "San Diego Landing Authority",
              "certificationIdentification": "SDLA-001"
            }
          ]
        },
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      },
      {
        "type": "ObjectEvent",
        "eventTime": "2021-10-01T16:30:00.0000000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:674e45a0-0f33-4c68-af38-d2bcfada54d1",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "shipping",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:gdst:example.org:location:loc:tuna_processor.port_san_diego"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l002",
            "quantity": 10000.0,
            "uom": "KGM"
          },
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l001",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "gdst:productOwner": "urn:epc:id:sgln:08600031303.0.0",
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      },
      {
        "type": "ObjectEvent",
        "eventTime": "2021-10-01T22:00:00.0000000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:e3978e3a-82e9-4262-93f3-6f8d5b0505a6",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "receiving",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:epc:id:sgln:08600031303.1.0"
        },
        "quantityList": [
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l001",
            "quantity": 10000.0,
            "uom": "KGM"
          },
          {
            "epcClass": "urn:epc:class:lgtin:08600031303.00.l002",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "gdst:productOwner": "urn:epc:id:sgln:08600031303.0.0",
        "cbvmda:informationProvider": "urn:epc:id:sgln:08600031303.0.0"
      }
    ]
  }
}
GS1 Web Vocab JSON-LD (Master Data)
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
    "gtin": "urn:epc:idpat:sgtin:08600031303.00",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Raw Tuna"
      }
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "YFT"
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
    "cbvmda:vesselFlagState": "US",
    "cbvmda:vesselID": "FV-001",
    "gdst:imoNumber": "IMO00000001",
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:example.org:location:loc:fisherman01.1",
    "name": [
      {
        "@language": "en-US",
        "@value": "Fishing Vessel #1"
      }
    ],
    "address": {
      "@type": "gs1:PostalAddress",
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
    "cbvmda:vesselFlagState": "US",
    "cbvmda:vesselID": "FV-002",
    "gdst:imoNumber": "IMO00000002",
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:example.org:location:loc:fisherman02.1",
    "name": [
      {
        "@language": "en-US",
        "@value": "Fishing Vessel #2"
      }
    ],
    "address": {
      "@type": "gs1:PostalAddress",
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
    "cbvmda:vesselFlagState": "US",
    "cbvmda:vesselID": "TV-001",
    "gdst:imoNumber": "IMO00000003",
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:example.org:location:loc:transshipment_company.1",
    "name": [
      {
        "@language": "en-US",
        "@value": "Transshipment Vessel"
      }
    ],
    "address": {
      "@type": "gs1:PostalAddress",
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
    "globalLocationNumber": "urn:gdst:example.org:location:loc:tuna_processor.port_san_diego",
    "name": [
      {
        "@language": "en-US",
        "@value": "Port of San Diego"
      }
    ],
    "address": {
      "@type": "gs1:PostalAddress",
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
    "globalLocationNumber": "urn:epc:id:sgln:08600031303.1.0",
    "name": [
      {
        "@language": "en-US",
        "@value": "Tuna Processing Plant"
      }
    ],
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "6461 El Apajo"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Rancho Santa Fe"
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
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:example.org:party:fisherman01.0",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Fisherman #1"
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
    "globalLocationNumber": "urn:gdst:example.org:party:fisherman02.0",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Fisherman #2"
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
    "globalLocationNumber": "urn:gdst:example.org:party:transshipment_companny.0",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Transshipment Company"
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
    "globalLocationNumber": "urn:epc:id:sgln:08600031303.0.0",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Tuna Processor"
      }
    ]
  }
]



-----------------------------------Fishing Event
Fishing Events are used to record when products are harvested from the wild. There are different scenarios that can occur. For the most part Fishing Events should be recorded for each unique harvesting that takes place from the ocean. However, we do recognize that limitations in the industry may not allow for that level of granularity when recording Fishing Events. In the case that level of granularity is not possible, then we recommend that Fishing Events be recorded as often as possible during a fishing trip.

For events after the Fishing Event, we will be building upon the scenario of Mulitple Harvests and Multiple Fishing Events.

Multiple Harvests and Single Fishing Events
This covers when a single large vessel harvested products from multiple locations while on their fishing trip but only wants to record a single fishing event. In this case, we cannot record a single latitude/longitude for the fishing event, and will just list out all the products captured. in this case we won't record a read point, and will just record a catch area.

In this scenario, a fishing vessel named BING Ship owned by Bing Fishing Co. has gone fishing in FAO Zone 77. It has gone trawling in multiple locations for Tuna. In this scenario, the fishing vessel caught 10,000 Kilograms of Tuna through out it's fishing trip.

{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:c6c79c3c-9c93-41fd-8683-a6d1968e5ab7",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot123",
            "quantity": 10000.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:economicZone": "urn:gdst:eez:USA",
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "ID123456789",
                "cbvmda:vesselName": "BING Ship",
                "gdst:fisheryImprovementProject": "Example Fishery Improvement Project",
                "gdst:gpsAvailability": true,
                "gdst:imoNumber": "IMO.1234567890",
                "gdst:satelliteTrackingAuthority": "USA",
                "gdst:subnationalPermitArea": "Los Angeles Fishing Area",
                "gdst:vesselPublicRegistry": "https://www.register-my-vessel.fake.com",
                "gdst:vesselTripDate": "2020-01-25T00:00:00.0000000-06:00",
                "cbvmda:catchArea": "urn:gdst:fao:77",
                "gdst:rfmoArea": "urn:gdst:rfmo:ciffa"
              }
            ]
          },
          "cbvmda:productionMethodForFishAndSeafoodCode": "MARINE_FISHERY",
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "Catch Certificate Authority",
                "certificationStandard": "Catch Certificate Standard",
                "certificationValue": "SIMP.LPCO.2",
                "certificationIdentification": "10161781"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "Los Angeles Fishing Authority",
                "certificationStandard": "Los Angeles Fishing Authorization",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
                "certificationAgency": "WHO",
                "certificationStandard": "WHO Human Decency Policy",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
      }
    ]
  }
}
Multiple Harvests and Multiple Fishing Events
This covers when a vessel harvests products from multiple locations and will record a fishing event for each time they harvested products. In this case, we will record the latitude and longitude for each fishing event.

In this scenario, a fishing vessel named BING Ship owned by Bing Fishing Co. has gone fishing in FAO Zone 77. It has gone trawling in multiple locations for Tuna. In this scenario, the fishing vessel caught 10,000 Kilograms of Tuna through out it's fishing trip trawling in 4 different locations. Each time the fishing vessel went trawling, it caught 2,500 Kilograms at each location and recorded a Fishing Event each time with a latitude and longitude for where the trawling occurred.

WILD EVENTS - Fishing Event - Event 1.txt

Fishing Event #1
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:76e14c50-1478-4544-a3dc-d2a57153e0c2",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "readPoint": {
          "id": "geo:38.288338,-124.018110"
        },
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot1111",
            "quantity": 2500.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:economicZone": "urn:gdst:eez:USA",
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "USA",
                "cbvmda:vesselName": "BING Ship",
                "gdst:fisheryImprovementProject": "Example Fishery Improvement Project",
                "gdst:gpsAvailability": true,
                "gdst:imoNumber": "IMO.1234567890",
                "gdst:satelliteTrackingAuthority": "USA",
                "gdst:subnationalPermitArea": "Los Angeles Fishing Area",
                "gdst:vesselPublicRegistry": "https://www.register-my-vessel.fake.com",
                "cbvmda:catchArea": "urn:gdst:fao:77",
                "gdst:rmfoArea": "urn:gdst:rfmo:ciffa"
              }
            ]
          },
          "cbvmda:productionMethodForFishAndSeafoodCode": "MARINE_FISHERY",
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "Catch Certificate Authority",
                "certificationStandard": "Catch Certificate Standard",
                "certificationValue": "SIMP.LPCO.2",
                "certificationIdentification": "10161781"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "Los Angeles Fishing Authority",
                "certificationStandard": "Los Angeles Fishing Authorization",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
                "certificationAgency": "WHO",
                "certificationStandard": "WHO Human Decency Policy",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
      }
    ]
  }
}
Fishing Event #2
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:cfee7a76-16c4-4f81-b4b0-cb87e6dd46ee",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "readPoint": {
          "id": "geo:38.258151,-123.875288"
        },
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot2222",
            "quantity": 2500.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:economicZone": "urn:gdst:eez:USA",
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "USA",
                "cbvmda:vesselName": "BING Ship",
                "gdst:fisheryImprovementProject": "Example Fishery Improvement Project",
                "gdst:gpsAvailability": true,
                "gdst:imoNumber": "IMO.1234567890",
                "gdst:satelliteTrackingAuthority": "USA",
                "gdst:subnationalPermitArea": "Los Angeles Fishing Area",
                "gdst:vesselPublicRegistry": "https://www.register-my-vessel.fake.com",
                "cbvmda:catchArea": "urn:gdst:fao:77",
                "gdst:rmfoArea": "urn:gdst:rfmo:ciffa"
              }
            ]
          },
          "cbvmda:productionMethodForFishAndSeafoodCode": "MARINE_FISHERY",
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "Catch Certificate Authority",
                "certificationStandard": "Catch Certificate Standard",
                "certificationValue": "SIMP.LPCO.2",
                "certificationIdentification": "10161781"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "Los Angeles Fishing Authority",
                "certificationStandard": "Los Angeles Fishing Authorization",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
                "certificationAgency": "WHO",
                "certificationStandard": "WHO Human Decency Policy",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
      }
    ]
  }
}
Fishing Event #3
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:20f870d4-3883-4b96-b1ec-c2841070507b",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "readPoint": {
          "id": "geo:38.184786,-123.776411"
        },
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot3333",
            "quantity": 2500.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:economicZone": "urn:gdst:eez:USA",
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "USA",
                "cbvmda:vesselName": "BING Ship",
                "gdst:fisheryImprovementProject": "Example Fishery Improvement Project",
                "gdst:gpsAvailability": true,
                "gdst:imoNumber": "IMO.1234567890",
                "gdst:satelliteTrackingAuthority": "USA",
                "gdst:subnationalPermitArea": "Los Angeles Fishing Area",
                "gdst:vesselPublicRegistry": "https://www.register-my-vessel.fake.com",
                "cbvmda:catchArea": "urn:gdst:fao:77",
                "gdst:rmfoArea": "urn:gdst:rfmo:ciffa"
              }
            ]
          },
          "cbvmda:productionMethodForFishAndSeafoodCode": "MARINE_FISHERY",
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "Catch Certificate Authority",
                "certificationStandard": "Catch Certificate Standard",
                "certificationValue": "SIMP.LPCO.2",
                "certificationIdentification": "10161781"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "Los Angeles Fishing Authority",
                "certificationStandard": "Los Angeles Fishing Authorization",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
                "certificationAgency": "WHO",
                "certificationStandard": "WHO Human Decency Policy",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
      }
    ]
  }
}
Fishing Event #4
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:5e275323-5ff1-4f52-95cc-3e585bd7cc94",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:fishingEvent",
        "disposition": "active",
        "readPoint": {
          "id": "geo:38.115669,-123.655561"
        },
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot4444",
            "quantity": 2500.0,
            "uom": "KGM"
          }
        ],
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:economicZone": "urn:gdst:eez:USA",
                "cbvmda:fishingGearTypeCode": "urn:gdst:gear:1.2",
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "USA",
                "cbvmda:vesselName": "BING Ship",
                "gdst:fisheryImprovementProject": "Example Fishery Improvement Project",
                "gdst:gpsAvailability": true,
                "gdst:imoNumber": "IMO.1234567890",
                "gdst:satelliteTrackingAuthority": "USA",
                "gdst:subnationalPermitArea": "Los Angeles Fishing Area",
                "gdst:vesselPublicRegistry": "https://www.register-my-vessel.fake.com",
                "cbvmda:catchArea": "urn:gdst:fao:77",
                "gdst:rmfoArea": "urn:gdst:rfmo:ciffa"
              }
            ]
          },
          "cbvmda:productionMethodForFishAndSeafoodCode": "MARINE_FISHERY",
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCert",
                "certificationAgency": "Catch Certificate Authority",
                "certificationStandard": "Catch Certificate Standard",
                "certificationValue": "SIMP.LPCO.2",
                "certificationIdentification": "10161781"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:fishingAuth",
                "certificationAgency": "Los Angeles Fishing Authority",
                "certificationStandard": "Los Angeles Fishing Authorization",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
                "certificationAgency": "WHO",
                "certificationStandard": "WHO Human Decency Policy",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
      }
    ]
  }
}



----------------------------Transshipment Event
Transshipment Event
How to record the Landing events given different scenarios.
Sometimes after products are harvested from the wild they are transferred to other ships before they are offloaded at shore. When this happens, we refer to these events as Transshipment Events. There are many different names throughout the world for these "middle-men" ships, TransShipment Vessel, Tender, etc. Regardless of the local vocabulary used to describe the ship, or the size of the ship, anytime products harvested from the wild are transferred to another ship prior to reaching land is considered a Transshipment event.

It is important that if there is a change of ownership during the transfer of the products, then that change of ownership should be recorded in the source and destination list on the event as well as the disposition should be set to urn:gdst:disposition:entering_commerce if this is the first time the products changed ownership.

Example #1
In this case, a Transshipment event is recorded. Here we are going to build on the previous scenario where a Vessel with Multiple Harvests and Multiple Fishing Events transshipped all 4 catches to a Transshipment Vessel. In this scenario, the Transshipment Vessel, Jimmy's Tender Vessel owned by Jimmy's Tender Co., is purchasing the Tuna from the Fishing Vessel, so these products are changing ownership and entering commerce for the first time.

{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2019-01-28T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:691b7a9d-3d1b-4e36-8c40-ee77dac64f89",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "urn:gdst:bizstep:transshipment",
        "disposition": "urn:gdst:entering_commerce",
        "readPoint": {
          "id": "geo:37.860236,-123.144697"
        },
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0048000.019283"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-fillet.lot20203015",
            "quantity": 5000.0,
            "uom": "KGM"
          }
        ],
        "sourceList": [
          {
            "type": "owning_party",
            "source": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
          }
        ],
        "destinationList": [
          {
            "type": "owning_party",
            "destination": "urn:gdst:traceability-solution.com:party:0048000.000001"
          }
        ],
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "3P Audit",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
        "cbvmda:certificationList": {
          "certification": [
            {
              "gdst:certificationType": "urn:gdst:certType:transshipment",
              "certificationStandard": "Transshipment Authority",
              "certificationAgency": "Transshipment Authority",
              "certificationValue": "TA_123456789",
              "certificationIdentification": "TA_123456789"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:harvestCoC",
              "certificationStandard": "MSC Chain of Custody",
              "certificationAgency": "MSC",
              "certificationValue": "MSC_COC_1234567890",
              "certificationIdentification": "MSC_COC_1234567890"
            },
            {
              "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
              "certificationStandard": "WHO Human Decency Policy",
              "certificationAgency": "WHO",
              "certificationValue": "1234567890",
              "certificationIdentification": "0987654321"
            }
          ]
        }
      }
    ]
  }
}


---------------------------Landing Event
All products harvested from the wild will have a landing event. This event represents the first time that these wild-harvested products reach land. The Business Step urn:gdst:bizstep:landing will be used when recording this event and no disposition is required. The Location for the event should be the GLN of where the products reached land. Most of the time this will be a port of some kind.

It is important that if there is a change of ownership when the products land, then that change of ownership should be recorded in the source and destination list on the event as well as the disposition should be set to urn:gdst:disposition:entering_commerce if this is the first time the products changed ownership.

{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",

  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:cd876766-754a-4a67-8725-4911de8f92aa",
        "epcList": [],
        "action": "ADD",
        "bizStep": "urn:gdst:bizstep:landing",
        "bizLocation": {
          "id": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"
        },
        "quantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-fillet.lot20203015",
            "quantity": 5000.0,
            "uom": "KGM"
          }
        ],
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
        "gdst:certificationList": {
          "certification": [
            {
              "certificationType": "urn:gdst:certType:landingAuth",
              "certificationStandard": "Landing Authority",
              "certificationAgency": "Landing Authority",
              "certificationValue": "LA_123456789",
              "certificationIdentification": "LA_123456789"
            },
            {
              "certificationType": "urn:gdst:certType:humanyPolicy",
              "certificationStandard": "WHO Human Decency Policy",
              "certificationAgency": "WHO",
              "certificationValue": "1234567890",
              "certificationIdentification": "0987654321"
            }
          ]
        },
        "cbvmda:unloadingPort": "SDPORT",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0048000.000001"
      }
    ]
  }
}



Wild-Caught Master Data
In order to not repeat this master data on every page with example events, the Master Data for wild events is consolidated on this page.

Master Data
Below are the master data elements used for the wild-caught event examples.

Product Definitions
Below are examples of master data for production definitions.

Yellow Fin Tuna
GTIN: urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft

Owning Party: urn:gdst:traceability-solution.com:party:0048000.000001

Information Provider: urn:gdst:traceability-solution.com:party:0048000.000001

Species Scientific Name: Thunnus albacares

Species Purpose Code: YFT

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Yellowfin Tuna"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Thunnus albacares"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "YFT"
    ]
}
Yellow Fin Tuna Filets
GTIN: urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-fillet

Owning Party: urn:gdst:traceability-solution.com:party:0048000.000001

Information Provider: urn:gdst:traceability-solution.com:party:0048000.000001

Species Scientific Name: Thunnus albacares

Species Purpose Code: YFT

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Product",
    "gtin": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-fillet",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Yellowfin Tuna Fillet"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Thunnus albacares"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "YFT"
    ]
}
Organization Definitions
Below are examples of master data for organization definitions.

Bing Fishing Co.
PGLN: urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7

Information Provider: urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Bing Fishing Co."
      }
    ]
  }
Jimmy's Tender Co.
PGLN: urn:gdst:traceability-solution.com:party:0048000.000001

Information Provider: urn:gdst:traceability-solution.com:party:0048000.000001

  {
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Jimmy's Tender Co."
      }
    ]
  }
Bob's Processing Co.
PGLN: urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b

Information Provider: urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Organization",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Processing Co."
      }
    ]
  }
Place Definitions
Below are examples of master data for place definitions.

BING Ship
GLN: urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684

Owning Party: urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7

Information Provider: urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "name": [
      {
        "@language": "en-US",
        "@value": "BING Ship"
      }
    ]
}
Jimmy's Tender Vessel
GLN: urn:gdst:traceability-solution.com:location:loc:0048000.jimmystender001

Owning Party: urn:gdst:traceability-solution.com:party:0048000.000001

Information Provider: urn:gdst:traceability-solution.com:party:0048000.000001

Vessel Flag State: US

Vessel ID: SOME_VESSEL_ID

Vessel Name: Jimmy's Tender Vessel

IMO Number: IMO.1234567

Email: joe@triunionsf.com

Address: 3165 Pacific Hwy, San Diego, CA, US

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "cbvmda:vesselFlagState": "US",
    "cbvmda:vesselID": "SOME_VESSEL_ID",
    "cbvmda:vesselName": "Jimmy's Tender Vessel",
    "gdst:imoNumber": "IMO.1234567",
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0048000.jimmystender001",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Jimmy's Tender Vessel"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "3165 Pacific Hwy"
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
      "countyCode": "US"
    }
}
Port of San Diego
GLN: urn:gdst:traceability-solution.com:location:loc:0048000.sdport

Owning Party: urn:gdst:traceability-solution.com:party:0048000.000001

Information Provider: urn:gdst:traceability-solution.com:party:0048000.000001

Address: 3165 Pacific Hwy, San Diego, CA, US

Unloading Port: SDPORT

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Port of San Diego"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "3165 Pacific Hwy"
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
      "countyCode": "US"
    },
    "cbvmda:unloadingPort": "SDPORT"
  }
Bob's Processor
GLN: urn:gdst:traceability-solution.com:location:loc:0048000.processor

Owning Party: urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b

Information Provider: urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b

Address: 1234 Main Street, Houston, TX, US

{
    "@context": {
      "cbvmda": "urn:epcglobal:cbvmda:mda",
      "xsd": "http://www.w3.org/2001/XMLSchema#",
      "gs1": "http://gs1.org/voc/",
      "@vocab": "http://gs1.org/voc/",
      "gdst": "https://traceability-dialogue.org/vocab/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0048000.processor",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Processor"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "1234 Main Street"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Houston"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "TX"
        }
      ],
      "countyCode": "US"
    }
}
Master Data - GS1 Web Vocab JSON-LD - GDST 1.2 - Full Document
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
    "gtin": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Yellowfin Tuna"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Thunnus albacares"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "YFT"
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
    "gtin": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-fillet",
    "productName": [
      {
        "@language": "en-US",
        "@value": "Yellowfin Tuna Fillet"
      }
    ],
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:speciesForFisheryStatisticsPurposesName": [
      "Thunnus albacares"
    ],
    "cbvmda:speciesForFisheryStatisticsPurposesCode": [
      "YFT"
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
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Bing Fishing Co."
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
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Jimmy's Tender Co."
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
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "organizationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Processing Co."
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
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "BING Ship"
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
    "cbvmda:vesselFlagState": "US",
    "cbvmda:vesselID": "SOME_VESSEL_ID",
    "cbvmda:vesselName": "Jimmy's Tender Vessel",
    "gdst:imoNumber": "IMO.1234567",
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0048000.jimmystender001",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "name": [
      {
        "@language": "en-US",
        "@value": "Jimmy's Tender Vessel"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "3165 Pacific Hwy"
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
      "countyCode": "US"
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
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Port of San Diego"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "3165 Pacific Hwy"
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
      "countyCode": "US"
    },
    "cbvmda:unloadingPort": "SDPORT"
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
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0048000.processor",
    "cbvmda:owning_party": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
    "gs1:physicalLocationName": [
      {
        "@language": "en-US",
        "@value": "Bob's Processor"
      }
    ],
    "email": "joe@triunionsf.com",
    "address": {
      "@type": "gs1:PostalAddress",
      "streetAddress": [
        {
          "@language": "en-US",
          "@value": "1234 Main Street"
        }
      ],
      "addressLocality": [
        {
          "@language": "en-US",
          "@value": "Houston"
        }
      ],
      "addressRegion": [
        {
          "@language": "en-US",
          "@value": "TX"
        }
      ],
      "countyCode": "US"
     }
  }
]




-----------------------------------On-Vessel Processing
Sometimes products harvested from the wild are initially processed onboard the vessel before reaching land. This is commonly referred to as On Vessel Processing. These are standard Processing / Transformation events with a Business Step of commisioning and a disposition of active from the standard CBV 1.2. The location for the On Vessel Processing should be the GLN of the vessel that performed the processing.

Below we have an example event with accompanying Master Data to go with that event.

{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
      {
        "type": "TransformationEvent",
        "eventTime": "2020-01-27T00:00:00.0000000-06:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:591458db-d96e-4466-a4bd-1a30d625fd41",
        "inputQuantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot1111",
            "quantity": 2500.0,
            "uom": "KGM"
          },
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot2222",
            "quantity": 2500.0,
            "uom": "KGM"
          },
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot3333",
            "quantity": 2500.0,
            "uom": "KGM"
          },
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.lot4444",
            "quantity": 2500.0,
            "uom": "KGM"
          }
        ],
        "outputQuantityList": [
          {
            "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-fillet.lot20203015",
            "quantity": 5000.0,
            "uom": "KGM"
          }
        ],
        "bizStep": "commissioning",
        "disposition": "active",
        "bizLocation": {
          "id": "urn:epc:id:sgln:0614141.00888.0"
        },
        "ilmd": {
          "cbvmda:vesselCatchInformationList": {
            "cbvmda:vesselCatchInformation": [
              {
                "cbvmda:vesselFlagState": "US",
                "cbvmda:vesselID": "USA",
                "cbvmda:vesselName": "BING Ship",
                "gdst:gpsAvailability": false,
                "gdst:imoNumber": "IMO.1234567890",
                "gdst:vesselPublicRegistry": "https://www.register-my-vessel.fake.com"
              }
            ]
          },
          "cbvmda:itemExpirationDate": "2020-03-15T00:00:00.0000000-06:00",
          "cbvmda:countryOfOrigin": "US",
          "cbvmda:certificationList": {
            "certification": [
              {
                "gdst:certificationType": "urn:gdst:certType:harvestCoC",
                "certificationAgency": "MSC",
                "certificationStandard": "MSC Chain of Custody",
                "certificationValue": "MSC_COC_1234567890",
                "certificationIdentification": "MSC_COC_1234567890"
              },
              {
                "gdst:certificationType": "urn:gdst:certType:humanyPolicy",
                "certificationAgency": "WHO",
                "certificationStandard": "WHO Human Decency Policy",
                "certificationValue": "1234567890",
                "certificationIdentification": "0987654321"
              }
            ]
          }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "gdst:humanWelfarePolicy": "WHO Human Decency Policy",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
      }
    ]
  }
}



Disaggregation Event
When previously aggregated products are separated back into their individual products, such as removing cases from a pallet, the event is recorded as a disaggregation event. Disaggregation events are indicated by the type AggregationEvent, the action of delete, the business step of unpacking, and the disposition of inactive.

Below is an example of a disaggregation event whose master data is defined in the Wild-Caught Master Data article.

See Aggregation vs Commingling vs Processing to learn about the differences between aggregation, commingling, and processing events.
{
    "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "creationDate":"2005-07-11T11:30:47.0Z",
  "epcisBody": {
   "eventList": [
     {
            "type": "AggregationEvent",
            "eventID": "urn:uuid:591458db-d96e-4466-a4bd-1a30d625fd41",
	    "eventTime": "2013-06-08T14:58:56.591Z",
      	    "eventTimeZoneOffset": "+02:00",
  	    "parentID":"urn:epc:id:sscc:08600031303.0003",
	    "childEPCs": [
              "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft"
             ],
             "action": "DELETE",
             "bizStep": "unpacking",
             "disposition": "inactive",
	     "readPoint": {"id": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"},
	     "bizLocation": {"id": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"}
		  
     }
   ]
  }
}


Aggregation Event
When multiple physical products are grouped into a single higher-level unit, such as grouping cases onto a pallet, the event is recorded as an aggregation event. Aggregation events are indicated by the type AggregationEvent, the action of add, the business step of packing and the disposition of active.

Below is an example of an aggregation event whose master data is defined in the Wild-Caught Master Data article.

See Aggregation vs Commingling vs Processing to learn about the differences between aggregation, commingling, and processing events.
{
    "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "creationDate":"2005-07-11T11:30:47.0Z",
  "epcisBody": {
   "eventList": [
     {
                  "type": "AggregationEvent",
		  "eventID": "urn:uuid:591458db-d96e-4466-a4bd-1a30d625fd41",
		  "eventTime": "2013-06-08T14:58:56.591Z",
		  "eventTimeZoneOffset": "+02:00",
		  "parentID":"urn:epc:id:sscc:08600031303.0003",
		  "childEPCs": [
                    "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft"
                  ],
		  "action": "ADD",
		  "bizStep": "packing",
		  "disposition": "active",
		  "readPoint": {"id": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"},
		  "bizLocation": {"id": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"},
		  
		  "childQuantityList": [
		  	{"epcClass":"urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.12345","quantity":10, "uom":"KGM"},
		  	{"epcClass":"urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.67890","quantity":200.5,"uom":"KGM"}
		  ]
     }
   ]
  }
}

Processing Event
When a raw materials or products are transformed into a different state or product, the event is recorded a processing event. Processing events are indicated by the business step of commissioning and the type of TransformationEvent. Processing events also include a processing type KDE which indicates what kind of transformation event is taking place. The processing type KDE is a GDST extension that accepts the values GENERAL or CLEANING.

Below is an example of a processing event whose master data defined in the Wild-Caught Master Data article.

See Aggregation vs Commingling vs Processing to learn about the differences between aggregation, commingling, and processing events.
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
      "type": "EPCISDocument",
      "creationDate": "2001-12-17T09:30:47.0000000+00:00",
      "schemaVersion": "2.0",
      "sender": "test",
      "receiver": "test",
      "instanceIdentifier": "9999",
      "epcisBody": {
        "eventList": [
            {
                "type": "TransformationEvent",
                "eventTime": "2023-01-27T16:00:00.0000000+00:00",
                "eventTimeZoneOffset": "+00:00",
                "eventID": "urn:uuid:37ffc013-e4b1-4555-b9e7-7dd6b0f98a0e",
                "inputQuantityList": [
                    {
                        "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft.12345",
                        "quantity": 51650.81131932347,
                        "uom": "KGM"
                    }
                ],
                "outputQuantityList": [
                    {
                        "epcClass": "urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft-filet.12345",
                        "quantity": 37455.0,
                        "uom": "KGM"
                    }
                ],
                "bizStep": "commissioning",
                "bizLocation": {
                    "id": "urn:gdst:traceability-solution.com:location:loc:0048000.processor"
                },
                "ilmd": {
                    "gdst:processingType": "complete",
                    "cbvmda:countryOfOrigin": "EC",
                    "cbvmda:certificationList": {
                "certification": [
                    {
                        "gdst:certificationType": "urn:gdst:certtype:harvestcoc"
                    },
                    {
                        "gdst:certificationType": "urn:gdst:certtype:humanPolicy"
                    }
                ]
            }
        },
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b",
        "gdst:humanWelfarePolicy": "3P Audit",
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:94d811f0-6808-48dc-a68f-0c4e5bd9179b"
       }
     ] 
   }
}



----------------------Receiving Event
When a product is officially accepted at a new location, the event is recorded as a receiving event. Receiving events are indicated by the type of Object, the action OBSERVE, and the business step of receiving.

Below is an example of a receiving event whose master data is defined in the Wild-Caught Master Data article.

See Event Sources and Destinations to learn about different source list and destination values.
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
        "type": "ObjectEvent",
        "eventTime": "2023-01-27T18:00:00.0000000+00:00",
        "eventTimeZoneOffset": "+00:00",
        "eventID": "urn:uuid:4a3109c2-64b2-44d1-acf5-bb19002113c1",
        "epcList": [],
        "action": "OBSERVE",
        "bizStep": "receiving",
        "bizLocation": {
            "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-            c98ee1e8b684"
        },
        "quantityList": [
            {
                "epcClass": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft",
                "quantity": 45860.0,
                "uom": "KGM"
            }
        ],
        "sourceList": [
            {
                "type": "urn:epcglobal:cbv:sdt:owning_party",
                "source": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"
            },
            {
                "type": "urn:epcglobal:cbv:sdt:location",
                "source": "urn:gdst:traceability-solution.com:location:loc:0048000.processor"
            }
        ],
        "destinationList": [
            {
                "type": "urn:epcglobal:cbv:sdt:owning_party",
                "destination": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
            },
            {
                "type": "urn:epcglobal:cbv:sdt:location",
                "destination": "urn:gdst:traceability-solution.com:location:loc:0048000.processor"
            }
        ],
        "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
        "cbvmda:certificationList": {
            "certification": [
                {
                    "gdst:certificationType": "urn:gdst:certtype:humanPolicy"
                },
                {
                    "gdst:certificationType": "urn:gdst:certtype:harvestcoc"
                }
            ]
        },
        "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
    }
   
}



-------------------------------Shipping Event
When products are transported from one location to another, the event is recorded as a shipping event. Shipping events are indicated by the type ObjectEvent, the action OBSERVE, and the business step of shipping.

Below we have an example of a shipping event whose master data is defined in the Wild-Caught Master Data article.

See Event Sources and Destinations to learn about different source list and destination values.
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    {
      "xsi": "http://www.w3.org/2001/XMLSchema-instance/"
    },
    {
      "sbdh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader/"
    },
    {
      "gdst": "https://traceability-dialogue.org/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "creationDate": "2001-12-17T09:30:47.0000000+00:00",
  "schemaVersion": "2.0",
  "sender": "test",
  "receiver": "test",
  "instanceIdentifier": "9999",
  "epcisBody": {
    "eventList": [
        {
            "type": "ObjectEvent",
            "eventTime": "2023-02-18T00:00:00.0000000+00:00",
            "eventTimeZoneOffset": "+00:00",
            "eventID": "urn:uuid:d1e9ff8e-30c8-4ea0-b08e-26b1859ccc30",
            "epcList": [],
            "action": "OBSERVE",
            "bizStep": "shipping",
            "bizLocation": {
                "id": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684"
            },
            "quantityList": [
                {
                    "epcClass": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.yft",
                    "quantity": 45860.0,
                    "uom": "KGM"
                }
            ],
            "sourceList": [
                {
                    "type": "urn:epcglobal:cbv:sdt:owning_party",
                    "source": "urn:gdst:traceability-solution.com:location:loc:0048000.sdport"
                },
                {
                    "type": "urn:epcglobal:cbv:sdt:location",
                    "source": "urn:gdst:traceability-solution.com:location:loc:0048000.processor"
                }
            ],
            "destinationList": [
                {
                    "type": "urn:epcglobal:cbv:sdt:owning_party",
                    "destination": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
                },
                {
                    "type": "urn:epcglobal:cbv:sdt:location",
                    "destination": "urn:gdst:traceability-solution.com:location:loc:0048000.processor"
                }
            ],
            "gdst:productOwner": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7",
            "cbvmda:certificationList": {
                "certification": [
                    {
                        "gdst:certificationType": "urn:gdst:certtype:harvestcoc"
                    }
                ]
            },
            "cbvmda:informationProvider": "urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7"
        }
    ]
   }
}



--------------Gear Types
Different vessels use different gear types depending on the vessel as well as the commodity being harvested from the wild. In general, we have categorized these different gear types into 2 categories, continuous deployment and non-continuous deployment gear type. The GSDT recommended approach is if the gear is deployed for an area larger than a square kilometer then it is a continuous deployement, otherwise it is non-continuous deployment.

Continuous Deployment
These are gear types that are deployed continuously for long periods of time such as trawling. When recording Fishing Events when this gear type is used, it is recommended that a Fishing Event is recorded for each square kilometer that the gear is deployed and products are being harvested.

Non-Continuous Deployement
These are gear types that are deployed in a non-continuous manner, such as hook and line that are deployed for short period of times and then harvested products are collected. It is recommended that a Fishing Event is recorded for each time the gear is deployed.


