import React from "react";
import { useTheme } from "../utils/utils";
import { Helmet } from "react-helmet";
import { FiSun, FiMoon } from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";
const InputID = "theme-switch";
export const ThemeSwitch = () => {
  const { isDarkThemeEnabled, useThemeToggle } = useTheme();
  const iconProps: IconBaseProps = {
    style: {
      position: "relative",
      top: "4px",
      left: "4px",
    },
  };

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
          className="align-center pointer before: relative left-[2px] flex h-7 w-12 cursor-pointer justify-between rounded-[100px] bg-primarylight shadow-[0_1px_2px_0px_rgba(0,0,0,0.44)] outline-none transition duration-200 dark:bg-primarydark"
        >
          <span className="translate-none absolute left-[2px] top-[2px] h-6 w-6 rounded-full border-0 border-solid border-primarylight bg-white transition-all duration-300 ease-in content-[''] dark:left-[calc(100%-2px)] dark:translate-x-[-100%] dark:border-primarydark">
            {isDarkThemeEnabled ? (
              <FiSun {...iconProps} />
            ) : (
              <FiMoon {...iconProps} />
            )}
          </span>
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
