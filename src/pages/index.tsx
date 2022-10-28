import * as React from "react";
import type { HeadFC } from "gatsby";
import { Nickname, DarkModeToggle } from "../components";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <>
      <main className="grid h-screen w-screen grid-cols-phone grid-rows-layout grid-areas-desktop sm:grid-cols-desktop">
        <Nickname />
        <section className="mx-0 flex flex-wrap content-center justify-evenly px-10 grid-in-intro md:mx-96">
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
        </section>
        <section className="mx-0 flex flex-wrap content-center justify-evenly px-10 grid-in-about md:mx-96">
          <DarkModeToggle />
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
        </section>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
