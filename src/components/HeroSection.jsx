import React from 'react';
import img from '../assets/istockphoto-1409520341-1024x1024.jpg'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-b from-white to-blue-50 min-h-[80vh]">
       
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="text-gray-500 mb-2">Welcome!</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Manage your <span className="text-blue-600">Deals</span>
        </h1>
        <button className="mt-6 px-5 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

   
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img} 
          alt="Manage Deals Illustration"
          className="max-w-md w-full rounded-[50px_0px_50px_0px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
