// cruises.js
// Edit this file to add your own cruise data.
// Each cruise has a cruiseLine, ship, color, dates, and an ordered list of ports.
// The "homePort: true" flag marks departure/home ports.
// The "seaDays" array lists any days at sea between ports (for reference).
// The "images" path points to a folder under src/images/ for port photos.

const CRUISES = [
  {
    id: "cruise-2014-bahamas",
    name: "Bahamas 4-Night",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Fascination",
    departureDate: "2014-01-16",
    returnDate: "2014-01-20",
    color: "#CC0000",
    seaDays: ["2014-01-17"],
    ports: [
      {
        name: "JAXPORT (Jacksonville)",
        city: "Jacksonville, FL",
        lat: 30.3322,
        lng: -81.6557,
        homePort: true,
        date: "2014-01-16",
        notes: "Departure – Day 1",
        images: "images/cruise-2014-bahamas/jacksonville"
      },
      {
        name: "Nassau Cruise Port",
        city: "Nassau, Bahamas",
        lat: 25.0820,
        lng: -77.3388,
        date: "2014-01-18",
        notes: "Day 3 – In port",
        images: "images/cruise-2014-bahamas/nassau"
      },
      {
        name: "Freeport Cruise Port",
        city: "Freeport, Grand Bahama, Bahamas",
        lat: 26.5333,
        lng: -78.6966,
        date: "2014-01-19",
        notes: "Day 4 – In port",
        images: "images/cruise-2014-bahamas/freeport"
      }
    ]
  },
  {
    id: "cruise-2015-bahamas",
    name: "Bahamas 4-Night",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Fascination",
    departureDate: "2015-01-22",
    returnDate: "2015-01-26",
    color: "#E65100",
    companions: ["Mom"],
    seaDays: ["2015-01-23"],
    ports: [
      {
        name: "JAXPORT (Jacksonville)",
        city: "Jacksonville, FL",
        lat: 30.3322,
        lng: -81.6557,
        homePort: true,
        date: "2015-01-22",
        notes: "Departure – Day 1. Sailed with Mom.",
        images: "images/cruise-2015-bahamas/jacksonville"
      },
      {
        name: "Freeport Cruise Port",
        city: "Freeport, Grand Bahama, Bahamas",
        lat: 26.5333,
        lng: -78.6966,
        date: "2015-01-24",
        notes: "Day 3 – In port",
        images: "images/cruise-2015-bahamas/freeport"
      },
      {
        name: "Nassau Cruise Port",
        city: "Nassau, Bahamas",
        lat: 25.0820,
        lng: -77.3388,
        date: "2015-01-25",
        notes: "Day 4 – In port",
        images: "images/cruise-2015-bahamas/nassau"
      }
    ]
  },
  {
    id: "cruise-2015-caribbean",
    name: "Western Caribbean 5-Night",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Paradise",
    departureDate: "2015-04-27",
    returnDate: "2015-05-02",
    color: "#2E7D32",
    seaDays: ["2015-04-28", "2015-05-01"],
    ports: [
      {
        name: "Port Tampa Bay",
        city: "Tampa, FL",
        lat: 27.9316,
        lng: -82.4525,
        homePort: true,
        date: "2015-04-27",
        notes: "Departure – Day 1",
        images: "images/cruise-2015-caribbean/tampa"
      },
      {
        name: "George Town Cruise Terminal",
        city: "Grand Cayman, Cayman Islands",
        lat: 19.2869,
        lng: -81.3674,
        date: "2015-04-29",
        notes: "Day 3 – In port",
        images: "images/cruise-2015-caribbean/grand-cayman"
      },
      {
        name: "Cozumel Cruise Port",
        city: "Cozumel, Mexico",
        lat: 20.5101,
        lng: -86.9570,
        date: "2015-04-30",
        notes: "Day 4 – In port",
        images: "images/cruise-2015-caribbean/cozumel"
      }
    ]
  },
  {
    id: "cruise-2015-new-orleans",
    name: "Gulf of Mexico 5-Night",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Elation",
    departureDate: "2015-09-28",
    returnDate: "2015-10-03",
    color: "#6A1B9A",
    companions: ["Army friends"],
    seaDays: ["2015-09-29", "2015-10-01", "2015-10-02"],
    ports: [
      {
        name: "Port of New Orleans",
        city: "New Orleans, LA",
        lat: 29.9443,
        lng: -90.0615,
        homePort: true,
        date: "2015-09-28",
        notes: "Departure – Day 1. Sailed with Army friends.",
        images: "images/cruise-2015-new-orleans/new-orleans"
      },
      {
        name: "Cozumel Cruise Port",
        city: "Cozumel, Mexico",
        lat: 20.5101,
        lng: -86.9570,
        date: "2015-09-30",
        notes: "Day 3 – In port",
        images: "images/cruise-2015-new-orleans/cozumel"
      }
    ]
  },
  {
    id: "cruise-2021-eastern-carib",
    name: "Eastern Caribbean 8-Night",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Magic",
    departureDate: "2021-10-23",
    returnDate: "2021-10-31",
    color: "#00838F",
    seaDays: ["2021-10-24", "2021-10-25", "2021-10-30"],
    ports: [
      {
        name: "Port Canaveral",
        city: "Cape Canaveral, FL",
        lat: 28.4158,
        lng: -80.5914,
        homePort: true,
        date: "2021-10-23",
        notes: "Departure – Day 1",
        images: "images/cruise-2021-eastern-carib/port-canaveral"
      },
      {
        name: "Philipsburg Cruise Port",
        city: "Sint Maarten",
        lat: 18.0246,
        lng: -63.0456,
        date: "2021-10-26",
        notes: "Day 4 – In port",
        images: "images/cruise-2021-eastern-carib/st-maarten"
      },
      {
        name: "Charlotte Amalie Harbor",
        city: "St. Thomas, USVI",
        lat: 18.3430,
        lng: -64.9307,
        date: "2021-10-27",
        notes: "Day 5 – In port",
        images: "images/cruise-2021-eastern-carib/st-thomas"
      },
      {
        name: "Port of San Juan",
        city: "San Juan, Puerto Rico",
        lat: 18.4663,
        lng: -66.1057,
        date: "2021-10-28",
        notes: "Day 6 – In port",
        images: "images/cruise-2021-eastern-carib/san-juan"
      },
      {
        name: "Amber Cove Cruise Port",
        city: "Puerto Plata, Dominican Republic",
        lat: 19.8968,
        lng: -70.7384,
        date: "2021-10-29",
        notes: "Day 7 – In port",
        images: "images/cruise-2021-eastern-carib/puerto-plata"
      }
    ]
  },
  {
    id: "cruise-2024-bahamas",
    name: "Bahamas 4-Night",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Elation",
    departureDate: "2024-12-14",
    returnDate: "2024-12-18",
    color: "#F57F17",
    seaDays: ["2024-12-15"],
    ports: [
      {
        name: "JAXPORT (Jacksonville)",
        city: "Jacksonville, FL",
        lat: 30.3322,
        lng: -81.6557,
        homePort: true,
        date: "2024-12-14",
        notes: "Departure – Day 1",
        images: "images/cruise-2024-bahamas/jacksonville"
      },
      {
        name: "Nassau Cruise Port",
        city: "Nassau, Bahamas",
        lat: 25.0820,
        lng: -77.3388,
        date: "2024-12-16",
        notes: "Day 3 – In port",
        images: "images/cruise-2024-bahamas/nassau"
      },
      {
        name: "Princess Cays",
        city: "Eleuthera, Bahamas",
        lat: 25.0500,
        lng: -77.9667,
        date: "2024-12-17",
        notes: "Day 4 – Private island",
        images: "images/cruise-2024-bahamas/eleuthera"
      }
    ]
  },
  {
    id: "cruise-2026-rhine",
    name: "Rhine River Cruise",
    cruiseLine: "Viking River Cruises",
    ship: "Viking Kara",
    departureDate: "2026-04-22",
    returnDate: "2026-05-05",
    color: "#0277BD",
    roundTrip: false,
    ports: [
      {
        name: "Zurich",
        city: "Zurich, Switzerland",
        lat: 47.3769,
        lng: 8.5417,
        type: "land",
        date: "2026-04-22",
        nights: 2,
        hotel: "ibis Styles Zurich City Center",
        notes: "Flew in from Atlanta. 2 nights.",
        images: "images/cruise-2026-rhine/zurich"
      },
      {
        name: "Mount Pilatus",
        city: "Alpnachstad, Switzerland",
        lat: 46.9789,
        lng: 8.2526,
        type: "excursion",
        excludeFromRoute: true,
        date: "2026-04-24",
        notes: "Swiss Alps Tour",
        images: "images/cruise-2026-rhine/mount-pilatus"
      },
      {
        name: "Saint-Louis",
        city: "Saint-Louis, Alsace, France",
        lat: 47.5893,
        lng: 7.5643,
        type: "land",
        date: "2026-04-25",
        nights: 1,
        hotel: "Aparthotel Adagio Access Saint Louis Bâle",
        notes: "Took train to Basel, tram across the French border. 1 night.",
        images: "images/cruise-2026-rhine/saint-louis"
      },
      {
        name: "Basel Cruise Port",
        city: "Basel, Switzerland",
        lat: 47.5596,
        lng: 7.5886,
        homePort: true,
        date: "2026-04-26",
        notes: "Boarded Viking Kara – Sunday evening departure",
        images: "images/cruise-2026-rhine/basel"
      },
      {
        name: "Breisach",
        city: "Breisach am Rhein, Germany",
        lat: 48.0308,
        lng: 7.5762,
        date: "2026-04-27",
        notes: "Day 2 – In port",
        images: "images/cruise-2026-rhine/breisach"
      },
      {
        name: "Strasbourg",
        city: "Strasbourg, France",
        lat: 48.5734,
        lng: 7.7521,
        date: "2026-04-28",
        notes: "Day 3 – In port",
        images: "images/cruise-2026-rhine/strasbourg"
      },
      {
        name: "Speyer",
        city: "Speyer, Germany",
        lat: 49.3227,
        lng: 8.4363,
        date: "2026-04-29",
        notes: "Day 4 – In port",
        images: "images/cruise-2026-rhine/speyer"
      },
      {
        name: "Koblenz",
        city: "Koblenz, Germany",
        lat: 50.3569,
        lng: 7.5890,
        date: "2026-04-30",
        notes: "Day 5 – In port",
        images: "images/cruise-2026-rhine/koblenz"
      },
      {
        name: "Cologne",
        city: "Cologne, Germany",
        lat: 50.9333,
        lng: 6.9500,
        date: "2026-05-01",
        notes: "Day 6 – In port",
        images: "images/cruise-2026-rhine/cologne"
      },
      {
        name: "Kinderdijk",
        city: "Kinderdijk, Netherlands",
        lat: 51.8876,
        lng: 4.6292,
        date: "2026-05-02",
        notes: "Day 7 – Windmill UNESCO site",
        images: "images/cruise-2026-rhine/kinderdijk"
      },
      {
        name: "Lelystad",
        city: "Lelystad, Netherlands",
        lat: 52.5185,
        lng: 5.4714,
        type: "disembarkation",
        date: "2026-05-03",
        notes: "Disembarkation. Bus to Amsterdam.",
        images: "images/cruise-2026-rhine/lelystad"
      },
      {
        name: "Amsterdam",
        city: "Amsterdam, Netherlands",
        lat: 52.3676,
        lng: 4.9041,
        type: "land",
        date: "2026-05-03",
        nights: 2,
        notes: "2 nights. Canal tour May 4th. Flew home to Atlanta May 5th.",
        images: "images/cruise-2026-rhine/amsterdam"
      }
    ]
  }
];
