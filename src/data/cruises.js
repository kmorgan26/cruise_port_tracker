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
    id: "cruise-2017-bahamas",
    name: "Bahamas 4-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Sky",
    departureDate: "2017-04-24",
    returnDate: "2017-04-28",
    color: "#1565C0",
    seaDays: ["2017-04-25"],
    ports: [
      {
        name: "PortMiami",
        city: "Miami, FL",
        lat: 25.7743,
        lng: -80.1686,
        homePort: true,
        date: "2017-04-24",
        notes: "Departure – Day 1",
        images: "images/cruise-2017-bahamas/miami"
      },
      {
        name: "Nassau Cruise Port",
        city: "Nassau, Bahamas",
        lat: 25.0820,
        lng: -77.3388,
        date: "2017-04-26",
        notes: "Day 3 – Private taxi tour",
        images: "images/cruise-2017-bahamas/nassau"
      },
      {
        name: "Great Stirrup Cay",
        city: "Berry Islands, Bahamas",
        lat: 25.8333,
        lng: -77.9167,
        date: "2017-04-27",
        notes: "Day 4 – Norwegian private island",
        images: "images/cruise-2017-bahamas/great-stirrup-cay"
      }
    ]
  },
  {
    id: "cruise-2017-south-carib",
    name: "Southern Caribbean 11-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Sun",
    departureDate: "2017-11-17",
    returnDate: "2017-11-28",
    color: "#AD1457",
    seaDays: ["2017-11-18", "2017-11-19", "2017-11-22", "2017-11-25", "2017-11-26"],
    ports: [
      {
        name: "PortMiami",
        city: "Miami, FL",
        lat: 25.7743,
        lng: -80.1686,
        homePort: true,
        date: "2017-11-17",
        notes: "Departure – Day 1",
        images: "images/cruise-2017-south-carib/miami"
      },
      {
        name: "Port of Oranjestad",
        city: "Oranjestad, Aruba",
        lat: 12.5186,
        lng: -70.0358,
        date: "2017-11-20",
        notes: "Day 4 – In port",
        images: "images/cruise-2017-south-carib/aruba"
      },
      {
        name: "Port of Willemstad",
        city: "Willemstad, Curaçao",
        lat: 12.1084,
        lng: -68.9335,
        date: "2017-11-21",
        notes: "Day 5 – In port",
        images: "images/cruise-2017-south-carib/curacao"
      },
      {
        name: "St. John's Cruise Port",
        city: "St. John's, Antigua and Barbuda",
        lat: 17.1274,
        lng: -61.8468,
        date: "2017-11-23",
        notes: "Day 7 – In port",
        images: "images/cruise-2017-south-carib/antigua"
      },
      {
        name: "Port Zante",
        city: "Basseterre, St. Kitts and Nevis",
        lat: 17.2948,
        lng: -62.7261,
        date: "2017-11-24",
        notes: "Day 8 – In port",
        images: "images/cruise-2017-south-carib/st-kitts"
      },
      {
        name: "Great Stirrup Cay",
        city: "Berry Islands, Bahamas",
        lat: 25.8333,
        lng: -77.9167,
        date: "2017-11-27",
        notes: "Day 11 – Norwegian private island",
        images: "images/cruise-2017-south-carib/great-stirrup-cay"
      }
    ]
  },
  {
    id: "cruise-2018-jade-cancelled",
    name: "Caribbean – Cancelled at Sea",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Jade",
    departureDate: "2018-11-16",
    returnDate: "2018-11-20",
    color: "#78909C",
    roundTrip: false,
    notes: "Cruise cut short due to a mechanical issue in San Juan. Remained on the ship while repairs were attempted, then flew home to Miami on a chartered flight.",
    ports: [
      {
        name: "Miami",
        city: "Miami, Florida",
        lat: 25.7742,
        lng: -80.1851,
        homePort: true,
        type: "port",
        date: "2018-11-16",
        notes: "Embarkation day.",
        images: "images/cruise-2018-jade-cancelled/miami"
      },
      {
        name: "San Juan",
        city: "Puerto Rico",
        lat: 18.4655,
        lng: -66.1057,
        homePort: false,
        type: "port",
        date: "2018-11-18",
        notes: "Ship developed a mechanical issue upon arrival. Cruise cancelled. Remained aboard while repairs were assessed, then flew home to Miami on a chartered flight.",
        images: "images/cruise-2018-jade-cancelled/san-juan"
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
    id: "cruise-2022-alaska",
    name: "Alaska 9-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Spirit",
    departureDate: "2022-07-18",
    returnDate: "2022-07-27",
    color: "#37474F",
    seaDays: ["2022-07-19", "2022-07-23"],
    ports: [
      {
        name: "Port of Seattle",
        city: "Seattle, WA",
        lat: 47.6011,
        lng: -122.3368,
        homePort: true,
        date: "2022-07-18",
        notes: "Departure – Day 1",
        images: "images/cruise-2022-alaska/seattle"
      },
      {
        name: "Port of Sitka",
        city: "Sitka, AK",
        lat: 57.0531,
        lng: -135.3300,
        date: "2022-07-20",
        notes: "Day 3 – In port",
        images: "images/cruise-2022-alaska/sitka"
      },
      {
        name: "Icy Strait Point",
        city: "Hoonah, AK",
        lat: 58.1089,
        lng: -135.4444,
        date: "2022-07-21",
        notes: "Day 4 – In port",
        images: "images/cruise-2022-alaska/icy-strait-point"
      },
      {
        name: "Port of Skagway",
        city: "Skagway, AK",
        lat: 59.4583,
        lng: -135.3139,
        date: "2022-07-22",
        notes: "Day 5 – White Pass & Yukon Route train ride",
        images: "images/cruise-2022-alaska/skagway"
      },
      {
        name: "Port of Juneau",
        city: "Juneau, AK",
        lat: 58.3005,
        lng: -134.4197,
        date: "2022-07-24",
        notes: "Day 7 – Mendenhall Glacier excursion (Dawes Glacier sea day on July 23 due to weather)",
        images: "images/cruise-2022-alaska/juneau"
      },
      {
        name: "Port of Ketchikan",
        city: "Ketchikan, AK",
        lat: 55.3422,
        lng: -131.6461,
        date: "2022-07-25",
        notes: "Day 8 – In port",
        images: "images/cruise-2022-alaska/ketchikan"
      },
      {
        name: "Port of Victoria",
        city: "Victoria, BC, Canada",
        lat: 48.4284,
        lng: -123.3656,
        date: "2022-07-26",
        notes: "Day 9 – Walked downtown",
        images: "images/cruise-2022-alaska/victoria"
      }
    ]
  },
  {
    id: "cruise-2023-south-america",
    name: "South America 15-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Star",
    departureDate: "2023-01-01",
    returnDate: "2023-01-15",
    color: "#5D4037",
    roundTrip: false,
    seaDays: ["2023-01-02", "2023-01-05", "2023-01-06", "2023-01-09", "2023-01-12", "2023-01-13"],
    ports: [
      {
        name: "Terminal de Pasajeros San Antonio",
        city: "San Antonio, Chile",
        lat: -33.5871,
        lng: -71.6128,
        homePort: true,
        date: "2023-01-01",
        notes: "Departure – Day 1. Boarded near Santiago.",
        images: "images/cruise-2023-south-america/san-antonio"
      },
      {
        name: "Puerto Montt",
        city: "Puerto Montt, Chile",
        lat: -41.4717,
        lng: -72.9369,
        date: "2023-01-03",
        notes: "Day 3 – In port",
        images: "images/cruise-2023-south-america/puerto-montt"
      },
      {
        name: "Puerto Chacabuco",
        city: "Puerto Chacabuco, Chile",
        lat: -45.4636,
        lng: -72.8044,
        date: "2023-01-04",
        notes: "Day 4 – Tour to Coyhaique, Chile",
        images: "images/cruise-2023-south-america/puerto-chacabuco"
      },
      {
        name: "Punta Arenas",
        city: "Punta Arenas, Chile",
        lat: -53.1638,
        lng: -70.9171,
        date: "2023-01-07",
        notes: "Day 7 – Fort Bulnes excursion",
        images: "images/cruise-2023-south-america/punta-arenas"
      },
      {
        name: "Glacier Alley",
        city: "Beagle Channel, Chile/Argentina",
        lat: -54.8700,
        lng: -69.5700,
        type: "scenic",
        date: "2023-01-08",
        notes: "Day 8 – Scenic cruising through Glacier Alley. Glaciers: Alemania, Italia, Romanche.",
        images: "images/cruise-2023-south-america/glacier-alley"
      },
      {
        name: "Port of Ushuaia",
        city: "Ushuaia, Argentina",
        lat: -54.8019,
        lng: -68.3029,
        date: "2023-01-08",
        notes: "Day 8 – Private island tour with Magellanic penguins (Isla Martillo)",
        images: "images/cruise-2023-south-america/ushuaia"
      },
      {
        name: "Cape Horn",
        city: "Cape Horn, Chile",
        lat: -55.9833,
        lng: -67.2833,
        type: "scenic",
        excludeFromRoute: true,
        date: "2023-01-09",
        notes: "Day 9 – Sailed around Cape Horn (sea day)",
        images: "images/cruise-2023-south-america/cape-horn"
      },
      {
        name: "Stanley Harbour",
        city: "Stanley, Falkland Islands",
        lat: -51.6938,
        lng: -57.8613,
        date: "2023-01-10",
        notes: "Day 10 – Walking tour",
        images: "images/cruise-2023-south-america/falkland-islands"
      },
      {
        name: "Puerto Madryn",
        city: "Puerto Madryn, Argentina",
        lat: -42.7692,
        lng: -65.0385,
        type: "missed",
        excludeFromRoute: true,
        date: "2023-01-11",
        notes: "Day 11 – Missed due to weather (sea day)",
        images: "images/cruise-2023-south-america/puerto-madryn"
      },
      {
        name: "Port of Montevideo",
        city: "Montevideo, Uruguay",
        lat: -34.9011,
        lng: -56.1645,
        date: "2023-01-14",
        notes: "Day 14 – 12-mile run through the city",
        images: "images/cruise-2023-south-america/montevideo"
      },
      {
        name: "Buenos Aires Cruise Terminal",
        city: "Buenos Aires, Argentina",
        lat: -34.6037,
        lng: -58.3694,
        type: "disembarkation",
        date: "2023-01-15",
        notes: "Day 15 – Gaucho Ranch Tour. Flew home from airport.",
        images: "images/cruise-2023-south-america/buenos-aires"
      }
    ]
  },
  {
    id: "cruise-2023-mediterranean",
    name: "Mediterranean 12-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Breakaway",
    departureDate: "2023-08-21",
    returnDate: "2023-09-03",
    color: "#D84315",
    roundTrip: false,
    seaDays: ["2023-08-24"],
    ports: [
      {
        name: "Rome",
        city: "Rome, Italy",
        lat: 41.9028,
        lng: 12.4964,
        type: "land",
        date: "2023-08-21",
        nights: 2,
        hotel: "Airbnb",
        notes: "Flew from Atlanta. 2 nights. Toured Vatican and walked the city on Aug 22.",
        images: "images/cruise-2023-mediterranean/rome"
      },
      {
        name: "Port of Civitavecchia",
        city: "Civitavecchia, Italy",
        lat: 42.0927,
        lng: 11.7943,
        homePort: true,
        date: "2023-08-23",
        notes: "Embarkation – taxi to Roma Termini, then train to port.",
        images: "images/cruise-2023-mediterranean/civitavecchia"
      },
      {
        name: "Santorini",
        city: "Santorini, Greece",
        lat: 36.3932,
        lng: 25.4615,
        date: "2023-08-25",
        notes: "Day 5 – Tender port. Visited Oia & Fira. Walked stairs back down to tender.",
        images: "images/cruise-2023-mediterranean/santorini"
      },
      {
        name: "Port of Piraeus (Athens)",
        city: "Athens, Greece",
        lat: 37.9477,
        lng: 23.6381,
        date: "2023-08-26",
        notes: "Day 6 – Acropolis & Parthenon tour. Took metro back to port.",
        images: "images/cruise-2023-mediterranean/athens"
      },
      {
        name: "Port of Mykonos",
        city: "Mykonos, Greece",
        lat: 37.4444,
        lng: 25.3289,
        date: "2023-08-27",
        notes: "Day 7 – Explored on our own.",
        images: "images/cruise-2023-mediterranean/mykonos"
      },
      {
        name: "Port of Katakolon",
        city: "Katakolon, Greece",
        lat: 37.6408,
        lng: 21.3235,
        date: "2023-08-28",
        notes: "Day 8 – Tour of Ancient Olympia, birthplace of the Olympics.",
        images: "images/cruise-2023-mediterranean/katakolon"
      },
      {
        name: "Valletta Cruise Port",
        city: "Valletta, Malta",
        lat: 35.8997,
        lng: 14.5147,
        date: "2023-08-29",
        notes: "Day 9 – Self-guided walking tour.",
        images: "images/cruise-2023-mediterranean/malta"
      },
      {
        name: "Port of Catania",
        city: "Catania, Sicily, Italy",
        lat: 37.5079,
        lng: 15.0830,
        date: "2023-08-30",
        notes: "Day 10 – Mount Etna tour.",
        images: "images/cruise-2023-mediterranean/catania"
      },
      {
        name: "Port of Naples",
        city: "Naples, Italy",
        lat: 40.8518,
        lng: 14.2681,
        date: "2023-08-31",
        notes: "Day 11 – Tour of Sorrento then Pompeii.",
        images: "images/cruise-2023-mediterranean/naples"
      },
      {
        name: "Port of Livorno",
        city: "Livorno, Italy",
        lat: 43.5485,
        lng: 10.3106,
        date: "2023-09-01",
        notes: "Day 12 – Tower of Pisa tour.",
        images: "images/cruise-2023-mediterranean/livorno"
      },
      {
        name: "Port of Cannes",
        city: "Cannes, France",
        lat: 43.5528,
        lng: 7.0174,
        date: "2023-09-02",
        notes: "Day 13 – Walked the city. Found a great market.",
        images: "images/cruise-2023-mediterranean/cannes"
      },
      {
        name: "Port of Civitavecchia",
        city: "Civitavecchia, Italy",
        lat: 42.0928,
        lng: 11.7944,
        type: "disembarkation",
        date: "2023-09-03",
        notes: "Day 14 – Disembarkation. Bus to airport, flew back to Atlanta.",
        images: "images/cruise-2023-mediterranean/civitavecchia"
      }
    ]
  },
  {
    id: "cruise-2024-nz-australia",
    name: "New Zealand & Australia 13-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Star",
    departureDate: "2024-03-14",
    returnDate: "2024-03-28",
    color: "#00695C",
    roundTrip: false,
    notes: "Back-to-back cruise #1. Continued on same ship/stateroom for Pacific cruise.",
    seaDays: ["2024-03-22", "2024-03-23", "2024-03-24"],
    ports: [
      {
        name: "Auckland",
        city: "Auckland, New Zealand",
        lat: -36.8485,
        lng: 174.7633,
        type: "land",
        date: "2024-03-14",
        nights: 2,
        notes: "Flew from Atlanta. 2 nights before embarkation.",
        images: "images/cruise-2024-nz-australia/auckland"
      },
      {
        name: "Auckland Cruise Terminal",
        city: "Auckland, New Zealand",
        lat: -36.8441,
        lng: 174.7711,
        homePort: true,
        date: "2024-03-16",
        notes: "Embarkation – Day 1.",
        images: "images/cruise-2024-nz-australia/auckland"
      },
      {
        name: "Port of Tauranga",
        city: "Tauranga, New Zealand",
        lat: -37.6870,
        lng: 176.1654,
        date: "2024-03-17",
        notes: "Day 2 – Hobbiton Movie Set & Kiwi plantation tour.",
        images: "images/cruise-2024-nz-australia/tauranga"
      },
      {
        name: "Port of Napier",
        city: "Napier, New Zealand",
        lat: -39.4928,
        lng: 176.9120,
        date: "2024-03-18",
        notes: "Day 3 – In port.",
        images: "images/cruise-2024-nz-australia/napier"
      },
      {
        name: "Port of Wellington",
        city: "Wellington, New Zealand",
        lat: -41.2865,
        lng: 174.7762,
        date: "2024-03-19",
        notes: "Day 4 – In port.",
        images: "images/cruise-2024-nz-australia/wellington"
      },
      {
        name: "Port of Lyttelton",
        city: "Lyttelton (Christchurch), Canterbury, NZ",
        lat: -43.6033,
        lng: 172.7196,
        date: "2024-03-20",
        notes: "Day 5 – In port.",
        images: "images/cruise-2024-nz-australia/lyttelton"
      },
      {
        name: "Port Chalmers",
        city: "Dunedin, New Zealand",
        lat: -45.8157,
        lng: 170.6281,
        date: "2024-03-21",
        notes: "Day 6 – In port. Insider's ship tour after returning.",
        images: "images/cruise-2024-nz-australia/dunedin"
      },
      {
        name: "Fiordland – Dusky, Doubtful & Milford Sounds",
        city: "Fiordland, New Zealand",
        lat: -44.6731,
        lng: 167.8975,
        type: "scenic",
        excludeFromRoute: true,
        date: "2024-03-22",
        notes: "Day 7 – Scenic cruising through Dusky Sound, Doubtful Sound, and Milford Sound.",
        images: "images/cruise-2024-nz-australia/fiordland"
      },
      {
        name: "Port of Melbourne",
        city: "Melbourne, Victoria, Australia",
        lat: -37.8136,
        lng: 144.9631,
        date: "2024-03-25",
        notes: "Day 10 – In port.",
        images: "images/cruise-2024-nz-australia/melbourne"
      },
      {
        name: "Port of Burnie",
        city: "Burnie, Tasmania, Australia",
        lat: -41.0572,
        lng: 145.9066,
        date: "2024-03-26",
        notes: "Day 11 – In port.",
        images: "images/cruise-2024-nz-australia/burnie"
      },
      {
        name: "Port of Eden",
        city: "Eden, New South Wales, Australia",
        lat: -37.0656,
        lng: 149.9055,
        date: "2024-03-27",
        notes: "Day 12 – In port.",
        images: "images/cruise-2024-nz-australia/eden"
      },
      {
        name: "Sydney Cruise Terminal",
        city: "Sydney, New South Wales, Australia",
        lat: -33.8593,
        lng: 151.2101,
        date: "2024-03-28",
        notes: "Day 13 – City tour. Remained on ship for back-to-back Pacific cruise.",
        images: "images/cruise-2024-nz-australia/sydney"
      }
    ]
  },
  {
    id: "cruise-2024-pacific",
    name: "Pacific Islands 13-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Star",
    departureDate: "2024-03-28",
    returnDate: "2024-04-10",
    color: "#1565C0",
    roundTrip: false,
    notes: "Back-to-back cruise #2. Continued from NZ & Australia cruise, same ship/stateroom.",
    seaDays: ["2024-03-29", "2024-03-30", "2024-04-02", "2024-04-05", "2024-04-07", "2024-04-09"],
    ports: [
      {
        name: "Sydney Cruise Terminal",
        city: "Sydney, New South Wales, Australia",
        lat: -33.8593,
        lng: 151.2101,
        homePort: true,
        date: "2024-03-28",
        notes: "Departure – continued back-to-back from NZ & Australia cruise.",
        images: "images/cruise-2024-nz-australia/sydney"
      },
      {
        name: "Port of Nouméa",
        city: "Nouméa, New Caledonia",
        lat: -22.2763,
        lng: 166.4572,
        date: "2024-03-31",
        notes: "Day 4 – In port.",
        images: "images/cruise-2024-pacific/noumea"
      },
      {
        name: "Mystery Island",
        city: "Aneityum, Vanuatu",
        lat: -20.2500,
        lng: 169.7667,
        date: "2024-04-01",
        notes: "Day 5 – In port.",
        images: "images/cruise-2024-pacific/mystery-island"
      },
      {
        name: "Port of Lautoka",
        city: "Lautoka, Fiji",
        lat: -17.6134,
        lng: 177.4500,
        date: "2024-04-03",
        notes: "Day 7 – In port. BULA!!",
        images: "images/cruise-2024-pacific/lautoka"
      },
      {
        name: "Dravuni Island",
        city: "Dravuni, Fiji",
        lat: -18.7565,
        lng: 178.6523,
        type: "missed",
        excludeFromRoute: true,
        date: "2024-04-04",
        notes: "Day 8 – Cancelled due to high winds. Also crossed the International Date Line (Apr 4 → Apr 6).",
        images: "images/cruise-2024-pacific/dravuni"
      },
      {
        name: "Port of Pago Pago",
        city: "Pago Pago, American Samoa",
        lat: -14.2781,
        lng: -170.7026,
        date: "2024-04-06",
        notes: "Day 10 – In port. (Crossed International Date Line – Apr 5 skipped.)",
        images: "images/cruise-2024-pacific/pago-pago"
      },
      {
        name: "Bora Bora",
        city: "Bora Bora, French Polynesia",
        lat: -16.5004,
        lng: -151.7415,
        date: "2024-04-08",
        notes: "Day 12 – In port.",
        images: "images/cruise-2024-pacific/bora-bora"
      },
      {
        name: "Port of Papeete",
        city: "Papeete, Tahiti, French Polynesia",
        lat: -17.5516,
        lng: -149.5585,
        type: "disembarkation",
        date: "2024-04-10",
        notes: "Day 14 – Disembarkation. Flew back to Atlanta.",
        images: "images/cruise-2024-pacific/papeete"
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
    id: "cruise-2025-iberian-atlantic",
    name: "Iberian & Atlantic Coast 14-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Star",
    departureDate: "2025-04-18",
    returnDate: "2025-05-07",
    color: "#6A1B9A",
    roundTrip: false,
    seaDays: ["2025-04-28", "2025-05-04"],
    ports: [
      {
        name: "Lisbon",
        city: "Lisbon, Portugal",
        lat: 38.7223,
        lng: -9.1393,
        type: "land",
        date: "2025-04-19",
        nights: 2,
        notes: "Flew from Atlanta Apr 18, arrived Apr 19. Dinner in Lisbon. Tour of Fátima on Apr 20.",
        images: "images/cruise-2025-iberian-atlantic/lisbon"
      },
      {
        name: "Lisbon Cruise Terminal",
        city: "Lisbon, Portugal",
        lat: 38.7051,
        lng: -9.1355,
        homePort: true,
        date: "2025-04-21",
        notes: "Embarkation – Day 1.",
        images: "images/cruise-2025-iberian-atlantic/lisbon"
      },
      {
        name: "Port of Leixões (Porto)",
        city: "Porto, Portugal",
        lat: 41.1855,
        lng: -8.7050,
        date: "2025-04-22",
        notes: "Day 2 – In port.",
        images: "images/cruise-2025-iberian-atlantic/porto"
      },
      {
        name: "Port of A Coruña",
        city: "A Coruña, Spain",
        lat: 43.3623,
        lng: -8.4115,
        date: "2025-04-23",
        notes: "Day 3 – In port.",
        images: "images/cruise-2025-iberian-atlantic/la-coruna"
      },
      {
        name: "Port of Gijón",
        city: "Gijón, Spain",
        lat: 43.5453,
        lng: -5.6627,
        date: "2025-04-24",
        notes: "Day 4 – In port.",
        images: "images/cruise-2025-iberian-atlantic/gijon"
      },
      {
        name: "Port of Bilbao",
        city: "Bilbao, Spain",
        lat: 43.3614,
        lng: -3.0703,
        date: "2025-04-25",
        notes: "Day 5 – In port.",
        images: "images/cruise-2025-iberian-atlantic/bilbao"
      },
      {
        name: "Bordeaux / Soulac-sur-Mer",
        city: "Bordeaux, France",
        lat: 44.8378,
        lng: -0.5792,
        date: "2025-04-26",
        notes: "Day 6 – Docked near Soulac-sur-Mer at mouth of Gironde; visited Bordeaux.",
        images: "images/cruise-2025-iberian-atlantic/bordeaux"
      },
      {
        name: "Port of La Rochelle",
        city: "La Rochelle, France",
        lat: 46.1591,
        lng: -1.1520,
        date: "2025-04-27",
        notes: "Day 7 – In port with Vant and Nazig.",
        images: "images/cruise-2025-iberian-atlantic/la-rochelle"
      },
      {
        name: "Port of Le Havre",
        city: "Le Havre, France",
        lat: 49.4944,
        lng: 0.1079,
        date: "2025-04-29",
        notes: "Day 9 – Tour bus to Paris.",
        images: "images/cruise-2025-iberian-atlantic/le-havre"
      },
      {
        name: "Port of Zeebrugge (Bruges)",
        city: "Zeebrugge / Bruges, Belgium",
        lat: 51.3533,
        lng: 3.1800,
        date: "2025-04-30",
        notes: "Day 10 – In port. Visited Bruges.",
        images: "images/cruise-2025-iberian-atlantic/bruges"
      },
      {
        name: "Amsterdam Cruise Terminal",
        city: "Amsterdam, Netherlands",
        lat: 52.3826,
        lng: 4.9166,
        date: "2025-05-01",
        notes: "Day 11 – In port.",
        images: "images/cruise-2025-iberian-atlantic/amsterdam"
      },
      {
        name: "Port of Hamburg",
        city: "Hamburg, Germany",
        lat: 53.5753,
        lng: 9.9620,
        date: "2025-05-02",
        nights: 1,
        notes: "Day 12 – Overnight in port (May 2–3).",
        images: "images/cruise-2025-iberian-atlantic/hamburg"
      },
      {
        name: "Port of Southampton",
        city: "Southampton, England, UK",
        lat: 50.8973,
        lng: -1.4055,
        type: "disembarkation",
        date: "2025-05-05",
        notes: "Day 15 – Disembarkation. Bus to airport hotel. Toured city May 6. Flew home May 7.",
        images: "images/cruise-2025-iberian-atlantic/southampton"
      }
    ]
  },
  {
    id: "cruise-2024-asia",
    name: "Asia 11-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Jewel",
    departureDate: "2024-01-14",
    returnDate: "2024-01-27",
    color: "#1B5E20",
    roundTrip: false,
    seaDays: ["2024-01-18", "2024-01-21", "2024-01-23"],
    ports: [
      {
        name: "Bangkok",
        city: "Bangkok, Thailand",
        lat: 13.7563,
        lng: 100.5018,
        type: "land",
        date: "2024-01-15",
        nights: 1,
        notes: "Flew Atlanta → Doha (Jan 14) → Bangkok (Jan 15). Boarded ship on Jan 16 at Laem Chabang.",
        images: "images/cruise-2024-asia/bangkok"
      },
      {
        name: "Laem Chabang Cruise Terminal",
        city: "Laem Chabang, Thailand (near Bangkok)",
        lat: 13.0877,
        lng: 100.8881,
        homePort: true,
        date: "2024-01-16",
        notes: "Embarkation – boarded Jan 16, stayed on ship.",
        images: "images/cruise-2024-asia/laem-chabang"
      },
      {
        name: "Pattaya City",
        city: "Pattaya, Thailand",
        lat: 12.9236,
        lng: 100.8825,
        type: "excursion",
        excludeFromRoute: true,
        date: "2024-01-17",
        notes: "Day 2 – Bus day trip from ship before sailing.",
        images: "images/cruise-2024-asia/pattaya"
      },
      {
        name: "Ho Chi Minh City Port",
        city: "Ho Chi Minh City, Vietnam",
        lat: 10.7769,
        lng: 106.7009,
        date: "2024-01-19",
        notes: "Day 4 – Củ Chi Tunnels tour.",
        images: "images/cruise-2024-asia/ho-chi-minh-city"
      },
      {
        name: "Nha Trang Port",
        city: "Nha Trang, Vietnam",
        lat: 12.2388,
        lng: 109.1967,
        date: "2024-01-20",
        notes: "Day 5 – Buddhist temple visit and boat ride on the Cai River.",
        images: "images/cruise-2024-asia/nha-trang"
      },
      {
        name: "Marina Bay Cruise Centre",
        city: "Singapore",
        lat: 1.2655,
        lng: 103.8611,
        date: "2024-01-22",
        notes: "Day 7 – Hop-on, hop-off bus tour.",
        images: "images/cruise-2024-asia/singapore"
      },
      {
        name: "Phuket Cruise Terminal",
        city: "Phuket, Thailand",
        lat: 7.8804,
        lng: 98.3923,
        date: "2024-01-24",
        notes: "Day 9 – Bus to the north for a river boat ride.",
        images: "images/cruise-2024-asia/phuket"
      },
      {
        name: "Penang Cruise Terminal",
        city: "George Town, Penang, Malaysia",
        lat: 5.4141,
        lng: 100.3288,
        date: "2024-01-25",
        notes: "Day 10 – Penang Hill tour.",
        images: "images/cruise-2024-asia/penang"
      },
      {
        name: "Langkawi",
        city: "Langkawi, Malaysia",
        lat: 6.3500,
        lng: 99.8000,
        date: "2024-01-26",
        notes: "Day 11 – Speed boat ride and bat cave tour.",
        images: "images/cruise-2024-asia/langkawi"
      },
      {
        name: "Port Klang",
        city: "Kuala Lumpur (Port Klang), Malaysia",
        lat: 3.0319,
        lng: 101.3847,
        type: "disembarkation",
        date: "2024-01-27",
        notes: "Day 12 – Disembarkation. Bus city tour of Kuala Lumpur. Flew home.",
        images: "images/cruise-2024-asia/kuala-lumpur"
      }
    ]
  },
  {
    id: "cruise-2025-norway-iceland",
    name: "Norway & Iceland 14-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Star",
    departureDate: "2025-09-12",
    returnDate: "2025-09-28",
    color: "#00838F",
    roundTrip: false,
    seaDays: ["2025-09-20", "2025-09-22", "2025-09-26"],
    ports: [
      {
        name: "Oslo",
        city: "Oslo, Norway",
        lat: 59.9139,
        lng: 10.7522,
        type: "land",
        date: "2025-09-12",
        nights: 2,
        notes: "Flew from Atlanta. 2 nights. Walked the city.",
        images: "images/cruise-2025-norway-iceland/oslo"
      },
      {
        name: "Oslo Cruise Terminal",
        city: "Oslo, Norway",
        lat: 59.9059,
        lng: 10.7388,
        homePort: true,
        date: "2025-09-14",
        notes: "Embarkation – Day 1.",
        images: "images/cruise-2025-norway-iceland/oslo"
      },
      {
        name: "Port of Kristiansand",
        city: "Kristiansand, Norway",
        lat: 58.1462,
        lng: 7.9957,
        date: "2025-09-15",
        notes: "Day 2 – In port.",
        images: "images/cruise-2025-norway-iceland/kristiansand"
      },
      {
        name: "Port of Stavanger",
        city: "Stavanger, Norway",
        lat: 58.9700,
        lng: 5.7331,
        date: "2025-09-16",
        notes: "Day 3 – In port.",
        images: "images/cruise-2025-norway-iceland/stavanger"
      },
      {
        name: "Port of Bergen",
        city: "Bergen, Norway",
        lat: 60.3913,
        lng: 5.3221,
        date: "2025-09-17",
        notes: "Day 4 – In port.",
        images: "images/cruise-2025-norway-iceland/bergen"
      },
      {
        name: "Port of Kristiansund",
        city: "Kristiansund, Norway",
        lat: 63.1107,
        lng: 7.7281,
        date: "2025-09-18",
        notes: "Day 5 – In port.",
        images: "images/cruise-2025-norway-iceland/kristiansund"
      },
      {
        name: "Port of Ålesund",
        city: "Ålesund, Norway",
        lat: 62.4722,
        lng: 6.1549,
        date: "2025-09-19",
        notes: "Day 6 – In port.",
        images: "images/cruise-2025-norway-iceland/alesund"
      },
      {
        name: "Reykjavik Cruise Port",
        city: "Reykjavik, Iceland",
        lat: 64.1520,
        lng: -21.9350,
        date: "2025-09-21",
        nights: 1,
        notes: "Day 8 – Ship overnighted in port. Blue Lagoon visit!",
        images: "images/cruise-2025-norway-iceland/reykjavik"
      },
      {
        name: "Port of Ísafjörður",
        city: "Ísafjörður, Iceland",
        lat: 66.0759,
        lng: -23.1356,
        date: "2025-09-23",
        notes: "Day 10 – In port.",
        images: "images/cruise-2025-norway-iceland/isafjordur"
      },
      {
        name: "Port of Akureyri",
        city: "Akureyri, Iceland",
        lat: 65.6835,
        lng: -18.1002,
        date: "2025-09-24",
        notes: "Day 11 – In port.",
        images: "images/cruise-2025-norway-iceland/akureyri"
      },
      {
        name: "Djúpivogur",
        city: "Djúpivogur, Iceland",
        lat: 64.6560,
        lng: -14.2831,
        date: "2025-09-25",
        notes: "Day 12 – In port. 🎂 Birthday!",
        images: "images/cruise-2025-norway-iceland/djupivogur"
      },
      {
        name: "Tórshavn",
        city: "Tórshavn, Faroe Islands",
        lat: 62.0107,
        lng: -6.7714,
        type: "missed",
        excludeFromRoute: true,
        date: "2025-09-26",
        notes: "Day 13 – Missed due to weather (sea day).",
        images: "images/cruise-2025-norway-iceland/torshavn"
      },
      {
        name: "Lerwick",
        city: "Lerwick, Shetland Islands, Scotland",
        lat: 60.1547,
        lng: -1.1492,
        type: "missed",
        excludeFromRoute: true,
        date: "2025-09-26",
        notes: "Day 13 – Missed due to weather (sea day).",
        images: "images/cruise-2025-norway-iceland/lerwick"
      },
      {
        name: "Port of Leith (Edinburgh)",
        city: "Edinburgh, Scotland, UK",
        lat: 55.9761,
        lng: -3.1737,
        type: "disembarkation",
        date: "2025-09-27",
        notes: "Day 14 – Edinburgh Castle tour. Disembarked Sep 28, flew straight home.",
        images: "images/cruise-2025-norway-iceland/edinburgh"
      }
    ]
  },
  {
    id: "cruise-2026-prima-western",
    name: "Western Caribbean 7-Night",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Prima",
    departureDate: "2026-01-11",
    returnDate: "2026-01-18",
    color: "#5C6BC0",
    seaDays: ["2026-01-13", "2026-01-17"],
    ports: [
      {
        name: "Port Canaveral",
        city: "Cape Canaveral, Florida",
        lat: 28.4158,
        lng: -80.5975,
        homePort: false,
        type: "land",
        date: "2026-01-10",
        notes: "Drove down from home. Pre-cruise overnight.",
        images: "images/cruise-2026-prima-western/port-canaveral"
      },
      {
        name: "Port Canaveral",
        city: "Cape Canaveral, Florida",
        lat: 28.4158,
        lng: -80.5975,
        homePort: true,
        type: "port",
        date: "2026-01-11",
        notes: "Embarkation day.",
        images: "images/cruise-2026-prima-western/port-canaveral"
      },
      {
        name: "Great Stirrup Cay",
        city: "Berry Islands, Bahamas",
        lat: 25.8294,
        lng: -77.8808,
        homePort: false,
        type: "port",
        date: "2026-01-12",
        notes: "NCL's private island in the Bahamas.",
        images: "images/cruise-2026-prima-western/great-stirrup-cay"
      },
      {
        name: "Montego Bay",
        city: "Jamaica",
        lat: 18.4762,
        lng: -77.9165,
        homePort: false,
        type: "port",
        date: "2026-01-14",
        notes: "",
        images: "images/cruise-2026-prima-western/montego-bay"
      },
      {
        name: "George Town",
        city: "Grand Cayman, Cayman Islands",
        lat: 19.2866,
        lng: -81.3744,
        homePort: false,
        type: "port",
        date: "2026-01-15",
        notes: "Toured around the island.",
        images: "images/cruise-2026-prima-western/george-town"
      },
      {
        name: "Cozumel",
        city: "Quintana Roo, Mexico",
        lat: 20.5073,
        lng: -86.9557,
        homePort: false,
        type: "port",
        date: "2026-01-16",
        notes: "",
        images: "images/cruise-2026-prima-western/cozumel"
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
        name: "Lucerne",
        city: "Lucerne, Switzerland",
        lat: 47.0502,
        lng: 8.3093,
        type: "excursion",
        excludeFromRoute: true,
        date: "2026-04-24",
        notes: "Stop on the way to Mount Titlis",
        images: "images/cruise-2026-rhine/lucerne"
      },
      {
        name: "Mount Titlis",
        city: "Engelberg, Switzerland",
        lat: 46.7733,
        lng: 8.4264,
        type: "excursion",
        excludeFromRoute: true,
        date: "2026-04-24",
        notes: "Swiss Alps Tour",
        images: "images/cruise-2026-rhine/mount-titlis"
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
