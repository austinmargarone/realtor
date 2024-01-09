import Contact from "@/components/blog/Contact";
import { getPost } from "@/sanity/sanity-utils";
import React from "react";

interface Props {
  params: { slug: string };
}

const page = async ({ params }: Props) => {
  const post = await getPost(params.slug);
  const title = post.title;
  console.log(post);
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
