import React, { PropsWithChildren, FunctionComponent, ReactNode } from "react";
import { Nickname } from "./Nickname";
import { ThemeSwitch } from "./ThemeSwitch";

interface Props {
  introSectionClassName?: string;
  aboutChildren?: ReactNode;
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  introSectionClassName = "",
  aboutChildren,
}) => (
  <main
    className={`grid h-screen w-screen grid-cols-phone grid-rows-layout grid-areas-desktop sm:grid-cols-desktop`}
  >
    <div className="flex w-screen flex-col">
      <Nickname />
      {typeof window !== "undefined" && <ThemeSwitch />}
    </div>
    <section
      className={`mx-0 flex flex-wrap content-center justify-evenly grid-in-intro ${introSectionClassName}`}
    >
      {children}
    </section>
    {aboutChildren || null}
  </main>
);
