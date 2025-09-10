import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import hacker from "../img/Ellipse 11.png"

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials] = useState([
    {
      text: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends.",
      name: "Marvin McKinney",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5
    },
    {
      text: "This platform helped me enhance my skills and land a great job. I highly recommend it to anyone looking to grow in their career.",
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4
    },
    {
      text: "The quality of courses and instructors is exceptional. I've tried many platforms but this one stands out with its practical approach.",
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5
    },
    {
      text: "As a busy professional, I appreciate the flexibility and depth of the learning materials. It's been a game-changer for my career.",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5
    }
  ]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-10 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why thousands of students choose our platform for their learning journey
        </p>
      </div>
      
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-10 text-center flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center mb-6">
                  {renderStars(t.rating)}
                </div>
                
                <p className="text-lg text-gray-700 relative mb-8 leading-relaxed">
                  <span className="text-4xl text-blue-500 absolute -left-6 -top-4">“</span>
                  {t.text}
                  <span className="text-4xl text-blue-500 absolute -right-6 -bottom-6">”</span>
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-3"
                />
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <Button onClick={goToPrev} className="bg-white shadow-lg rounded-full">
          <ChevronLeft />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <Button onClick={goToNext} className="bg-white shadow-lg rounded-full">
          <ChevronRight />
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
