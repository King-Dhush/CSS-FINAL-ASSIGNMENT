// DHUSH //
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Adjusted autoplay speed
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "5px", padding: "5px" }} // Added padding
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "5px", padding: "5px" }} // Added padding
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
}
