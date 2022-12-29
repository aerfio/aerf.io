import React, { FunctionComponent, PropsWithChildren } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

interface LinkProps {
  href: string;
  className?: string;
  externalIcon?: boolean;
  underline?: boolean;
}

export const Link: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  className,
  externalIcon = false,
  underline = true,
}) => {
  return (
    <a
      className={`${
        underline && "border-b-[3px] border-solid border-current"
      }  leading-relaxed ${className}`}
      href={href}
      rel="noopener noreferrer"
    >
      {children}
      {externalIcon && (
        <RiExternalLinkLine className="relative bottom-1 inline-block underline" />
      )}
    </a>
  );
};
