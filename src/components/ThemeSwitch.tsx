import React from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

const InputID = "theme-switch";
export const DarkModeToggle = () => {
  const darkMode = useDarkMode(true, {
    classNameDark: "dark",
    classNameLight: "light",
  });

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <input
        type="checkbox"
        id={InputID}
        checked={darkMode.value}
        onClick={darkMode.toggle}
        readOnly
      ></input>
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};
