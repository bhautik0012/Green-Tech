import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 z-10 p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full cursor-pointer top-1/2"
        onClick={onClick}
      >
        &#10095;
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 z-10 p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full cursor-pointer top-1/2"
        onClick={onClick}
      >
        &#10094;
      </div>
    );
  }

  return (
    <div className="p-5 lg:block md:hidden sm:hidden" >
      <div className="mb-5 text-center ">
        <h1 className="text-4xl font-bold mb-[50px]">
          MORE <span className="text-green-500">USEFUL </span>INFO
        </h1>
      </div>

      <section className="container">
        <Slider  {...settings }>
          <div className="transition-transform duration-500 transform px-14 hover:scale-105">
            <img className="object-contain w-full h-auto" src="asset 5.jpeg" alt="Image 1" />
            <div className="relative bottom-0 p-2 text-white bg-gray-500 bg-opacity-50">
              <h2>HOW DOES SOLAR POWER WORK?</h2>
              <p>In short, our panels absorb the sun's energy...</p>
            </div>
          </div>
          <div className="transition-transform duration-500 transform px-14 hover:scale-105">
            <img className="w-full h-auto" src="asset 6.jpeg" alt="Image 2" />
            <div className="relative bottom-0 p-2 text-white bg-gray-500 bg-opacity-50">
              <h2>WILL SOLAR PANELS LOOK GOOD ON MY ROOF?</h2>
              <p>Absolutely! Our set of contemporary designed...</p>
            </div>
          </div>
          <div className="transition-transform duration-500 transform px-14 hover:scale-105">
            <img className="w-full h-auto" src="asset 7.jpeg" alt="Image 3" />
            <div className="relative bottom-0 p-2 text-white bg-gray-500 bg-opacity-50">
              <h2>AIR POWER AND HOW IS IT USED?</h2>
              <p>Air power involves the conversion of sunlight...</p>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default CarouselComponent;




