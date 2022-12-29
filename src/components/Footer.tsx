import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from './Link'

export const Footer = () => {
    return (
        <div className="text-primarylight dark:text-primarydark text-5xl flex content-center justify-evenly grid-in-footer pb-10">
            <Link href="https://github.com/aerfio" underline={false} >
                <FiGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/mpuczynski/" underline={false}  >
                <FiLinkedin />
            </Link>
        </div>
    )
};
