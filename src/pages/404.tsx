import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { SEO, Layout } from "../components";

const NotFoundPage = () => {
  return (
    <Layout>
      <p className="whitespace-normal text-3xl text-primarylight dark:text-primarydark">
        Sorry 😔, we couldn't find what you were looking for.
      </p>
      <p className="pt-10">
        <Link
          className="text-4xl text-primarylight underline dark:text-primarydark"
          to="/"
        >
          Go home
        </Link>
        .
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="Not Found!" />;
