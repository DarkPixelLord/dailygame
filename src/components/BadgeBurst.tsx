"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BURST_COUNT = 36;

type BurstParticle = {
  angle: number;
  distance: number;
  size: number;
  duration: number;
  delayJitter: number;
  upwardDrift: number;
};

// Randomized per-particle flight paths for the badge-reveal burst — varied
// angle/distance/speed/size so the burst reads as chaotic sparks rather than
// a uniform, synchronized ring, with an added upward drift so the sparks
// trend skyward like a firework instead of spreading evenly in all directions.
function buildBurstParticles(count: number): BurstParticle[] {
  return Array.from({ length: count }, () => ({
    angle: Math.random() * 2 * Math.PI,
    distance: 55 + Math.random() * 85,
    size: 2.5 + Math.random() * 4,
    duration: 0.35 + Math.random() * 0.3,
    delayJitter: Math.random() * 0.2,
    upwardDrift: 20 + Math.random() * 35,
  }));
}

// Amber flash plus firework sparks bursting from the center of a `relative`
// parent, `delay` seconds after mount: the final rank badge and a newly
// reached journey milestone both reveal with it. Particles are rolled once
// per mount, so the burst doesn't reshuffle mid-animation on re-renders.
export default function BadgeBurst({ delay }: { delay: number }) {
  const [particles] = useState(() => buildBurstParticles(BURST_COUNT));

  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(251,191,36,0) 70%)",
        }}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 2.4, opacity: [0, 1, 0] }}
        transition={{ delay, duration: 1, ease: "easeOut", times: [0, 0.15, 1] }}
      />
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full bg-amber-300"
          style={{ width: p.size, height: p.size }}
          initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 1 }}
          animate={{
            x: `calc(-50% + ${Math.cos(p.angle) * p.distance}px)`,
            y: `calc(-50% + ${Math.sin(p.angle) * p.distance - p.upwardDrift}px)`,
            opacity: [0, 1, 0],
            scale: 0,
          }}
          transition={{
            delay: delay + p.delayJitter,
            duration: p.duration,
            ease: "easeOut",
            times: [0, 0.2, 1],
          }}
        />
      ))}
    </>
  );
}
