import React from "react";
import { useTheme } from "../utils/utils";
import { Helmet } from "react-helmet";

const InputID = "theme-switch";
export const DarkModeToggle = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const { isDarkThemeEnabled, useThemeToggle } = useTheme();

  return (
    <>
      <section className="mr-5 self-end">
        <span>☀️</span>
        <label
          htmlFor={InputID}
          className="align-center relative flex h-7 w-12 cursor-pointer justify-between rounded-[100px] bg-primarylight shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] outline-none transition duration-200 dark:bg-primarydark"
        >
          <input
            type="checkbox"
            id={InputID}
            defaultChecked={true}
            onClick={useThemeToggle}
            // className="invisible h-0 w-0"
            // readOnly
          />
          {/* <button className="round-full absolute top-[2px] left-[2px] h-6 w-6 border-0 border-solid border-primarylight transition duration-300 content-[''] dark:left-[calc(100%-2px)] dark:border-primarydark	" /> */}
        </label>
        <span>🌒</span>
        {/* <button type="button" onClick={darkMode.disable}>
          ☀
        </button>

        <button type="button" onClick={darkMode.enable}>
          ☾
        </button> */}
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
