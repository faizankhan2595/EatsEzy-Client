import { useEffect, useState, useRef, useLayoutEffect } from "react";

export function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}

export function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
}
