"use client";

import { MotionContainer } from "motion-provider";

export const Announcement = () => (
  <MotionContainer
    animation={{ mode: "fadeIn", delay: 0.2, transition: "gentle", duration: 1 }}
    elementType="div"
    className="flex justify-center"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-surface/50 backdrop-blur-sm">
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-foreground text-white">
        New
      </span>
      <span className="text-sm text-muted">
        Smart notification categorization is here.
      </span>
      <a
        href="#features"
        className="text-sm font-medium text-foreground hover:text-muted transition-colors duration-200"
      >
        Try it Now →
      </a>
    </div>
  </MotionContainer>
);
