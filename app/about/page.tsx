import Contact from "@/components/about/Contact";
import Content from "@/components/about/Content";
import React from "react";

const page = () => {
  return (
    <article className="bg-white dark:bg-kw-black">
      <section className="mx-auto flex flex-col">
        <div className="breakpoint mx-auto">
          <h1 className="h1 my-[2.5rem] flex justify-start dark:text-white">
            About Me
          </h1>
        </div>
        <section className="bg-kw-ltgray dark:bg-kw-darkgray">
          <div className="breakpoint mx-auto">
            <Content />
          </div>
        </section>
        <Contact />
      </section>
    </article>
  );
};

export default page;
