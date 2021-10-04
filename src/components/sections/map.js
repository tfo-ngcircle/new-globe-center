import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

export default function MapSection() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(10.747);
  const [lat, setLat] = useState(52.371);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kta-tfo/ckrw0zzsb3ckq17qshb9kl1yj",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return <div ref={mapContainer} className="w-full !h-screen absolute top-0" />;
}
