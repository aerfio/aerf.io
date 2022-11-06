import React, { useEffect, useRef, FC } from "react";
import { domainToASCII } from "url";

import { useMousePosition, isTouchDevice } from "../utils/utils";

const AnimatedText: FC = () => {
  const style = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    style.current = document.createElement("style");
    style.current.id = "clip-path-style";
    document.head.appendChild(style.current);
    return () => {
      if (style.current) {
        document.head.removeChild(style.current);
      }
    };
  }, []);

  const { x, y } = useMousePosition();

  const xPos = y ? 45 + (y / 1000) * 30 : 300;
  const yPos = x?  45 + (x / 1600) * 30 : 500;

  if (style.current) {
    const polygon = `polygon(0 0, 0 ${xPos}%, ${yPos}% 0px)`;

    style.current.textContent = `
    #${TEXT_ID}:after {
      clip-path: ${polygon};
      -webkit-clip-path: ${polygon};`;
  }

  return <RawText />;
};

const TEXT_ID = "nickname-text";

const RawText: React.FunctionComponent = () => (
  <p
    id={TEXT_ID}
    className={`-z-999 after:clip-path-aerfio absolute m-0 font-sans text-8xl before:absolute before:w-full before:pb-5 before:pl-7 before:pr-0 before:pt-4 before:font-sans before:text-primarylight before:transition before:duration-150 before:content-['aerfio'] after:absolute after:w-full after:bg-primarylight after:pb-5 after:pl-7 after:pr-0 after:pt-4 after:font-sans after:text-secondarylight after:content-['aerfio'] dark:before:text-primarydark dark:after:bg-primarydark dark:after:text-secondarydark
    w-screen
    md:after:h-[220px]
    md:after:w-[500px]
    md:w-unset
    `}
  />
);

export const Nickname: FC = () => {
  return isTouchDevice() ? <RawText /> : <AnimatedText />;
};
