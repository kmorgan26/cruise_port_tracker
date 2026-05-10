// app.js

(function () {
  "use strict";

  // ─── Utilities ──────────────────────────────────────────────────────────────

  function formatDateRange(start, end) {
    var opts = { month: "short", day: "numeric", year: "numeric" };
    var s = new Date(start + "T00:00:00").toLocaleDateString("en-US", opts);
    var e = new Date(end + "T00:00:00").toLocaleDateString("en-US", opts);
    return s + " – " + e;
  }

  // Count unique ports across all cruises
  function countUniquePorts() {
    var seen = new Set();
    CRUISES.forEach(function (c) {
      c.ports.forEach(function (p) {
        seen.add(p.lat + "," + p.lng);
      });
    });
    return seen.size;
  }

  // Deduplicate ports within a cruise for sidebar display (same lat/lng shown once)
  function uniquePorts(cruise) {
    var seen = new Set();
    return cruise.ports.filter(function (p) {
      var key = p.lat + "," + p.lng;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  // ─── Map setup ──────────────────────────────────────────────────────────────

  var map = L.map("map", {
    center: [25, -30],
    zoom: 3,
    zoomControl: true,
  });

  // Carto Voyager tiles — clean look that lets route colors stand out
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
        '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }
  ).addTo(map);

  // ─── Marker icons ───────────────────────────────────────────────────────────

  function makePortIcon(color, isHomePort) {
    var size = isHomePort ? 17 : 12;
    var inner = isHomePort
      ? '<span style="color:white;font-size:9px;line-height:1">⚓</span>'
      : "";
    var html =
      '<div style="' +
      "width:" + size + "px;height:" + size + "px;" +
      "background:" + color + ";" +
      "border:2px solid rgba(255,255,255,0.9);" +
      "border-radius:50%;" +
      "box-shadow:0 1px 5px rgba(0,0,0,0.45);" +
      "display:flex;align-items:center;justify-content:center;" +
      '">' +
      inner +
      "</div>";
    return L.divIcon({
      className: "",
      html: html,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -(size / 2 + 5)],
    });
  }

  // ─── Build cruise layers ─────────────────────────────────────────────────────

  var cruiseLayers = {};
  var globalBounds = [];

  CRUISES.forEach(function (cruise) {
    // Layer group holds the route line + cluster group
    var layerGroup = L.layerGroup().addTo(map);

    // Per-cruise marker cluster (color-coded cluster bubbles)
    var clusterGroup = L.markerClusterGroup({
      maxClusterRadius: 50,
      iconCreateFunction: function (cluster) {
        var count = cluster.getChildCount();
        return L.divIcon({
          className: "",
          html:
            '<div style="' +
            "background:" + cruise.color + ";" +
            "color:white;border-radius:50%;" +
            "width:34px;height:34px;" +
            "display:flex;align-items:center;justify-content:center;" +
            "font-size:13px;font-weight:700;" +
            "box-shadow:0 2px 7px rgba(0,0,0,0.35);" +
            "border:2.5px solid rgba(255,255,255,0.9);" +
            '">' +
            count +
            "</div>",
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        });
      },
    });

    // Route polyline — connects ports in order (excluding excursion-only stops)
    var routePorts = cruise.ports.filter(function (p) { return !p.excludeFromRoute; });
    var routeCoords = routePorts.map(function (p) { return [p.lat, p.lng]; });
    // Close the route back to departure port for round-trip cruises only
    if (cruise.roundTrip !== false && routePorts.length > 1) {
      var first = routePorts[0];
      var last = routePorts[routePorts.length - 1];
      if (first.lat !== last.lat || first.lng !== last.lng) {
        routeCoords.push([first.lat, first.lng]);
      }
    }

    var routeLine = L.polyline(routeCoords, {
      color: cruise.color,
      weight: 2.5,
      opacity: 0.75,
      dashArray: "7, 5",
    });
    layerGroup.addLayer(routeLine);

    // Port markers
    cruise.ports.forEach(function (port) {
      var isHomePort = port.homePort === true;
      var popup =
        '<div class="port-popup">' +
        '<div class="port-popup-cruise-tag" style="--popup-color:' + cruise.color + ';background:' + cruise.color + '">' +
        cruise.name +
        "</div>" +
        '<div class="port-popup-name">' + port.name + "</div>" +
        '<div class="port-popup-city">' + port.city + "</div>" +
        (port.date ? '<div class="port-popup-notes">' + new Date(port.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) + "</div>" : "") +
        (port.hotel ? '<div class="port-popup-notes">🏨 ' + port.hotel + "</div>" : "") +
        (port.notes ? '<div class="port-popup-notes">' + port.notes + "</div>" : "") +
        (isHomePort ? '<div class="port-popup-homeport-badge">⚓ Home Port</div>' : "") +
        "</div>";

      var marker = L.marker([port.lat, port.lng], {
        icon: makePortIcon(cruise.color, isHomePort),
      }).bindPopup(popup, { maxWidth: 260 });

      clusterGroup.addLayer(marker);
      globalBounds.push([port.lat, port.lng]);
    });

    layerGroup.addLayer(clusterGroup);

    cruiseLayers[cruise.id] = {
      cruise: cruise,
      layerGroup: layerGroup,
      visible: true,
      bounds: L.latLngBounds(cruise.ports.map(function (p) { return [p.lat, p.lng]; })),
    };
  });

  // ─── Sidebar ─────────────────────────────────────────────────────────────────

  function buildSidebar() {
    var list = document.getElementById("cruise-list");

    CRUISES.forEach(function (cruise) {
      var card = document.createElement("div");
      card.className = "cruise-card active";
      card.id = "card-" + cruise.id;
      card.style.setProperty("--cruise-color", cruise.color);

      var portRows = uniquePorts(cruise)
        .map(function (p) {
          var isHome = p.homePort === true;
          var portType = p.type || "port";
          var pipBg = isHome ? cruise.color : "transparent";
          var pipBorder = (portType === "land" || portType === "excursion") ? "border-style:dashed;" : "";
          return (
            '<div class="cruise-port-item" data-lat="' + p.lat + '" data-lng="' + p.lng + '">' +
            '<div class="port-pip ' + (isHome ? "homeport" : "") + '" ' +
            'style="border-color:' + cruise.color + ";background:" + pipBg + ";" + pipBorder + '">' +
            "</div>" +
            '<div>' +
            '<div class="port-item-name">' + p.name + "</div>" +
            '<div class="port-item-city">' + p.city + "</div>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");

      card.innerHTML =
        '<div class="cruise-card-header" data-cruise-id="' + cruise.id + '">' +
        '<div class="cruise-color-swatch" style="background:' + cruise.color + '"></div>' +
        '<div class="cruise-card-title">' +
        '<div class="cruise-name">' + cruise.name + "</div>" +
        '<div class="cruise-meta">' + cruise.cruiseLine + " &middot; " + cruise.ship + "</div>" +
        '<div class="cruise-meta">' + formatDateRange(cruise.departureDate, cruise.returnDate) + "</div>" +
        "</div>" +
        '<label class="toggle" title="Toggle cruise visibility">' +
        '<input type="checkbox" checked data-cruise-id="' + cruise.id + '" />' +
        '<span class="toggle-track"></span>' +
        "</label>" +
        "</div>" +
        '<div class="cruise-ports-list">' + portRows + "</div>";

      list.appendChild(card);
    });

    // Footer stats
    var uniqueCount = countUniquePorts();
    document.getElementById("port-count").textContent =
      CRUISES.length + " cruises · " + uniqueCount + " unique ports";
  }

  buildSidebar();

  // ─── Sidebar interactions ────────────────────────────────────────────────────

  document.getElementById("cruise-list").addEventListener("click", function (e) {
    // Port item → fly to port
    var portItem = e.target.closest(".cruise-port-item");
    if (portItem) {
      var lat = parseFloat(portItem.dataset.lat);
      var lng = parseFloat(portItem.dataset.lng);
      map.flyTo([lat, lng], Math.max(map.getZoom(), 10), { duration: 1.2 });
      return;
    }

    // Card header → fit map to that cruise (ignore clicks on the toggle)
    var header = e.target.closest(".cruise-card-header");
    if (header && !e.target.closest(".toggle")) {
      var id = header.dataset.cruiseId;
      var layer = cruiseLayers[id];
      if (layer && layer.visible) {
        map.flyToBounds(layer.bounds, { padding: [60, 60], duration: 1.2 });
      }
    }
  });

  // Toggle cruise visibility
  document.getElementById("cruise-list").addEventListener("change", function (e) {
    if (e.target.type !== "checkbox") return;
    var id = e.target.dataset.cruiseId;
    var layer = cruiseLayers[id];
    var card = document.getElementById("card-" + id);

    if (e.target.checked) {
      layer.layerGroup.addTo(map);
      layer.visible = true;
      card.classList.add("active");
    } else {
      map.removeLayer(layer.layerGroup);
      layer.visible = false;
      card.classList.remove("active");
    }
  });

  // Show all cruises button
  document.getElementById("btn-fit-all").addEventListener("click", function () {
    if (globalBounds.length > 0) {
      map.flyToBounds(L.latLngBounds(globalBounds), {
        padding: [40, 40],
        duration: 1.5,
      });
    }
  });

  // ─── Initial map view ────────────────────────────────────────────────────────

  if (globalBounds.length > 0) {
    map.fitBounds(L.latLngBounds(globalBounds), { padding: [50, 50] });
  }
})();
