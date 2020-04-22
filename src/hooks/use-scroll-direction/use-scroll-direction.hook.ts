import React from 'react';

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down',
}

interface UseScrollDirectionProps {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
}

export const useScrollDirection = ({
  initialDirection = ScrollDirection.DOWN,
  thresholdPixels,
}: UseScrollDirectionProps) => {
  const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(
    initialDirection
  );

  React.useEffect(() => {
    const threshold = thresholdPixels ?? 0;

    let lastScrollPositon = 0;
    let ticking = false;

    const updateScrollDirection = () => {
      if (Math.abs(window.pageYOffset - lastScrollPositon) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(
        window.pageYOffset > lastScrollPositon
          ? ScrollDirection.DOWN
          : ScrollDirection.UP
      );

      lastScrollPositon = window.pageYOffset > 0 ? window.pageYOffset : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialDirection, thresholdPixels]);

  return scrollDirection;
};
