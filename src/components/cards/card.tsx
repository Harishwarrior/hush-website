import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type CardProps = {
  id: number;
  title: string;
  desc: string;
  ico: string;
};

export const Card: FC<CardProps> = ({ id, desc, ico, title }) => (
  <Link
    key={title}
    target="_blank"
    href={`https://motionprovider.dev/${title
      .toLowerCase()
      .split(" ")
      .join("-")}`}
  >
    <button
      type="button"
      className={`absolute size-full flex flex-col items-start text-start gap-2 justify-center px-8 transition-all duration-200 ease-in-out cursor-pointer overflow-hidden group
        ${id === 1 && "border-r border-zinc-500/20"}
        ${id === 2 && "border-t border-r border-zinc-500/20"}
        ${id === 3 && "border-b border-zinc-500/20"}`}
    >
      <div className="absolute inset-0 bg-black/80 z-0 backdrop-blur-xs group-hover:opacity-50 transition-opacity duration-500 ease-in-out" />
      <div className="flex flex-row gap-2">
        <Image
          alt={ico.split("/").join(" ")}
          src={ico}
          className="invert"
          height={20}
          width={20}
        />
        <h3 className="tracking-tighter text-xl z-50">{title}</h3>
      </div>
      <p className="text-zinc-400 group text-xs z-50 tracking-tight">{desc}</p>
    </button>
  </Link>
);
