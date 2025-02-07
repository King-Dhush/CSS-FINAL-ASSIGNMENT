// student C : Dhushyanth S10270619C
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dishes organized by cuisine
const cuisines = [
  {
    name: 'Chinese',
    dishes: [
      {
        id: 1,
        name: 'Hainanese Chicken Rice',
        img: '/hainanese_chicken_rice.jpg',
        description: 'Poached chicken served with fragrant rice and chili sauce.',
      },
      {
        id: 2,
        name: 'Hokkien Mee',
        img: '/hokkien_mee.jpg',
        description: 'Stir-fried noodles with prawns, squid, and rich stock.',
      },
      {
        id: 3,
        name: 'Xiao Long Bao',
        img: '/xiao_long_bao.jpg',
        description: 'Steamed soup dumplings filled with pork and rich broth.',
      },
    ],
  },
  {
    name: 'Malay',
    dishes: [
      {
        id: 4,
        name: 'Nasi Lemak',
        img: '/nasi_lemak.jpg',
        description: 'Fragrant rice cooked in coconut milk, served with sambal and anchovies.',
      },
      {
        id: 5,
        name: 'Mee Rebus',
        img: '/mee_rebus.jpg',
        description: 'Noodles in a thick, spicy, and slightly sweet gravy.',
      },
      {
        id: 6,
        name: 'Rendang',
        img: '/rendang.jpg',
        description: 'Slow-cooked dry curry with tender beef and rich spices.',
      },
    ],
  },
  {
    name: 'Indian',
    dishes: [
      {
        id: 7,
        name: 'Roti Prata',
        img: '/roti_prata.jpg',
        description: 'Flaky flatbread served with savory curry.',
      },
      {
        id: 8,
        name: 'Chicken Briyani',
        img: '/chicken_briyani.jpg',
        description: 'Spiced rice dish with marinated chicken and fragrant herbs.',
      },
      {
        id: 9,
        name: 'Masala Dosa',
        img: '/masala_dosa.jpg',
        description: 'Crispy crepe filled with spiced potato filling.',
      },
    ],
  },
  {
    name: 'Italian',
    dishes: [
      {
        id: 10,
        name: 'Spaghetti Carbonara',
        img: '/spaghetti_carbonara.jpg',
        description: 'Classic pasta with creamy egg sauce, pancetta, and Parmesan.',
      },
      {
        id: 11,
        name: 'Risotto ai Funghi',
        img: '/risotto_ai_funghi.jpg',
        description: 'Creamy risotto with sautéed mushrooms and Parmesan.',
      },
      {
        id: 12,
        name: 'Margherita Pizza',
        img: '/margherita_pizza.jpg',
        description: 'Pizza with fresh tomatoes, mozzarella, and basil.',
      },
    ],
  },
];

export default function GalleryPage() {
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section style={{ padding: '2rem 0', backgroundColor: '#fff' }}>
      <h1 style={{ textAlign: 'center', margin: '2rem 0', fontSize: '3rem', color: '#333', fontWeight: 'bold' }}>
        World Cuisine Gallery
      </h1>

      {/* Cuisine Selection Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {cuisines.map((cuisine) => (
          <button
            key={cuisine.name}
            onClick={() => setSelectedCuisine(cuisine.name)}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: selectedCuisine === cuisine.name ? '#007bff' : '#f8f9fa',
              color: selectedCuisine === cuisine.name ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {cuisine.name}
          </button>
        ))}
        <button
          onClick={() => setSelectedCuisine(null)}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#f8f9fa',
            color: '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Show All
        </button>
      </div>

      {/* Display Carousels */}
      {cuisines
        .filter((cuisine) => !selectedCuisine || cuisine.name === selectedCuisine)
        .map((cuisine) => (
          <div key={cuisine.name} style={{ marginBottom: '4rem' }}>
            <h2
              style={{
                textAlign: 'center',
                marginBottom: '1.5rem',
                fontSize: '2.5rem',
                color: '#333',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {cuisine.name}
            </h2>
            <div
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <Slider {...settings}>
                {cuisine.dishes.map((dish) => (
                  <div
                    key={dish.id}
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center', // Center everything vertically
                      height: '100%', // Ensure full height usage
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%', // Full width of the container
                      }}
                    >
                      <Image
                        src={dish.img}
                        alt={dish.name}
                        width={600}
                        height={400}
                        style={{
                          borderRadius: '10px',
                          objectFit: 'cover',
                          maxWidth: '100%', // Ensure the image is responsive
                          height: 'auto',
                        }}
                      />
                    </div>
                    <h3 style={{ marginTop: '1rem', fontSize: '2rem', color: '#333', textAlign: 'center' }}>{dish.name}</h3>
                    <p
                      style={{
                        marginTop: '0.5rem',
                        color: '#666',
                        fontSize: '1.5rem', // Increased font size
                        lineHeight: '1.6',
                        maxWidth: '80%', // Keep text centered and readable
                        textAlign: 'center',
                      }}
                    >
                      {dish.description}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
    </section>
  );
}
