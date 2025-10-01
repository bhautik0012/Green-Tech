import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const images = [
  {
    src: "public/solar1.jpg",
    alt: "Solar Panel 1",
    title: "Premium Solar Solutions",
    description: "High-efficiency panels for maximum energy output"
  },
  {
    src: "public/solar2.jpg",
    alt: "Solar Panel 2",
    title: "Sustainable Energy",
    description: "Clean, renewable power for your future"
  },
  {
    src: "public/solar3.jpg",
    alt: "Solar Panel 3",
    title: "Smart Technology",
    description: "Advanced monitoring and optimization systems"
  },
];

const Solar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div style={{ bottom: "60px" }} className="slick-dots">
        <ul className="flex justify-center space-x-3"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
        i === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
      }`}></div>
    ),
  };

  return (
    <>
      <style>
        {`
          .slick-dots li.slick-active div {
            background-color: white !important;
            transform: scale(1.25);
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
          }
          
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
          }
          
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
        `}
      </style>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <Slider {...settings} className="relative z-10">
          {images.map((image, index) => (
            <div key={index} className="relative min-h-screen">
              <div className="relative h-screen">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                  {/* Main heading */}
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 animate-pulse-slow">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent animate-fadeInUp">
                      GREEN<span className="text-green-400">TECH</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-green-100 animate-slideInLeft">
                      {image.title}
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slideInRight">
                      {image.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <NavLink to="/About">
                      <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-8 rounded-full hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/50 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                        <span className="relative z-10 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          FIND OUT MORE
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                      </button>
                    </NavLink>
                  </div>

                  {/* Features */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">25 Year Warranty</h3>
                      <p className="text-gray-300 text-sm">Comprehensive coverage for peace of mind</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">High Efficiency</h3>
                      <p className="text-gray-300 text-sm">Maximum energy output from every panel</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Cost Savings</h3>
                      <p className="text-gray-300 text-sm">Reduce your energy bills significantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Solar;
