import React, { useState } from "react";
import teamImage1 from "../Assets/Britney.jpeg";
import teamImage2 from "../Assets/Divine .jpeg";
import teamImage3 from "../Assets/Robert.jpeg";
import "tailwindcss/tailwind.css";

const testimonials = [
  {
    id: 1,
    image: teamImage1,
    text: "I have been deeply moved by the impact this NGO has made in our community. Their dedication to improving education for underprivileged children is truly inspiring. Through their programs, I’ve witnessed firsthand how they provide not just academic support, but also hope and confidence to these young minds.",
    client: "Britney",
  },
  {
    id: 2,
    image: teamImage2,
    text: "As a volunteer, I’ve had the privilege of working closely with this NGO, and I can confidently say that their commitment to creating lasting change is unmatched. They approach every challenge with compassion and professionalism, ensuring that every dollar donated is used effectively.",
    client: "Divine",
  },
  {
    id: 3,
    image: teamImage3,
    text: "This NGO has been a beacon of hope for so many people. Their focus on sustainable development and empowering communities has led to tangible improvements in health, education, and livelihoods. I’ve seen entire communities transformed by their efforts.",
    client: "Robert",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="testimonial text-center bg-cover bg-center py-12 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 59, 59, 0.6), rgba(28, 59, 59, 0.6)), url('https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-white text-3xl font-bold uppercase relative inline-block z-10">
            Testimonial
          </h2>
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-3 bg-no-repeat bg-center h-10 w-44"
            style={{
              backgroundImage: "url('https://i.ibb.co/d7tSD1R/heading-line-white.png')",
            }}
          ></div>
        </div>

        <div className="carousel relative flex items-center justify-center overflow-hidden">
          <div
            className="carousel-inner flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="carousel-item flex-none w-full text-white flex flex-col items-center justify-center"
              >
                <img
                  src={testimonial.image}
                  alt={`Client ${testimonial.client}`}
                  className="rounded-full w-32 h-32 shadow-lg mb-6"
                />
                <p className="text-lg mb-4">{testimonial.text}</p>
                <h4 className="text-xl font-semibold">{testimonial.client}</h4>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 transform -translate-y-1/2 bg-transparent border-2 border-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={goToPrevious}
            style={{ top: "50%" }}
          >
            &lt;
          </button>
          <button
            className="absolute right-0 transform -translate-y-1/2 bg-transparent border-2 border-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={goToNext}
            style={{ top: "50%" }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
