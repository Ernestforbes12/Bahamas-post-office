import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    { icon: "📦", value: 10000, suffix: "+", label: "Packages Delivered" },
    { icon: "🏝️", value: 30, suffix: "+", label: "Islands Served" },
    { icon: "✉️", value: 500000, suffix: "+", label: "Letters Processed" },
    { icon: "🏪", value: 20, suffix: "+", label: "Branch Locations" },
  ];

  return (
    <section className="bg-teal py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-white">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-4xl font-bold mb-1">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;