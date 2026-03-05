"use client";

import { MotionContainer } from "motion-provider";
import { navLinks } from "@/constants/nav-links";

export const Navbar = () => (
  <MotionContainer
    animation={{ mode: "fadeIn", delay: 0, transition: "gentle", duration: 1 }}
    elementType="nav"
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/5"
  >
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2">
        <img src="/hush-logo.svg" alt="Hush" width={32} height={32} />
        <span className="text-xl font-bold tracking-tight text-foreground">Hush</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted hover:text-foreground transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

    </div>
  </MotionContainer>
);
