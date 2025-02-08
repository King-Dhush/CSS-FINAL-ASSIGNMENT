//Student A : Valerie Soh Jia Qi S10270376A
'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const foodPlaces = [
  { 
    id: 1, 
    name: 'Hainanese Chicken Rice', 
    position: [1.3040, 103.8591], // Maxwell Food Centre
    info: 'A popular Singaporean dish of poached chicken and seasoned rice.',
    imageSrc: '/HainaneseChickenRice.jpg'
  },
  { 
    id: 2, 
    name: 'Hokkien Mee', 
    position: [1.2870, 103.8530], // Chomp Chomp Food Centre
    info: 'A stir-fried noodle dish with prawns and pork.',
    imageSrc: '/HokkienMee.jpg'
  },
  { 
    id: 3, 
    name: 'Xiao Long Bao', 
    position: [1.2847, 103.8488], // Din Tai Fung
    info: 'A type of steamed dumpling filled with pork and rich, flavorful soup.',
    imageSrc: '/XiaoLongBao.jpg'
  },
  { 
    id: 4, 
    name: 'Nasi Lemak', 
    position: [1.2763, 103.8460], // The Coconut Club
    info: 'A Malay dish consisting of rice cooked in coconut milk, served with fried chicken, sambal, and eggs.',
    imageSrc: '/NasiLemak.jpg'
  },
  { 
    id: 5, 
    name: 'Mee Rebus', 
    position: [1.3067, 103.8416], // Adam Road Food Centre
    info: 'A Malay noodle dish with a spicy, savory gravy and boiled egg.',
    imageSrc: '/MeeRebus.jpg'
  },
  { 
    id: 6, 
    name: 'Rendang', 
    position: [1.3202, 103.8462], // Zam Zam Restaurant
    info: 'A slow-cooked Malay beef stew with spices and coconut milk.',
    imageSrc: '/Rendang.jpg'
  },
  { 
    id: 7, 
    name: 'Roti Prata', 
    position: [1.3393, 103.7875], // The Prata Wala
    info: 'A crispy Indian flatbread, often served with curry.',
    imageSrc: '/RotiPrata.jpg'
  },
  { 
    id: 8, 
    name: 'Chicken Briyani', 
    position: [1.3026, 103.8539], // Bismillah Biryani
    info: 'A flavorful Indian rice dish cooked with spiced chicken and basmati rice.',
    imageSrc: '/ChickenBriyani.jpeg'
  },
  { 
    id: 9, 
    name: 'Masala Dosa', 
    position: [1.2842, 103.8533], // Ananda Bhavan
    info: 'A crispy Indian crepe filled with spiced mashed potatoes, served with chutney.',
    imageSrc: '/MasalaDosa.jpg'
  },
  { 
    id: 10, 
    name: 'Spaghetti Carbonara', 
    position: [1.2951, 103.8525], // Spaghetti Factory
    info: 'An Italian pasta dish made with egg, cheese, pancetta, and pepper.',
    imageSrc: '/SpaghettiCarbonara.jpg'
  },
  { 
    id: 11, 
    name: 'Risotto ai Funghi', 
    position: [1.3000, 103.8485], // Il Lido Italian Restaurant
    info: 'An Italian rice dish made with mushrooms and a creamy broth.',
    imageSrc: '/RisottoAiFunghi.jpg'
  },
  { 
    id: 12, 
    name: 'Margherita Pizza', 
    position: [1.2890, 103.8440], // The Pizza Place
    info: 'An Italian pizza topped with tomato, mozzarella, and basil.',
    imageSrc: '/MargheritaPizza.jpg'
  },
];

export default function MapPage() {
  const [hawkerCentres, setHawkerCentres] = useState([]);
  
  useEffect(() => {
    const loadHawkerCentres = async () => {
      const response = await fetch('/HawkerCentresGEOJSON.geojson');
      const data = await response.json();
      setHawkerCentres(data.features);
    };
    
    loadHawkerCentres();
  }, []);
  
  const filteredHawkerCentres = hawkerCentres.filter(hawkerCentre => {
    return foodPlaces.some(foodPlace => {
      const hawkerCentreName = hawkerCentre.properties?.name || '';
      return hawkerCentreName.toLowerCase().includes(foodPlace.name.toLowerCase());
    });
  });  

  return (
    <section>
      <h1>Interactive Food Map</h1>
      <MapContainer
        center={[1.290270, 103.851959]} // Default center on Singapore
        zoom={12}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {filteredHawkerCentres.map(hawkerCentre => {
          const position = [hawkerCentre.geometry.coordinates[1], hawkerCentre.geometry.coordinates[0]];
          
          return (
            <Marker key={hawkerCentre.properties.id} position={position}>
              <Popup>
                <b>{hawkerCentre.properties.name}</b>
                <p>{hawkerCentre.properties.description}</p>
              </Popup>
            </Marker>
          );
        })}

        {/* Render food place markers */}
        {foodPlaces.map((place) => {
          const customIcon = new L.Icon({
            iconUrl: place.imageSrc, // Custom food image icon
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          });

          return (
            <Marker key={place.id} position={place.position} icon={customIcon}>
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
          );
        })}
      </MapContainer>
    </section>
  );
}
