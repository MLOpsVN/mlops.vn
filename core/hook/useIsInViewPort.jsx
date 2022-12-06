import { useEffect, useMemo, useRef, useState } from 'react';

export const useIsInViewPort = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      return setIsIntersecting(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    observer.current?.observe(ref.current);
    return () => {
      observer.current?.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
