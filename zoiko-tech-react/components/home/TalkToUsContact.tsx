"use client";

import React, { useState } from "react";

export default function TalkToUsContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit logic here
  };

  return (
    <section className="w-full bg-[#F7F7F7] text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpContact {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-contact {
              animation: popUpContact 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-start animate-pop-up-contact">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-[#0f283d] md:text-[#133754] mb-12">
          Talk to us!
        </h2>

        {/* Overlapping Layout Container */}
        <div className="w-full relative flex flex-col lg:flex-row items-center">
          {/* Left Floating Interactive Form Card */}
          <div className="w-full lg:w-[420px] bg-white text-[#0f1124] rounded-2xl p-6 md:p-8 shadow-2xl relative z-20 border border-white/20 mb-8 lg:mb-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#eeeef8] text-[#0f1124] placeholder-[#8a8fa3] text-[13.5px] font-medium px-4 py-3.5 rounded-xl border border-transparent focus:border-[#ff6b4a] focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-mail*"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#eeeef8] text-[#0f1124] placeholder-[#8a8fa3] text-[13.5px] font-medium px-4 py-3.5 rounded-xl border border-transparent focus:border-[#ff6b4a] focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Enter Your Message Here"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#eeeef8] text-[#0f1124] placeholder-[#8a8fa3] text-[13.5px] font-medium px-4 py-3.5 rounded-xl border border-transparent focus:border-[#ff6b4a] focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff6b4a] to-[#ff8c42] hover:from-[#e55a39] hover:to-[#eb7b31] text-white font-bold text-[13.5px] px-8 py-3 rounded-xl shadow-md transition-all duration-200 active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Coral / Orange Banner with Image Overlay */}
          <div className="w-full lg:w-[calc(100%-200px)] opacity-100 lg:-ml-[160px] rounded-3xl overflow-hidden relative min-h-[300px] md:min-h-[340px] flex items-center justify-end p-8 md:p-12 shadow-lg z-10">
            {/* Background Team Photo Asset */}
            <img
              src="/home/talk.png"
              alt="Team members discussing edge infrastructure deployment"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl pointer-events-none"
            />
            {/* Content Box */}
            <div className="relative z-10 max-w-xl lg:pl-32 text-left">
              <p className="text-white text-[14px] md:text-[15.5px] font-medium leading-relaxed drop-shadow-sm">
                Real time applications (AI, IoT, Medical, Gaming, Industrial 4.0
                and more ) require the Edge for speed, security, resiliency and
                cost benefits. Avesha platform uses AI to locate, deploy, manage
                and optimize your Edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
