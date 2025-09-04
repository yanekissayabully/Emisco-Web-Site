"use client";
import { useEffect, useState, useRef } from "react";
import { useI18n } from "@/providers/i18n-providers"

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const stepTime = Math.abs(Math.floor(duration / target));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function StatsSection() {
  const { t } = useI18n()
  const projects = useCounter(500);
  const co2 = useCounter(95);
  const countries = useCounter(50);
  const support = useCounter(24);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div ref={projects.ref} className="space-y-2 animate-in fade-in-50 duration-1000 delay-200">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">
              {projects.count}+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t("stats1")}
            </div>
          </div>

          <div ref={co2.ref} className="space-y-2 animate-in fade-in-50 duration-1000 delay-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">
              {co2.count}%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t("stats2")}
            </div>
          </div>

          <div ref={countries.ref} className="space-y-2 animate-in fade-in-50 duration-1000 delay-400">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">
              {countries.count}+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t("stats3")}
            </div>
          </div>

          <div ref={support.ref} className="space-y-2 animate-in fade-in-50 duration-1000 delay-500">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">
              {support.count}/7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t("stats4")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
