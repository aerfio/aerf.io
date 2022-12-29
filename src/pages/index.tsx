import * as React from "react";
import type { HeadFC } from "gatsby";
import { SEO, Layout, Link, Footer } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout
      aboutChildren={
        <>
          <section className="pt-10 flex pb-10 flex-wrap content-center justify-evenly grid-in-about">
            <section className="px-5 md:px-20">
              <p className="px-8 text-2xl md:text-4xl text-primarylight dark:text-primarydark">
                <span className="mb-8 block">
                  I'm currently working in <Link href="https://www.travelping.com/">Travelping</Link>, using <Link href="https://go.dev">Go</Link> programming language to create <Link href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/">Kubernetes Operators</Link>.
                  Apart from that my area of expertise is designing and creating REST and GraphQL APIs.
                </span>
                <span className="mb-8 block">I used to be Frontend Developer, having joy in using <Link href="https://www.typescriptlang.org/">Typescript</Link> and <Link href="https://reactjs.org/">React.js</Link> together!</span>
                <span>I'm also</span>{" "}
                <Link
                  href="https://www.credly.com/badges/1194769f-143d-404a-8d46-67c30769d33b"
                  externalIcon
                >
                  Certified Kubernetes Application Developer
                </Link>{" "}
                and{" "}
                <Link href="https://www.credly.com/badges/2953ddbe-07ed-4828-8e74-8508185d0df2" externalIcon>
                  Certified Kubernetes Administrator
                </Link>
                {"."}
              </p>
            </section>
          </section >
          <Footer />
        </>

      }
    >
      <article className="flex items-center">
        <h1 className="px-10 pb-10 text-5xl leading-[1.03] text-primarylight dark:text-primarydark md:text-6xl">
          Hello!
          <br />
          <span>I'm Mateusz Puczyński</span>,<br />
          Cloud Software Developer.
        </h1>
      </article>
      <StaticImage
        src="../images/profile.jpeg"
        alt="profile photo"
        placeholder="none"
        layout="constrained"
        objectFit="contain"
        formats={["avif", "webp", "auto"]}
        imgClassName="rounded-full p-0 border-solid border-black border-2"
        quality={95}
        className="mx-16 h-auto max-w-md md:mx-5"
        loading="eager"
      />
    </Layout >
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
