import * as React from "react";
import type { HeadFC } from "gatsby";
import { Nickname, DarkModeToggle, SEO, Layout } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="pb-5 text-6xl text-primarylight dark:text-primarydark">
        Hello!
        <br />
        <span>I'm Mateusz Puczyński</span>,<br />
        Cloud Software Developer 🎉
      </h1>
      <StaticImage
        src="../images/profile.jpeg"
        alt="profile photo"
        placeholder="blurred"
        layout="constrained"
        objectFit="contain"
        formats={["avif", "webp"]}
        imgClassName="!rounded-full !p-0"
        quality={100}
        className="m-3 h-auto w-[500px]"
        loading="eager"
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
