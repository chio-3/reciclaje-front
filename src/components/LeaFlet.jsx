// SelectOnMapLeaflet.jsx
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import mapaIcon from "./../assets/mapa1.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocationMarker = ({ onSelect }) => {
  const [position, setPosition] = useState(null);
  

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onSelect({ lat, lng });
    },
  });

  return position ? <Marker position={position} /> : null;
};

const SelectOnMapLeaflet = () => {
  const [selected, setSelected] = useState(null);
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setShowMap(!showMap)}
        className="w-full bg-gray-700 border rounded-lg flex items-center justify-left rounded hover:bg-gray-600 text-white py-2 px-4 text-lg font-semibold mb-2"
      >
        <img src={mapaIcon} alt="" className="mr-2" />
        Seleccionar en el mapa
      </button>
      {showMap && (
        <div className="w-full h-[500px] rounded overflow-hidden border">
          <MapContainer
            center={[-17.3975127, -66.1609942]} // Buenos Aires
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <LocationMarker onSelect={(coords) => setSelected(coords)} />
          </MapContainer>
        </div>
      )}
      {selected && (
        <p className="mt-4 text-sm text-gray-700">
          Selected Location: Lat {selected.lat.toFixed(5)}, Lng{" "}
          {selected.lng.toFixed(5)}
        </p>
      )}
    </div>
  );
};

export default SelectOnMapLeaflet;
