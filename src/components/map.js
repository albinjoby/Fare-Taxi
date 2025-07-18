"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

// Fix Leaflet default marker icon paths for Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

function FitBounds({ points }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 1) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [points, map]);
  return null;
}

export default function Map() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [startCoords, setStartCoords] = useState(null);
  const [destCoords, setDestCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);

  const handleGeocode = async (location) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        location
      )}&countrycodes=in&limit=1`
    );
    const data = await res.json();
    if (data?.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    return null;
  };

  const fetchRoute = async (from, to) => {
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${from[1]},${from[0]};${to[1]},${to[0]}?overview=full&geometries=geojson`
    );
    const data = await res.json();
    if (data.routes?.[0]) {
      return data.routes[0].geometry.coordinates.map(([lon, lat]) => [
        lat,
        lon,
      ]);
    }
    return [];
  };

  const handleLocate = async () => {
    if (!start || !destination) return;

    const from = await handleGeocode(start);
    const to = await handleGeocode(destination);

    setStartCoords(from);
    setDestCoords(to);

    if (from && to) {
      const route = await fetchRoute(from, to);
      setRouteCoords(route);
    }
  };

  const points = [];
  if (startCoords) points.push(startCoords);
  if (destCoords) points.push(destCoords);

  return (
    <div className="w-full flex justify-center">
      <div className="w-fit border-2 border-gray-600 bg-[#000000] rounded-xl p-8 shadow-lg flex flex-col md:flex-row gap-10">
        {/* Input Panel */}
        <div className="flex flex-col gap-4 justify-around">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-left pb-5 text-2xl text-white">
                Starting Point:
              </p>
              <Input
                type="text"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Enter starting point"
                className="w-[400px] bg-[#232634] border-0"
              />
            </div>
            <div>
              <p className="text-left pb-5 text-2xl text-white">
                Destination Point:
              </p>
              <Input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="w-[400px] bg-[#232634] border-0"
              />
            </div>
          </div>

          <Button
            onClick={handleLocate}
            className="bg-[#232634]"
          >
            Go
          </Button>
        </div>

        {/* Map Panel */}
        <div className="w-[400px] h-[300px] rounded-lg overflow-hidden relative z-10">
          <MapContainer
            center={startCoords || destCoords || [10, 76]}
            zoom={startCoords || destCoords ? 10 : 7}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              className="map-tiles"
            />

            {startCoords && (
              <Marker position={startCoords}>
                <Popup>Start: {start}</Popup>
              </Marker>
            )}
            {destCoords && (
              <Marker position={destCoords}>
                <Popup>Destination: {destination}</Popup>
              </Marker>
            )}
            {routeCoords.length > 0 && (
              <Polyline
                positions={routeCoords}
                color="#4285F4"
                weight={5}
              />
            )}
            <FitBounds points={points} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
