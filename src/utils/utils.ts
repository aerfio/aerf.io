import { useState, useEffect } from "react";

interface StateShape {
  x: number | null;
  y: number | null;
}

export const useMousePosition = () => {
  const [windowMousePosition, setWindowMousePosition] = useState<StateShape>({
    x: null,
    y: null,
  });

  function handleMouseMove(e: MouseEvent) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("mousemove", handleMouseMove);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return windowMousePosition;
};

export const keys = <T>(o: T) => Object.keys(o) as Array<keyof T>;

export const isTouchDevice = () => Boolean(
    (typeof window !== "undefined" && "ontouchstart" in window) ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0),
  );
