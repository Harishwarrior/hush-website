"use client";

import { MotionContainer } from "motion-provider";
import { features } from "@/constants/features";

export const Hero = () => (
  <section id="features" className="flex flex-col items-center text-center gap-8">
    <MotionContainer
      animation={{
        mode: ["filterBlurIn", "fadeIn"],
        delay: 0.5,
        transition: "gentle",
        duration: 1.2,
      }}
      elementType="h1"
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-tight"
    >
      Silence the Noise,
      <br />
      Keep What Matters 🔔
    </MotionContainer>

    <div className="flex flex-col gap-4">
      {features.map((feature, i) => (
        <MotionContainer
          key={feature.title}
          animation={{
            mode: "fadeUp",
            delay: 1.5 + i * 0.15,
            transition: "gentle",
            duration: 0.8,
          }}
          elementType="div"
          className="flex items-center gap-3 text-left max-w-md"
        >
          <span className="text-2xl">{feature.icon}</span>
          <div>
            <h3 className="font-semibold text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted">{feature.description}</p>
          </div>
        </MotionContainer>
      ))}
    </div>

    <MotionContainer
      animation={{ mode: "fadeUp", delay: 2, transition: "gentle", duration: 1 }}
      elementType="div"
      className="flex flex-col items-center gap-3"
      id="download"
    >
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/google-play-badge.svg"
          alt="Get it on Google Play"
          width={180}
          height={54}
        />
      </a>
      <p className="text-sm text-muted">
        Free on Android. No account required.
      </p>
    </MotionContainer>
  </section>
);
