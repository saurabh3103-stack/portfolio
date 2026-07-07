'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 z-50 w-full px-4 sm:px-6 lg:px-10">
      {/* Navbar Container */}
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-6">
        {/* Logo + Name */}
        <Link
          href="#hero"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png?v=2"
            alt="Shivanshu Web Developer Logo"
            width={160}
            height={50}
            priority
            unoptimized={true}
            style={{ width: "160px", height: "auto" }}
            draggable={false}
            className="cursor-pointer"
          />
        </Link>

        {/* Web Navbar */}
        <div className="hidden h-full flex-row items-center justify-between md:flex md:mr-8">
          <div className="flex items-center justify-between gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer transition hover:text-cyan-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden flex-row gap-4 md:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-300"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-2xl text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 text-slate-200 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer text-center transition hover:text-cyan-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center gap-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-300"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};