import { useState, useEffect, useCallback } from "react";

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

export const isTouchDevice = () =>
  Boolean(
    (typeof window !== "undefined" && "ontouchstart" in window) ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
  );

const THEME_CONSTANTS = {
  classNameDark: "dark",
  storageKey: "darkMode",
};

export const useTheme = () => {
  const isDarkTheme = () =>
    typeof window !== "undefined" &&
    localStorage.getItem(THEME_CONSTANTS.storageKey) === String(true);

  const [isDarkThemeState, setDarkTheme] = useState<boolean>(isDarkTheme());

  const useThemeToggle = useCallback(() => {
    if (isDarkTheme()) {
      document.body.classList.remove(THEME_CONSTANTS.classNameDark);
    } else {
      document.body.classList.add(THEME_CONSTANTS.classNameDark);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(
        THEME_CONSTANTS.storageKey,
        String(!isDarkThemeState)
      );
    }

    setDarkTheme((arg) => !arg);
  }, [isDarkThemeState]);

  return {
    isDarkThemeEnabled: isDarkThemeState,
    useThemeToggle,
  };
};
