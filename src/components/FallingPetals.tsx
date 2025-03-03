
import { useEffect, useRef, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  type: number;
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const petalCount = 15;
  const timerRef = useRef<number | null>(null);

  const createPetal = (id: number): Petal => {
    return {
      id,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      type: Math.floor(Math.random() * 3) + 1
    };
  };

  useEffect(() => {
    const initialPetals = Array.from({ length: petalCount }, (_, i) => createPetal(i));
    setPetals(initialPetals);

    // Generate new petals periodically
    timerRef.current = window.setInterval(() => {
      setPetals(prevPetals => {
        // Remove a random petal and add a new one
        const updatedPetals = [...prevPetals];
        const indexToRemove = Math.floor(Math.random() * prevPetals.length);
        updatedPetals.splice(indexToRemove, 1, createPetal(Date.now()));
        return updatedPetals;
      });
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {petals.map(petal => (
        <div
          key={petal.id}
          className={`falling-petal petal-${petal.type}`}
          style={{
            left: `${petal.left}%`,
            animation: `falling ${petal.duration}s linear ${petal.delay}s forwards`
          }}
        />
      ))}
    </div>
  );
}
