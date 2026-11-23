"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
}

export default function FadeInUp({
  children,
  className = "",
  delay = 0,
  duration = 700,
}: FadeInUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const currentRef = domRef.current;
    if (currentRef) {
      // Check if already in viewport on mount (e.g. above the fold on initial load)
      const rect = currentRef.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        requestAnimationFrame(() => setIsVisible(true));
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold: 0.01, // Trigger as soon as 1% is visible
        rootMargin: "50px 0px", // Trigger slightly before entering viewport
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Safety fallback: guarantee visibility after 600ms so content is never stuck blank
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(safetyTimer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
