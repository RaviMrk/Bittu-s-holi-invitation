import { useEffect, useState } from "react";

const HOLI_COLORS = [
  "#ff1493", "#e91e90", "#ff3366", "#ff6b35",
  "#fbbf24", "#10b981", "#14b8a6", "#3b82f6",
  "#8b5cf6", "#7c3aed", "#d4a017",
];

const PARTICLE_COUNT = 45;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Sparkles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${randomBetween(0, 100)}%`,
      top: `${randomBetween(0, 100)}%`,
      size: randomBetween(4, 12),
      delay: randomBetween(0, 8),
      duration: randomBetween(3, 7),
      color: HOLI_COLORS[Math.floor(Math.random() * HOLI_COLORS.length)],
      blur: randomBetween(0, 3),
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            filter: `blur(${p.blur}px)`,
            opacity: 0.35,
            animation: `splash-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
