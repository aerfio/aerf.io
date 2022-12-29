import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "./Link";

export const Footer = () => {
  return (
    <section className="py-10 text-primarylight  grid-in-footer dark:text-primarydark">
      <div className="flex content-center justify-evenly pb-14 text-5xl">
        <Link href="https://github.com/aerfio" underline={false}>
          <FiGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/mpuczynski/" underline={false}>
          <FiLinkedin />
        </Link>
      </div>
      <div className="flex content-center justify-center">
        <p className="text-xl">© 2022 Mateusz Puczyński</p>
      </div>
    </section>
  );
};
