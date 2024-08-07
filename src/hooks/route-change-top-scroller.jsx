import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (offsetRatio = 0.2) => {
  const location = useLocation();
  const route = location.pathname.replace("/", "")

  useEffect(() => {
    const scrollOffset = window.innerHeight * offsetRatio;

    window.scrollTo({
      top: scrollOffset,
      left: 0,
      behavior: 'smooth',
    });

    document.title = `Design Syndicate | ${route}`
  }, [location, offsetRatio]);
};
