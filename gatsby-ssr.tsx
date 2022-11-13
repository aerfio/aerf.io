import type { GatsbySSR } from "gatsby";

import * as React from "react";
import { ErrorBoundary } from "./src/components/ErrorBoundary";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <ErrorBoundary>{element}</ErrorBoundary>;
};
