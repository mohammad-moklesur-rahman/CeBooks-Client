"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ end = 100, duration = 2000 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  const startCounting = () => {
    let start = 0;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  };

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When visible → start counting
          if (entry.isIntersecting) {
            startCounting();
          } else {
            // When leaving → reset immediately
            setCount(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}
