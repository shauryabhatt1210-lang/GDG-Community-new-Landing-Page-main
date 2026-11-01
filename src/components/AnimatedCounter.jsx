import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ value, duration = 1600 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse target number and any prefix/suffix
  // e.g. "2,500+" -> numeric: 2500, suffix: "+"
  const numericString = value.replace(/[^0-9]/g, '');
  const targetNumber = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrameId = null;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = Math.floor(easedProgress * targetNumber);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hasAnimated, targetNumber, duration]);

  // Format with comma
  const formattedNumber = displayValue.toLocaleString();

  return (
    <span ref={elementRef} className="tabular-nums">
      {hasAnimated ? formattedNumber : '0'}
      {suffix}
    </span>
  );
};
