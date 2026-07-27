"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const productItems = [
    {
      name: "ZoikoTime — AI productivity tracking",
      href: "/zoiko-time",
    },
    {
      name: "ZoikoSuite — Accounting, HR, compliance",
      href: "/zoiko-suite",
    },
    { name: "ZoikoNex — Telecom-grade OSS/BSS", href: "/zoiko-nex" },
    {
      name: "ZoikoAxis — Custom software, AI, telecom solutions",
      href: "/zoiko-axis",
    },
    {
      name: "ZoikoPay — Intelligent global payments platform",
      href: "/zoiko-pay",
    },
    {
      name: "ZoikoPal — Companion AI for elderly",
      href: "/zoiko-pal",
    },
    {
      name: "ZoikoTV — OTT platform: animals, tech & environment",
      href: "/zoiko-tv",
    },
    {
      name: "ZoikoSocial — Animal-lover social network",
      href: "/zoiko-social",
    },
    {
      name: "ZoikoShield — SME security suite",
      href: "/zoiko-shield",
    },
    {
      name: "ZoikoAssure — Global RegTech platform",
      href: "/zoiko-assure",
    },
    {
      name: "BookingOrbit — AI-powered bookings",
      href: "/booking-orbit",
    },
    {
      name: "ZoikoPharos — Relocation, immigration & country intelligence hub",
      href: "/zoiko-pharos",
    },
    {
      name: "ZoikoAgora — Professional services marketplace",
      href: "/zoiko-agora",
    },
  ];

  const solutionItems = [
    {
      name: "Intelligent Productivity (ZoikoTime)",
      href: "/solutions-zoikotime",
    },
    {
      name: "Compliance & Business Operations (ZoikoSuite)",
      href: "/solutions-zoikosuite",
    },
    {
      name: "Telecom OSS/BSS Infrastructure (ZoikoNex)",
      href: "/solutions-zoikonex",
    },
    {
      name: "AI-Driven Elder Care (ZoikoPal)",
      href: "/solutions-zoikopal",
    },
    {
      name: "OTT Media & Community Engagement (ZoikoTV, ZoikoSocial)",
      href: "/solutions-zoikotv",
    },
    {
      name: "Embedded Financial Infrastructure (ZoikoPay)",
      href: "/solutions-zoikopay",
    },
    {
      name: "SME Cybersecurity & Fraud Protection (ZoikoShield)",
      href: "/solutions-zoikoshield",
    },
    {
      name: "Global Support & Contact",
      href: "/contact",
    },
    {
      name: "Mobility & Travel Commerce (BookingOrbit)",
      href: "/solutions-bookingorbit",
    },
    {
      name: "Custom AI & Telecom Engineering (ZoikoAxis)",
      href: "/solutions-zoikoaxis",
    },
  ];

  const industryItems = [
    { name: "Telecommunications", href: "/telecom" },
    { name: "Financial Services & Fintech", href: "/fintech" },
    {
      name: "Healthcare, Wellness and elder care",
      href: "/healthcare",
    },
    { name: "Media, OTT & Entertainment", href: "/media" },
    { name: "SMEs & Enterprise SaaS", href: "/sme-saas" },
    { name: "Travel & Mobility", href: "/travel" },
    { name: "Regulatory & Compliance", href: "/compliance" },
    { name: "Cybersecurity & Data Privacy", href: "/cybersecurity" },
    { name: "Social Platforms & Communities", href: "/social" },
  ];

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
      type: "products",
    },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      type: "solutions",
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      type: "industries",
    },
    { name: "About Us", href: "/about-us", hasDropdown: false },
    { name: "Insights", href: "/insights", hasDropdown: false },
    { name: "Contact Us", href: "/contact-us", hasDropdown: false },
  ];

  const isActive = (href: string) => pathname === href;

  // Helper to close all desktop dropdowns
  const closeAllDropdowns = () => {
    setProductsOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <header className="w-full bg-white border-b-3 border-[#247780] shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-18 py-12 h-20 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex-shrink-0 flex items-center h-full pr-4">
          <Link
            href="/"
            className="flex items-center h-full"
            onClick={closeAllDropdowns}
          >
            <div className="relative w-36 h-10 sm:w-40 cursor-pointer flex items-center">
              <Image
                src="/zoikotech.png"
                alt="ZOIKOTECH"
                width={140}
                height={72}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#222222] px-6">
          {navLinks.map((link) => {
            if (link.type === "products") {
              return (
                <div
                  key={link.name}
                  className="relative py-6 flex items-center"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setProductsOpen(false)}
                    className="hover:text-[#1F7379] transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 mt-0.5 ${
                        productsOpen ? "rotate-180 text-[#1F7379]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full -mt-2 w-[420px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        <div className="flex flex-col py-1.5">
                          {productItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setProductsOpen(false)}
                                className={`px-5 py-2.5 text-[14px] transition-colors leading-snug cursor-pointer ${
                                  active
                                    ? "bg-[#3f444b] text-white font-medium"
                                    : "text-[#333333] hover:bg-[#3f444b] hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.type === "solutions") {
              return (
                <div
                  key={link.name}
                  className="relative py-6 flex items-center"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="hover:text-[#1F7379] transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 mt-0.5 ${
                        solutionsOpen ? "rotate-180 text-[#1F7379]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full -mt-2 w-[440px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        <div className="flex flex-col py-1.5">
                          {solutionItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setSolutionsOpen(false)}
                                className={`px-5 py-2.5 text-[14px] transition-colors leading-snug cursor-pointer ${
                                  active
                                    ? "bg-[#3f444b] text-white font-medium"
                                    : "text-[#333333] hover:bg-[#3f444b] hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.type === "industries") {
              return (
                <div
                  key={link.name}
                  className="relative py-6 flex items-center"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIndustriesOpen(false)}
                    className="hover:text-[#1F7379] transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 mt-0.5 ${
                        industriesOpen ? "rotate-180 text-[#1F7379]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full -mt-2 w-[340px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        <div className="flex flex-col py-1.5">
                          {industryItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIndustriesOpen(false)}
                                className={`px-5 py-2.5 text-[14px] transition-colors leading-snug cursor-pointer ${
                                  active
                                    ? "bg-[#3f444b] text-white font-medium"
                                    : "text-[#333333] hover:bg-[#3f444b] hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div
                key={link.name}
                className="relative group flex items-center py-6"
              >
                <Link
                  href={link.href}
                  onClick={closeAllDropdowns}
                  className="hover:text-[#1F7379] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{link.name}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Search Input Container */}
        <div className="flex items-center space-x-3 pl-4">
          <div className="relative hidden sm:block w-44 md:w-52 lg:w-56">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1F7379] focus:border-[#1F7379] transition-all"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#1F7379] text-white hover:bg-[#185c61] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <div className="relative mb-4 sm:hidden">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1F7379]"
                />
              </div>

              {navLinks.map((link) => {
                if (link.type === "products") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-base font-medium text-[#222222] hover:bg-gray-50 hover:text-[#1F7379]">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-grow cursor-pointer"
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() =>
                            setMobileProductsOpen(!mobileProductsOpen)
                          }
                          className="p-1 focus:outline-none cursor-pointer"
                        >
                          <svg
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              mobileProductsOpen
                                ? "rotate-180 text-[#1F7379]"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pr-2 space-y-1 my-1 overflow-hidden"
                          >
                            {productItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-xs transition-colors cursor-pointer ${
                                  isActive(item.href)
                                    ? "bg-[#3f444b] text-white font-medium"
                                    : "text-gray-600 hover:bg-[#3f444b] hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.type === "solutions") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-base font-medium text-[#222222] hover:bg-gray-50 hover:text-[#1F7379]">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-grow cursor-pointer"
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() =>
                            setMobileSolutionsOpen(!mobileSolutionsOpen)
                          }
                          className="p-1 focus:outline-none cursor-pointer"
                        >
                          <svg
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              mobileSolutionsOpen
                                ? "rotate-180 text-[#1F7379]"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pr-2 space-y-1 my-1 overflow-hidden"
                          >
                            {solutionItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-xs transition-colors cursor-pointer ${
                                  isActive(item.href)
                                    ? "bg-[#3f444b] text-white font-medium"
                                    : "text-gray-600 hover:bg-[#3f444b] hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.type === "industries") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-[#222222] hover:bg-gray-50 hover:text-[#1F7379]">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-grow cursor-pointer"
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() =>
                            setMobileIndustriesOpen(!mobileIndustriesOpen)
                          }
                          className="p-1 focus:outline-none cursor-pointer"
                        >
                          <svg
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              mobileIndustriesOpen
                                ? "rotate-180 text-[#1F7379]"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 pr-2 space-y-1 my-1 overflow-hidden"
                          >
                            {industryItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-xs transition-colors cursor-pointer ${
                                  isActive(item.href)
                                    ? "bg-[#3f444b] text-white font-medium"
                                    : "text-gray-600 hover:bg-[#3f444b] hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-[#222222] hover:bg-gray-50 hover:text-[#1F7379] cursor-pointer"
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
