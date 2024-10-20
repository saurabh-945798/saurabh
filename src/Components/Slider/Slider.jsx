// src/components/HeroSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleDonationClick = () => {
    navigate('/form'); // Redirect to the /form page
  };

  return (
    <>
      {/* Main Content */}
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/b8/aa/e3/b8aae3d157fa9979d5a856502e7b01c5.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold md:text-7xl">
            अयोध्या जीत गई,<span className=' text-orange-600 italic'> मथुरा भी जीतेगा।</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            मथुरा को रामराज्य बनाने का संकल्प
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <button
              onClick={handleDonationClick} // Redirect to /form on click
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              "दान करें"
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
