"use client";

import React, { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
      {/* Background Geometric Line Art Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] flex items-center justify-start">
        <svg
          className="w-[600px] h-[600px] -ml-20 text-[#207885]"
          viewBox="0 0 500 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <polygon points="250,50 450,200 350,450 150,450 50,200" />
          <line x1="250" y1="50" x2="350" y2="450" />
          <line x1="250" y1="50" x2="150" y2="450" />
          <line x1="450" y1="200" x2="50" y2="200" />
          <line x1="450" y1="200" x2="150" y2="450" />
          <line x1="50" y1="200" x2="350" y2="450" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Heading & Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-[38px] font-bold text-[#0e1726] tracking-tight mb-4">
            Let&apos;s talk with us
          </h2>

          <p className="text-[#64748b] text-[14.5px] leading-relaxed mb-8 max-w-md">
            Questions, comments, or suggestions? Simply fill in the form and
            we&apos;ll be in touch shortly.
          </p>

          <div className="flex flex-col gap-5 text-[14.5px] font-semibold text-[#0e1726]">
            {/* Phone Number */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f0f7f7] border border-[#d2ecef] flex items-center justify-center text-[#207885]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span>+1 (800) 484-5564</span>
            </div>

            {/* Email Address */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f0f7f7] border border-[#d2ecef] flex items-center justify-center text-[#207885]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span>Support@zoikotech.com</span>
            </div>
          </div>
        </div>

        {/* Right Column: Card Form */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] bg-white rounded-xl border border-[#e2e8f0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8fafc] border border-[#d1d5db] focus:border-[#207885] rounded-lg px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8fafc] border border-[#d1d5db] focus:border-[#207885] rounded-lg px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#f8fafc] border border-[#d1d5db] focus:border-[#207885] rounded-lg px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-colors"
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-[#f8fafc] border border-[#d1d5db] focus:border-[#207885] rounded-lg px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-colors"
              />

              {/* Message Area */}
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f8fafc] border border-[#d1d5db] focus:border-[#207885] rounded-lg px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none resize-y transition-colors"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#207885] hover:bg-[#185e68] text-white font-medium text-[15px] py-3.5 px-6 rounded-lg transition-colors shadow-sm mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
