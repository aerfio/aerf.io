import * as React from "react";
import type { HeadFC } from "gatsby";
import { Nickname } from "../components/Nickname";

const IndexPage = () => {
  return (
    <>
      <main className="grid-columns-layout grid h-screen w-screen grid-rows-layout bg-aerfiogrey grid-areas-layout">
        <Nickname />
        <h1 className="text-lg text-white grid-in-date">
          Congratulations
          <br />
          <span>— you just made a Gatsby site! 🎉🎉🎉</span>
        </h1>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
