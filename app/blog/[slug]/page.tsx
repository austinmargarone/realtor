import Contact from "@/components/blog/Contact";
import FullPost from "@/components/blog/FullPost";
import { getPost } from "@/sanity/sanity-utils";
import React from "react";

interface Props {
  params: { slug: string };
}

const page = async ({ params }: Props) => {
  const post = await getPost(params.slug);
  return (
    <main className="breakpoint mx-auto">
      <section>
        <FullPost
          title={post.title}
          mainImage={post.mainImage}
          categories={post.categories}
          publishedAt={post.publishedAt}
          body={post.body}
        />
      </section>
      <section className="mt-[2.5rem]">
        <Contact />
      </section>
    </main>
  );
};

export default page;
