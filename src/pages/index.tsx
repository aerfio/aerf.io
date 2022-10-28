import * as React from "react";
import type { HeadFC } from "gatsby";
import { Nickname } from "../components/Nickname";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <>
      <main className="grid h-screen w-screen grid-cols-phone grid-rows-layout bg-aerfiogrey grid-areas-desktop sm:grid-cols-desktop">
        <Nickname />
        <section className="p-10 grid-in-intro">
          <h1 className="text-2xl text-white">
            Congratulations
            <br />
            <span>— WIP! 🎉🎉🎉</span>
          </h1>
          <StaticImage
            src="../images/profile.jpeg"
            alt="profile photo"
            placeholder="blurred"
            layout="constrained"
            formats={["webp", "auto", "avif"]}
            imgClassName="rounded-full p-15"
            quality={100}
            className="m-3"
          ></StaticImage>
        </section>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
