"use client";

import React from "react";
import {
  Plane,
  HeartPulse,
  Utensils,
  Sparkles,
  Car,
  Ticket,
  GraduationCap,
  Building2,
} from "lucide-react";

const ecosystemCategories = [
  {
    title: "Travel & Accommodation",
    description:
      "Hotels, B&Bs, flights, car rentals, and airport transfers with intelligent route optimization and price matching.",
    icon: <Plane className="w-5 h-5 text-white" />,
  },
  {
    title: "Health & Wellness",
    description:
      "GP appointments, dental care, physiotherapy, mental health services, and spa treatments with NHS integration.",
    icon: <HeartPulse className="w-5 h-5 text-white" />,
  },
  {
    title: "Food & Dining",
    description:
      "Restaurant reservations, takeaway orders, chef services, and catering with dietary preference matching.",
    icon: <Utensils className="w-5 h-5 text-white" />,
  },
  {
    title: "Beauty & Personal Care",
    description:
      "Hair salons, beauty treatments, massage therapy, and personal training with verified professional ratings.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    title: "Automotive & Mobility",
    description:
      "MOT tests, car services, driving lessons, and vehicle rentals with maintenance scheduling and reminders.",
    icon: <Car className="w-5 h-5 text-white" />,
  },
  {
    title: "Leisure & Entertainment",
    description:
      "Theatre tickets, cinema bookings, fitness classes, and event tickets with group booking discounts.",
    icon: <Ticket className="w-5 h-5 text-white" />,
  },
  {
    title: "Education & Professional Services",
    description:
      "Tutoring, training courses, legal consultations, and business services with credential verification.",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    title: "Public & Community Spaces",
    description:
      "Council services, community centres, library bookings, and public facility reservations with local integration.",
    icon: <Building2 className="w-5 h-5 text-white" />,
  },
];

export default function CompleteBookingEcosystem() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#1e293b] tracking-tight mb-4 leading-tight">
            Complete Booking Ecosystem
          </h2>
          <p className="text-[#64748b] text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed">
            Every service you need, intelligently connected and ethically
            governed
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {ecosystemCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              {/* Teal Circle Badge for Icon */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#38b2ac] to-[#2c7a7b] flex items-center justify-center mb-6 shadow-xs shrink-0">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-[19px] font-bold text-[#0f1124] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[#64748b] text-[14px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
