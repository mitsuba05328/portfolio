import { useEffect, useRef, useState } from 'react';

type UseScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useScrollAnimation<T extends HTMLElement>({
  threshold = 0.16,
  rootMargin = '0px 0px -8% 0px',
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { ref, isVisible };
}
