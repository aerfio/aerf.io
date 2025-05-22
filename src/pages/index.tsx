import * as React from "react";
import type { HeadFC } from "gatsby";
import { SEO, Layout, Link, Footer } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout
      aboutChildren={
        <>
          <section className="flex flex-wrap content-center justify-evenly pb-10 pt-10 grid-in-about">
            <section className="md:px-20">
              <p className="px-8 text-xl text-primarylight dark:text-primarydark md:text-4xl">
                <span className="mb-8 block">
                  I'm currently working at{" "}
                  <Link href="https://www.travelping.com/">Travelping</Link>,
                  where I use <Link href="https://go.dev">Go</Link> programming
                  language to create{" "}
                  <Link href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/">
                    Kubernetes Operators
                  </Link>
                  .{" "}
                  <span>
                    I also have experienced with{" "}
                    <Link href="https://crossplane.io">Crossplane</Link> -
                    writing Providers, Compositions and general design space.{" "}
                  </span>
                  <span>
                    Apart from that I work on REST/gRPC APIs, microservices
                    using <Link href="https://nats.io/">NATS</Link> and a bunch
                    of other things, the list of buzzwords goes on and on 😝.{" "}
                  </span>
                  <br />
                  <br />
                  <span>I used to be a</span>{" "}
                  <Link href="https://www.credly.com/badges/1194769f-143d-404a-8d46-67c30769d33b">
                    Certified Kubernetes Application Developer
                  </Link>{" "}
                  and{" "}
                  <Link href="https://www.credly.com/badges/2953ddbe-07ed-4828-8e74-8508185d0df2">
                    Certified Kubernetes Administrator
                  </Link>
                  {". "}
                </span>
              </p>
            </section>
          </section>
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
        src="../images/profile.jpg"
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
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
