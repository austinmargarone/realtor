import Contact from "@/components/blog/Contact";
import { getPost } from "@/sanity/sanity-utils";
import React from "react";

const page = async () => {
  const post = await getPost();
  const title = post.title;
  return (
    <main>
      <section>{title}</section>
      <section>
        <Contact />
      </section>
    </main>
  );
};

export default page;
