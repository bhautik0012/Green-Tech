import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  const articles = [
    {
      image: "asset 5.jpeg",
      title: "HOW DOES SOLAR POWER WORK?",
      description: "In short, our panels absorb the sun's energy and convert it into clean, usable electricity for your home.",
      category: "Solar Basics"
    },
    {
      image: "asset 6.jpeg",
      title: "WILL SOLAR PANELS LOOK GOOD ON MY ROOF?",
      description: "Absolutely! Our set of contemporary designed panels seamlessly integrate with any roof style.",
      category: "Installation"
    },
    {
      image: "asset 7.jpeg",
      title: "AIR POWER AND HOW IS IT USED?",
      description: "Air power involves the conversion of sunlight into energy through advanced photovoltaic technology.",
      category: "Technology"
    }
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 z-10 p-3 text-white transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-600 rounded-full cursor-pointer top-1/2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={onClick}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 z-10 p-3 text-white transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-600 rounded-full cursor-pointer top-1/2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={onClick}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            MORE <span className="text-green-400">USEFUL</span> INFO
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Discover everything you need to know about solar energy and make informed decisions for your home.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {articles.map((article, index) => (
              <div key={index} className="px-4">
                <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                      src={article.image} 
                      alt={article.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-green-100 text-sm leading-relaxed mb-4">
                      {article.description}
                    </p>
                    
                    {/* Read more button */}
                    <button className="group/btn flex items-center text-green-400 hover:text-green-300 font-semibold text-sm transition-colors duration-300">
                      <span className="mr-2">Read More</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Dots styling */}
        <style>
          {`
            .slick-dots {
              bottom: -60px !important;
            }
            
            .slick-dots li button:before {
              color: rgba(255, 255, 255, 0.5) !important;
              font-size: 12px !important;
            }
            
            .slick-dots li.slick-active button:before {
              color: #10b981 !important;
            }
            
            .slick-dots li button:hover:before {
              color: #10b981 !important;
            }
          `}
        </style>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;




