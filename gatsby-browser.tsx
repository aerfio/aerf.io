import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { ErrorBoundary } from "./src/components/ErrorBoundary";
import "./src/styles/global.css";

export const wrapPageElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <ErrorBoundary>{element}</ErrorBoundary>;
};
