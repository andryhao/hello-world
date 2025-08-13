"use client";

import React from "react";
import Particles from "./love";

export default function Hero() {
  return (
    <section
      style={{ width: "100%", position: "relative" }}
      className="bg-black h-screen items-center justify-center flex flex-col"
    >
      <div className="absolute items-center justify-center flex flex-col">
        <h1 className="text-3xl md:text-6xl text-center">
          I love you Ustina
          <br />
          Goodnight
        </h1>
        <p className="text-5xl md:text-9xl">❤️</p>
      </div>
      <Particles
        particleColors={["#09de4cff", "#009dffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </section>
  );
}
