import React, { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `number` when the element scrolls into view. */
const AnimatedNumber = ({ number, prefix = "", suffix = "" }) => {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out quartic
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * number);
            setDisplayed(current);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplayed(number);
            }
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <span ref={ref}>
      {prefix}
      {displayed.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactStats = ({ stats }) => {
  return (
    <section className="px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl px-5 sm:px-8 py-8 sm:py-10">
          <p className="text-center text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">
            Impact by the Numbers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-y-8 sm:gap-x-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center px-2 sm:px-4"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text">
                  <AnimatedNumber
                    number={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-snug max-w-[120px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
