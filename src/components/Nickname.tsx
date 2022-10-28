import React, { useEffect, useRef, FC } from "react";

import { useMousePosition, isTouchDevice } from "../utils/utils";

// idea taken from https://decaux.capuno.cat/
const AnimatedText: FC = () => {
  const style = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    style.current = document.createElement("style");
    document.head.appendChild(style.current);
  }, []);

  const { x, y } = useMousePosition();

  const xPos = 45 + ((y || 10) / 1500) * 50;
  const yPos = 50 + ((x || 110) / 1500) * 30;

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
    className={`-z-1 after:clip-path-aerfio fixed m-0 h-5 w-[700px] font-sans text-8xl before:absolute before:w-full before:pb-5 before:pl-7 before:pr-0 before:pt-4 before:font-sans before:text-primarylight before:transition before:duration-150 before:content-['aerfio'] after:absolute after:w-full after:bg-primarylight after:pb-5 after:pl-7 after:pr-0 after:pt-4 after:font-sans after:text-secondarylight after:content-['aerfio'] dark:before:text-primarydark dark:after:bg-primarydark dark:after:text-secondarydark`}
  />
);

export const Nickname: FC = () => {
  return isTouchDevice() ? <RawText /> : <AnimatedText />;
};
