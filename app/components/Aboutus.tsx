"use client"
import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center py-12 px-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-bold text-blue-900">About Us</h2>
          <p className="text-gray-800 mt-4">
            We believe in nurturing both the mind and body. Our academic partnership with local schools ensures that 
            athletes receive quality education while pursuing their sports careers. Flexible academic schedules and 
            tutoring support are provided for student-athletes.
          </p>

          <h3 className="text-xl font-bold text-purple-700 mt-6">Mission.</h3>
          <p className="text-gray-800 mt-2">
            At Innovative Sports Academy, Vijaypur, our mission is to foster a new generation of athletes by providing 
            state-of-the-art facilities, world-class coaching, and a nurturing environment for talent development. 
            We aim to blend traditional sports education with cutting-edge techniques, preparing athletes for success 
            both on and off the field.
          </p>

          <h3 className="text-xl font-bold text-purple-700 mt-6">Vision.</h3>
          <p className="text-gray-800 mt-2">
            To become a premier sports academy in India, recognized for developing well-rounded athletes who excel at 
            national and international levels, while promoting the values of sportsmanship, discipline, and teamwork.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/image/xxlogo.jpg,Mic.x0QEz4l_dt.webp.pagespeed.ic.MuIpVFgBwV.webp" alt="Innovative Sports Academy Logo" className="w-80 rounded-lg shadow-lg" />
        </div>
        
      </div>
    </section>
  );
}
