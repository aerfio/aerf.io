import React, { PropsWithChildren, FunctionComponent } from "react";
import { Nickname } from "./Nickname";

interface Props {
  className?: string;
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  className = "",
}) => (
  <main
    className={`grid h-screen w-screen grid-cols-phone grid-rows-layout grid-areas-desktop sm:grid-cols-desktop`}
  >
    <Nickname />
    <section
      className={`mx-0 flex flex-wrap content-center justify-evenly px-10 grid-in-intro md:mx-96 ${className}`}
    >
      {children}
    </section>
  </main>
);
