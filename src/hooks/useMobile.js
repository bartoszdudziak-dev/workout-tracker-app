import { useEffect, useState } from 'react';

const moibleWidth = import.meta.env.VITE_MAX_MOBILE_WIDTH;

export function useMobile() {
  const [isMobile, setIsMobile] = useState(
    () => !window.matchMedia(`(min-width: ${moibleWidth})`).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${moibleWidth})`);
    const updateMedia = () => setIsMobile(!mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMedia);
    return () => mediaQuery.removeEventListener('change', updateMedia);
  }, []);

  return { isMobile };
}
