import React from "react";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
      <a
        href="/about-us"
        className="sm:text-xl md:text-5xl text-center lg:text-7xl xl:text-8xl 2xl:text-9xl  text-black font-bold"
      >
        Hello world!
      </a>
    </section>
  );
}
