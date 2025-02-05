import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FullAbout() {
  const carouselImages = [
    "/luxury-travel-1.jpg",
    "/luxury-travel-2.jpg",
    "/luxury-travel-3.jpg",
    "/luxury-travel-4.jpg"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="max-w-5xl mx-auto space-y-6 py-12">
      
      {/* Profile Photo */}
      <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto">
        <Image src="/profile-photo.jpg" alt="Travel Expert" fill className="object-cover" />
      </div>

      {/* Biography */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Your Luxury Travel Expert</h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          With <strong>30+ years of experience</strong> in the luxury travel industry, I have collaborated with **prestigious agencies and high-net-worth clients** to craft bespoke journeys. 
          From **private island getaways** to **exclusive VIP experiences**, my expertise spans across <strong>20+ countries</strong> in **Europe, LATAM, USA, Asia, Oceania, Africa, and the Middle East**.
        </p>
        <p className="text-gray-700 mt-4">
          My extensive **global network of elite partners** ensures seamless, privileged access to **luxury resorts, private charters, Michelin-starred dining, and one-of-a-kind cultural experiences**. 
          Whether it’s an exclusive retreat or a business-class itinerary, I am committed to designing journeys tailored to perfection.
        </p>
      </div>

      {/* Language & Background Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Multilingual Expertise</h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          As a **native Spaniard**, I provide concierge services in **Spanish, English, and French**. 
          My multicultural background ensures seamless communication and exclusive access to **elite destinations worldwide**.
        </p>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-6 space-x-6">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-lg">
          LinkedIn
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline text-lg">
          Instagram
        </a>
        <a href="https://pinterest.com/your-profile" target="_blank" rel="noreferrer" className="text-red-600 hover:underline text-lg">
          Pinterest
        </a>
      </div>

      {/* Photo Carousel */}
      <div className="max-w-3xl mx-auto">
        <Slider {...sliderSettings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="relative w-full h-64 md:h-80">
              <Image src={image} alt={`Luxury Travel ${index + 1}`} fill className="object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
      
    </section>
  );
}


