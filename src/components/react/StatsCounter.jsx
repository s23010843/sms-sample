import { useState, useEffect, useRef } from 'react';

function AnimatedNumber({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 500, suffix: '+', label: 'Institutions Using SMS', icon: '🏫' },
    { value: 50000, suffix: '+', label: 'Active Students', icon: '👨‍🎓' },
    { value: 99.9, suffix: '%', label: 'Uptime Guarantee', icon: '⚡' },
    { value: 24, suffix: '/7', label: 'Premium Support', icon: '🛟' },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
