"use client";

import { MotionChain } from "motion-provider";
import cards from "@/constants/cards";
import { Card } from "./card";

export const Cards = () => (
  <div className="w-auto lg:min-w-5xl min-w-xl mx-auto lg:h-72 h-auto  rounded-2xl flex lg:flex-wrap flex-col items-center justify-center mt-8 overflow-hidden z-50">
    <MotionChain
      animations={cards.map((_, i) => ({
        mode: i % 2 === 0 ? "fadeUp" : "fadeDown",
        transition: "gentle",
        duration: 1,
        delay: 3.5,
      }))}
      elementType="div"
      config={{
        delayLogic: "linear",
        duration: 0.3,
      }}
      className={
        "bg-linear-to-b from-stone-500/10 to-stone-500/10  size-1/2 backdrop-blur-sm relative"
      }
    >
      {(cards as typeof cards).map((card) => (
        <Card
          key={card.title}
          id={card.id}
          title={card.title}
          desc={card.desc}
          ico={card.ico}
        />
      ))}
    </MotionChain>
  </div>
);
