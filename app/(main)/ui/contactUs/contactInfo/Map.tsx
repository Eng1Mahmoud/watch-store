"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
// Fix the default icon path issue with Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map: React.FC = () => {
  // Store location coordinates (latitude, longitude)
  const storeLocation: [number, number] = [26.556, 31.6948];

  return (
    <motion.div
      initial={{ x: "-100%" }}
      whileInView={{
        x: 0,
      }}
      viewport={{ once: true }}
    >
      <MapContainer
        center={storeLocation}
        zoom={13}
        className="h-[280px] w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={storeLocation}>
          <Popup>Watch Store</Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
};

export default Map;
