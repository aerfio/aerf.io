import React from "react";
import { useTheme } from "../utils/utils";
import { Helmet } from "react-helmet";

const InputID = "theme-switch";
export const ThemeSwitch = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const { isDarkThemeEnabled, useThemeToggle } = useTheme();

  return (
    <>
      <section className="grid self-end p-4 grid-in-nickname">
        <input
          type="checkbox"
          id={InputID}
          defaultChecked={true}
          className="invisible h-0 w-0"
        />
        <label
          onClick={useThemeToggle}
          htmlFor={InputID}
          className="align-center pointer relative left-[2px] flex h-7 w-12 cursor-pointer justify-between rounded-[100px] bg-primarylight shadow-[0_1px_2px_0px_rgba(0,0,0,0.44)] outline-none transition duration-200 dark:bg-primarydark"
        >
          <span className="translate-none absolute top-[2px] left-[2px] h-6 w-6 rounded-full border-0 border-solid border-primarylight bg-white transition duration-300 ease-in content-[''] dark:left-[calc(100%-2px)] dark:translate-x-[-100%] dark:border-primarydark" />
        </label>
      </section>
      <Helmet
        meta={[
          {
            name: "theme-color",
            content: true ? "#e37fad" : "#282c35",
          },
        ]}
      />
    </>
  );
};
