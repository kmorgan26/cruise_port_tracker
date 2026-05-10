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
