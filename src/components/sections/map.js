import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function MapSection({ location }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(location.lng);
  const [lat, setLat] = useState(location.lat);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kta-tfo/ckrw0zzsb3ckq17qshb9kl1yj",
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker({ color: "#c00000", scale: 1.5 })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`<h5>New Globe Center<h5/>`)
      )
      .addTo(map.current);

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("wheel", (event) => {
      if (event.originalEvent.ctrlKey) {
        // Check if CTRL key is pressed
        event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
        if (!map.current.scrollZoom._enabled) map.current.scrollZoom.enable(); // Enable zoom only if it's disabled
      } else {
        if (map.current.scrollZoom._enabled) map.current.scrollZoom.disable(); // Disable zoom only if it's enabled
      }
    });

    map.current.scrollZoom.disable();
  });
  return <div ref={mapContainer} className="w-full !h-screen absolute top-0" />;
}
