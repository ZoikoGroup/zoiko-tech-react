"use client";

import React, { useState } from "react";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      avatar: "/home/profile 1.png",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Viverra augue dolor tellus posuere eu erat eu. Ut sem lacinia elit massa risus suspendisse vitae ornare ipsum. Pulvinar urna velit fermentum adipiscing phasellus habitasse nibh habitant. Id nibh vel vel ipsum lacus.",
    },
    {
      id: 2,
      name: "Daniel Thompson",
      role: "Product Designer",
      avatar: "/home/profile 2.png",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum mattis varius montes convallis velit nunc mattis massa ornare at risus ornare a eu lectus integer libero leo erat.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="w-full bg-[#F7F7F7] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpTestimonial {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-testimonial {
              animation: popUpTestimonial 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-pop-up-testimonial">
        {/* Left Header & Control Area */}
        <div className="lg:col-span-5 flex flex-col items-start text-left pr-0 lg:pr-6">
          <span className="text-[#207885] text-[11px] font-extrabold tracking-widest uppercase mb-3 block">
            TESTIMONIAL
          </span>

          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-[#0f1124] leading-[1.18] mb-6">
            We’ve build trust with reviews from real users
          </h2>

          <p className="text-[#6b719c] text-[13.5px] md:text-[14.5px] leading-relaxed font-normal mb-10 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Lectus nisi pellentesque
            sollicitudin rhoncus. Quis dolor lectus in tempor id sed rhoncus
            morbi arcu.
          </p>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#ebedf5] bg-white hover:bg-[#f0f2f7] text-[#0f1124] flex items-center justify-center shadow-xs transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#207885] hover:bg-[#185e68] text-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Testimonial Cards Carousel */}
        <div className="lg:col-span-7 overflow-hidden relative w-full">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 60}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[85%] sm:w-[360px] md:w-[420px] shrink-0 bg-white border border-[#ebedf5] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[320px] relative hover:shadow-md transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div>
                  <div className="flex items-center gap-1 text-[#ffb800] mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-[#51567d] text-[13px] md:text-[13.5px] leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* User Info Block */}
                <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-[#ebedf5]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#d7dae6]"
                  />
                  <div className="text-left">
                    <h4 className="font-extrabold text-[#0f1124] text-[14px] leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-[#8a8fa3] text-[11.5px] font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
