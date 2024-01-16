import Contact from "@/components/blog/Contact";
import FullPost from "@/components/blog/FullPost";
import PostBody from "@/components/blog/PostBody";
import PostLinks from "@/components/blog/PostLinks";
import { getPost } from "@/sanity/sanity-utils";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 1;

interface Props {
  params: { slug: string };
}

const page = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  return (
    <main>
      <section>
        <FullPost
          title={post.title}
          mainImage={post.mainImage}
          categories={post.categories}
        />
      </section>
      <section className="bg-white dark:bg-black">
        <PostBody publishedAt={post.publishedAt} body={post.body} />
      </section>
      {post.links && post.links.length > 0 && (
        <section className="bg-white pb-[1.25rem] dark:bg-black">
          <PostLinks links={post.links} />
        </section>
      )}
      <section className="mt-[2.5rem]">
        <Contact />
      </section>
    </main>
  );
};

export default page;
