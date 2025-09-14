import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MyMap() {
  return (
    <MapContainer center={[41.311081, 69.240562]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.311081, 69.240562]}>
        <Popup>📍 Toshkent Chilonzor</Popup>
      </Marker>
    </MapContainer>
  );
}
