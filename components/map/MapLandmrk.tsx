"use client";

import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

// Custom marker icon configuration
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [25, 35],
  iconAnchor: [12, 35],
  popupAnchor: [0, -35],
});

type Latlng = [number, number];
type LocationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void;
};

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>
        <div className="text-center">
          <p className="font-semibold">Selected Location</p>
          <p className="text-sm text-gray-600">
            Lat: {position[0].toFixed(4)}<br/>
            Lng: {position[1].toFixed(4)}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

const MapLandmrk = ({
  location,
}: {
  location?: { lat: number; lng: number };
}) => {
  const defaultValue: Latlng = [13.7563, 100.5018]; // Bangkok coordinates
  const [position, setPosition] = useState<Latlng | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Location Picker</h1>
        {position && (
          <div className="text-sm text-gray-600">
            Selected: {position[0].toFixed(4)}, {position[1].toFixed(4)}
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
        Click on the map to select a location
      </div>

      <input type="hidden" name="lat" value={position ? position[0] : ""} />
      <input type="hidden" name="lng" value={position ? position[1] : ""} />

      <MapContainer
        className="h-[400px] w-full rounded-xl shadow-md border border-gray-200"
        center={location || defaultValue}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Initial marker */}
        <Marker position={location || defaultValue} icon={markerIcon}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold">Default Location</p>
              <p className="text-sm text-gray-600">Click anywhere to change</p>
            </div>
          </Popup>
        </Marker>

        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Street View">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite View">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapLandmrk;
