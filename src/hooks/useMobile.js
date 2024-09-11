import { MAX_MOBILE_WIDTH } from '../consts';

import { useEffect, useState } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(
    () => !window.matchMedia(`(min-width: ${MAX_MOBILE_WIDTH})`).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${MAX_MOBILE_WIDTH})`);
    const updateMedia = () => setIsMobile(!mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMedia);
    return () => mediaQuery.removeEventListener('change', updateMedia);
  }, []);

  return { isMobile };
}
