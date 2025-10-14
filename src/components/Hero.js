import React from "react";
import Slider from "react-slick";

export default function Hero() {
  const slides = [
    {
      image: "/van1.jpg",
      caption: "Amazon DSP Fleet Service Experts",
    },
    {
      image: "/van2.png",
      caption: "24-Hour Road & Mobile Service",
    },
    {
      image: "/van3.jpg",
      caption: "Fast Turnaround - Reliable Maintenance",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400,
    fade: true,
    arrows: false,
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, i) => (
          <div key={i} className="relative h-[85vh]">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {slide.caption}
              </h1>
              <p className="text-lg max-w-2xl mb-8">
                We provide Amazon DSP fleet maintenance, road service, and body work
                with a 12-24 hour turnaround time, because every van counts.
              </p>
              <a
                href="#contact"
                className="bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
