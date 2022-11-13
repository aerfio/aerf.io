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
      className={`decoration:primarylight border-b-1 boder-secondarylight border-solid underline dark:decoration-primarydark ${className}`}
      href={href}
      rel="noopener noreferrer"
    >
      {children}
      {externalIcon && (
        <RiExternalLinkLine className="decoration:primarylight relative bottom-1 inline-block underline dark:decoration-primarydark" />
      )}
    </a>
  );
};
