# Two at Sea — Cruise Port Tracker

An interactive, browser-based world map that visualises every cruise itinerary as a colour-coded route with clickable port markers, photo galleries, and a collapsible sidebar.  No build step, no server, no framework — just plain HTML, CSS, and vanilla JavaScript served directly from the file system or any static web host.

---

## How It Works

### Splash Screen
When the page loads, a full-screen splash card is shown.  Clicking **Explore the Map** fades it out and reveals the main app layout.

### Layout
The app is a side-by-side flex layout:

| Region | Element | Purpose |
|---|---|---|
| Left | `#sidebar` | Cruise cards, controls, and port list |
| Right | `#map-container` | Leaflet.js interactive map |

### Map
The map is rendered by [Leaflet.js](https://leafletjs.com/) using **CARTO Voyager** raster tiles.  Each cruise gets its own `L.layerGroup` containing:

- **Route polyline** — a dashed line connecting ports in itinerary order.  For round-trip cruises the line closes back to the departure port.  Ports flagged `excludeFromRoute: true` are excluded from the line.
- **Marker cluster group** — port markers grouped with [Leaflet.markerCluster](https://github.com/Leaflet/Leaflet.markercluster).  Cluster bubbles inherit the cruise colour.
- **Port markers** — `L.divIcon` circles coloured to match the cruise.  Home-port markers are slightly larger and display an anchor icon (⚓).

Clicking a marker opens a Leaflet popup showing the port name, city, visit date, optional hotel/notes, and a **Photos** button if images are available.

### Sidebar
The sidebar is built dynamically from the `CRUISES` data array.  Each cruise card shows:
- Cruise name, cruise line, ship, and date range
- A colour swatch and a visibility toggle (checkbox)
- A collapsible list of ports (clicking a port flies the map to it)
- A **Cruise Photos** button if general/misc photos exist for that cruise

Three toolbar buttons control all cruises at once: **Show All Cruises** (fit bounds), **Hide All / Show All** (visibility), and **Collapse All / Expand All** (collapse state).

### Photo Lightbox
Photos are displayed using [GLightbox](https://biati-digital.github.io/glightbox/).  The lightbox is opened either from a port popup button or from the cruise-level misc-photos button in the sidebar.  File paths are resolved from `PHOTO_MANIFEST` (see below).

---

## Project Structure

```
cruise_port_tracker/
├── index.html                  # Single-page entry point
├── rebuild-manifest.ps1        # PowerShell script to regenerate photos.js
└── src/
    ├── css/
    │   └── style.css           # All application styles (dark theme, layout, cards)
    ├── data/
    │   ├── cruises.js          # CRUISES array — all itinerary data
    │   └── photos.js           # PHOTO_MANIFEST — auto-generated image index
    ├── images/
    │   ├── hero.png            # Splash screen hero image
    │   └── <cruise-id>/        # One folder per cruise
    │       ├── <port-slug>/    # One folder per port (images shown in port popup)
    │       └── misc/           # General cruise photos (shown on sidebar card)
    └── js/
        └── app.js              # All application logic
```

---

## Data Structures

### `CRUISES` (`src/data/cruises.js`)

`CRUISES` is a global JavaScript array.  Each element describes one cruise:

```js
{
  id:            "cruise-2023-mediterranean",  // unique slug; must match the image folder name
  name:          "Mediterranean Explorer",      // display name
  cruiseLine:    "Norwegian Cruise Line",
  ship:          "Norwegian Viva",
  departureDate: "2023-09-15",                 // ISO-8601 date string
  returnDate:    "2023-10-01",
  color:         "#1565C0",                    // CSS colour used for route, markers, and UI accents
  roundTrip:     true,                         // optional; default true — set false for one-way itineraries
  companions:    ["Alice", "Bob"],             // optional list of travel companions
  seaDays:       ["2023-09-16", "2023-09-19"], // optional; informational only (not rendered)
  ports: [ /* see Port object below */ ]
}
```

#### Port Object

```js
{
  name:             "Santorini Port",           // display name shown on marker popup and sidebar
  city:             "Santorini, Greece",        // secondary location label
  lat:              36.4634,                    // WGS-84 latitude
  lng:              25.3789,                    // WGS-84 longitude
  date:             "2023-09-22",               // optional; ISO-8601 visit date
  notes:            "Day 8 – Tender port",      // optional; shown in popup
  hotel:            "Airbnb",                   // optional; shown in popup with 🏨 icon
  homePort:         true,                       // optional; marks departure/home ports (larger anchor marker)
  excludeFromRoute: true,                       // optional; excludes this stop from the route polyline
  type:             "port",                     // optional; affects sidebar pip styling (see Port Types below)
  images:           "images/cruise-2023-mediterranean/santorini"  // optional; key into PHOTO_MANIFEST
}
```

#### Port Types

| `type` value | Meaning | Sidebar pip style |
|---|---|---|
| `"port"` (default) | Normal port call | Solid coloured circle |
| `"land"` | Pre/post-cruise land stay | Dashed border |
| `"excursion"` | Day-trip or excursion stop | Dashed border |
| `"scenic"` | Scenic cruising (no docking) | Dashed border |
| `"missed"` | Port missed due to weather etc. | Grey dashed, "missed" badge |
| `"disembarkation"` | Final disembarkation port | Solid coloured circle |

---

### `PHOTO_MANIFEST` (`src/data/photos.js`)

`PHOTO_MANIFEST` is a global JavaScript object that maps an image folder path (relative to `src/`) to an array of filenames:

```js
const PHOTO_MANIFEST = {
  "images/cruise-2023-mediterranean/santorini": [
    "IMG_0001.jpg",
    "IMG_0002.jpg"
  ],
  "images/cruise-2023-mediterranean/misc": [
    "ship-at-sea.jpg"
  ]
  // ...
};
```

The `images` field on a Port object must exactly match a key in `PHOTO_MANIFEST` for the **Photos** button to appear.

---

## Adding a New Cruise

1. **Add cruise data** — append a new entry to the `CRUISES` array in `src/data/cruises.js`.  Give it a unique `id` that matches the folder name you will create in step 2.

2. **Add photos** — create a folder `src/images/<cruise-id>/` and add sub-folders for each port (e.g. `nassau/`, `miami/`) plus an optional `misc/` folder.  Drop photo files into those folders.

3. **Rebuild the manifest** — run the PowerShell script to regenerate `src/data/photos.js`:

   ```powershell
   PowerShell -ExecutionPolicy Bypass -File "rebuild-manifest.ps1"
   ```

4. **Open `index.html`** in a browser (or deploy to any static host).

> **Note:** Browsers block local file access when loading images from `file://` URIs in some configurations.  If photos do not appear when opening the file directly, serve the project from a local HTTP server (e.g. `npx serve .` or the VS Code **Live Server** extension).

---

## Dependencies

All dependencies are loaded from public CDNs — no `npm install` required.

| Library | Version | Purpose |
|---|---|---|
| [Leaflet.js](https://leafletjs.com/) | 1.9.4 | Interactive map rendering |
| [Leaflet.markerCluster](https://github.com/Leaflet/Leaflet.markercluster) | 1.5.3 | Marker clustering |
| [GLightbox](https://biati-digital.github.io/glightbox/) | latest | Photo lightbox / gallery |
| [CARTO Voyager tiles](https://carto.com/basemaps) | — | Base map tiles (via CDN) |

No build tools, bundlers, or back-end services are required.
