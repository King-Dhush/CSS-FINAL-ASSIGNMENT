//student A : Valerie Soh Jia Qi S10270376A
'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const foodPlaces = [
  { 
    id: 1, 
    name: 'Spaghetti Carbonara', 
    position: [41.9028, 12.4964], 
    info: 'A classic Italian pasta dish from Rome.',
    imageSrc: '/SpaghettiCarbonara.jpg'
  },
  { 
    id: 2, 
    name: 'Chicken Alfredo', 
    position: [40.7128, -74.006], 
    info: 'A creamy pasta dish loved in the USA.',
    imageSrc: '/ChickenAlfredo.jpg'
  },
  { 
    id: 3, 
    name: 'Vegetable Stir Fry', 
    position: [31.2304, 121.4737], 
    info: 'A flavorful dish inspired by Chinese cuisine.',
    imageSrc: '/VegetableStirFry.jpg'
  },
  { 
    id: 4, 
    name: 'Beef Tacos', 
    position: [19.4326, -99.1332], 
    info: 'A Mexican classic, rich in flavor.',
    imageSrc: '/Beef-Tacos.jpg'
  },
  { 
    id: 5, 
    name: 'Grilled Salmon', 
    position: [59.3293, 18.0686], 
    info: 'A Scandinavian delight from Sweden.',
    imageSrc: '/GrilledSalmon.jpg'
  },
];

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlaces = foodPlaces.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <h1>Interactive Food Map</h1>
      <input
        type="text"
        placeholder="Search food places..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />

      <MapContainer
        center={[39.5, -98.35]}
        zoom={2}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />

        {filteredPlaces.map((place) => (
          <Marker key={place.id} position={place.position}>
            <Popup>
              <b>{place.name}</b>
              <p>{place.info}</p>
              <img 
                src={place.imageSrc} 
                alt={place.name} 
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} 
              />
            </Popup>

            <Tooltip direction="top" offset={[0, -20]} opacity={1}>
              <img
                src={place.imageSrc}
                alt={place.name}
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
