import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Map, Marker, Popup } from "mapbox-gl";
import { useInView } from "react-intersection-observer";
import { LatLng, Section } from "../../typings";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

interface Props {
  location?: Section<LatLng>;
}

export default function MapSection({ location }: Props) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | undefined>();
  const [lng, setLng] = useState(location?.content![0].lng!);
  const [lat, setLat] = useState(location?.content![0].lat!);
  const [zoom, setZoom] = useState(16);
  const [ref, inView] = useInView();

  useEffect(() => {
    map.current && map.current.zoomTo(inView ? 16 : 17, { duration: 1500 });
  }, [inView]);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new Map({
      container: mapContainer.current!,
      style: "mapbox://styles/kta-tfo/ckrw0zzsb3ckq17qshb9kl1yj",
      center: [lng, lat],
      zoom: zoom,
    });

    new Marker({ color: "#c00000", scale: 1.5 })
      .setLngLat([lng, lat])
      .setPopup(new Popup({ offset: 25 }).setHTML(`<h5>New Globe Center<h5/>`))
      .addTo(map.current);

    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    map.current.on("wheel", (event) => {
      if (event.originalEvent.ctrlKey) {
        // Check if CTRL key is pressed
        event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
        if (!map.current?.scrollZoom.isEnabled())
          map.current?.scrollZoom.enable(); // Enable zoom only if it's disabled
      } else {
        if (map.current?.scrollZoom.isEnabled())
          map.current.scrollZoom.disable(); // Disable zoom only if it's enabled
      }
    });

    map.current.scrollZoom.disable();
  });
  return (
    <div ref={mapContainer} className="w-full !h-screen absolute top-0">
      <div ref={ref} className="h-1/2 w-4 relative translate-y-1/2" />
    </div>
  );
}
