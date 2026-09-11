"use client";

import Link from "next/link";
import { useState } from "react";

import ProductMegaMenu from "./ProductMegaMenu";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import IndustriesMegaMenu from "./IndustriesMegaMenu";
import TechnologyMegaMenu from "./TechnologyMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems = [
    {
      name: "Platforms",
      href: "#",
      dropdown: true,
    },
    {
      name: "Solutions",
      href: "#",
      dropdown: true,
    },
    {
      name: "Industries",
      href: "#",
      dropdown: true,
    },
    {
      name: "Technology",
      href: "#",
      dropdown: true,
    },
    {
      name: "Resources",
      href: "#",
      dropdown: true,
    },
    {
      name: "Company",
      href: "#",
      dropdown: true,
    },
  ];

  const handleMenuEnter = (name: string) => {
    setOpenMenu(name);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  return (
    <header className="relative z-50 h-24 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-10">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          onClick={closeMenu}
        >
          <img
            src="/zoikotech.png"
            alt="Zoiko Tech"
            className="h-20 w-46 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isOpen = openMenu === item.name;

            return (
              <div
                key={item.name}
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
              >
                {/* Navigation Item */}
                <Link
                  href={item.href}
                  className="relative flex h-16 items-center justify-center pt-1"
                >
                  <span
                    className={`
                      flex
                      items-center
                      gap-1.5
                      whitespace-nowrap
                      text-base
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        isOpen
                          ? "text-cyan-700"
                          : "text-slate-900"
                      }
                    `}
                  >
                    {item.name}

                    {item.dropdown && (
                      <span
                        className={`
                          relative
                          mt-0.5
                          flex
                          h-2
                          w-2
                          items-center
                          justify-center
                          transition-transform
                          duration-200
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <span
                          className={`
                            absolute
                            left-[1px]
                            top-[1px]
                            h-[5px]
                            w-[5px]
                            rotate-45
                            border-b
                            border-r
                            transition-colors
                            duration-200
                            ${
                              isOpen
                                ? "border-cyan-700"
                                : "border-slate-500"
                            }
                          `}
                        />
                      </span>
                    )}
                  </span>

                  {/* Active Underline */}
                  <span
                    className={`
                      absolute
                      bottom-[7px]
                      left-0
                      h-[2px]
                      rounded-full
                      bg-cyan-700
                      transition-all
                      duration-200
                      ${
                        isOpen
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>

                {/* Invisible Hover Bridge */}
                <div className="absolute left-0 right-0 top-full h-5" />

                {/* Platforms Dropdown */}
                {item.name === "Platforms" && (
                  <ProductMegaMenu
                    isOpen={isOpen}
                    onLinkClick={closeMenu}
                  />
                )}

                {/* Solutions Dropdown */}
                {item.name === "Solutions" && (
                  <SolutionsMegaMenu
                    isOpen={isOpen}
                    onLinkClick={closeMenu}
                  />
                )}

                {/* Industries Dropdown */}
                {item.name === "Industries" && (
                  <IndustriesMegaMenu
                    isOpen={isOpen}
                    onLinkClick={closeMenu}
                  />
                )}

                {/* Technology Dropdown */}
                {item.name === "Technology" && (
                  <TechnologyMegaMenu
                    isOpen={isOpen}
                    onLinkClick={closeMenu}
                  />
                )}

                {/* Resources Dropdown */}
                {item.name === "Resources" && (
                  <ResourcesMegaMenu
                    isOpen={isOpen}
                    onLinkClick={closeMenu}
                  />
                )}

                {/* Company Dropdown */}
                {item.name === "Company" && (
                  <CompanyMegaMenu
                    isOpen={isOpen}
                    onLinkClick={closeMenu}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-6 lg:flex">

          {/* Search */}
          <button
            type="button"
            className="group flex items-center gap-2 text-slate-900"
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <span className="relative text-base font-normal">
              Search

              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-700 transition-all duration-200 group-hover:w-full" />
            </span>
          </button>

          {/* Contact Sales */}
          <Link
            href="/contact-us"
            onClick={closeMenu}
            className="flex h-11 items-center justify-center rounded-lg bg-cyan-700 px-6 transition-colors hover:bg-cyan-800"
          >
            <span className="text-sm font-semibold text-white">
              CONTACT SALES
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-slate-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 z-50 border-b border-zinc-200 bg-white shadow-md lg:hidden">
          <nav className="flex flex-col gap-5 px-6 py-5">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-900 transition-colors hover:text-cyan-700"
              >
                {item.name}

                {item.dropdown && (
                  <span className="h-2 w-2 rotate-45 border-b border-r border-slate-500" />
                )}
              </Link>
            ))}

            {/* Mobile Contact Sales */}
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 items-center justify-center rounded-lg bg-cyan-700 px-6 transition-colors hover:bg-cyan-800"
            >
              <span className="text-sm font-semibold text-white">
                CONTACT SALES
              </span>
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}