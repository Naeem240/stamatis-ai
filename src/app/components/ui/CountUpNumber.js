"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUpNumber = ({
  end = 0,
  start = 0,
  duration = 2.5,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;
      const durationMs = duration * 1000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const current = startValue + (endValue - startValue) * easeOut;
        setCurrentValue(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, start, end, duration]);

  const formattedValue = currentValue.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};

export default CountUpNumber;
