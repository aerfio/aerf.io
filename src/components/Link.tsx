import React, { FunctionComponent, PropsWithChildren } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

interface LinkProps {
  href: string;
  className?: string;
  externalIcon?: boolean;
}

export const Link: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  className,
  externalIcon = true,
}) => {
  return (
    <a
      className={`border-b-[3px] border-current border-solid leading-relaxed ${className}`}
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
