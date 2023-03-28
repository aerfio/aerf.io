import * as React from "react";
import type { HeadFC } from "gatsby";
import { SEO } from "../components";

const IndexPage = () => {
    return (
        <>
            <title>aerf.io/podenvs</title>
            Nothing to see here;{" "}
            <a href="https://pkg.go.dev/aerf.io/podenvs">move along</a>.
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <SEO
        meta={[
            {
                name: "go-import",
                content: "aerf.io git https://github.com/aerfio/pod-envs",
            },
            {
                name: "go-source",
                content:
                    "aerf.io/podenvs _ https://github.com/aerfio/pod-envs/tree/main{/dir} https://github.com/aerfio/pod-envs/blob/main{/dir}/{file}#L{line}",
            },
            {
                httpEquiv: "refresh",
                content: "0; url=https://pkg.go.dev/aerf.io/podenvs",
            },
        ]}
    />
);
