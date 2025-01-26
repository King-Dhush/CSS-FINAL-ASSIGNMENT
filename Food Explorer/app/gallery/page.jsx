'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const dishes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    img: '/SpaghettiCarbonara.jpg',
    description: 'Classic Italian pasta with a creamy egg sauce, pancetta, and Parmesan cheese.',
  },
  {
    id: 2,
    name: 'Chicken Alfredo',
    img: '/ChickenAlfredo.jpg',
    description: 'Tender chicken served with a rich Alfredo sauce over fettuccine pasta.',
  },
  {
    id: 3,
    name: 'Vegetable Stir Fry',
    img: '/VegetableStirFry.jpg',
    description: 'Colorful vegetables tossed in a savory sauce, perfect for a healthy meal.',
  },
  {
    id: 4,
    name: 'Beef Tacos',
    img: '/Beef-Tacos.jpg',
    description: 'Spiced ground beef in warm tortillas, topped with lettuce, cheese, and salsa.',
  },
  {
    id: 5,
    name: 'Grilled Salmon',
    img: '/GrilledSalmon.jpg',
    description: 'Fresh salmon fillet grilled to perfection, seasoned simply with salt and pepper.',
  },
];

export default function GalleryPage() {
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each action
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // 30 seconds
    arrows: true, // Show next/prev arrows
    pauseOnHover: true, // Pause autoplay on hover
    adaptiveHeight: true, // Adjust slider height based on content
  };

  return (
    <section>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Food Gallery</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Slider {...settings}>
          {dishes.map((dish) => (
            <div key={dish.id} style={{ padding: '1rem' }}>
              <Image
                src={dish.img}
                alt={dish.name}
                width={400}
                height={300}
                style={{ borderRadius: '8px', margin: '0 auto' }}
              />
              <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>{dish.name}</h2>
              <p style={{ textAlign: 'center', color: '#555' }}>{dish.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
