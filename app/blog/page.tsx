import Post from "@/components/blog/Post";
import { getPost } from "@/sanity/sanity-utils";

import console from "console";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 1;
type Props = {
  params: { post: string };
};
const page = async ({ params }: Props) => {
  const post = await getPost();
  console.log("author", post);

  return (
    <main className="breakpoint mx-auto flex flex-col">
      <h1 className="h1 mx-auto flex">Blog</h1>
      {post.map((post) => (
        <div key={post.id}>
          <Post
            title={post.title}
            slug={post.slug}
            mainImage={post.mainImage}
            categories={post.categories}
            publishedAt={post.publishedAt}
            body={post.body}
          />
        </div>
      ))}
    </main>
  );
};

export default page;
