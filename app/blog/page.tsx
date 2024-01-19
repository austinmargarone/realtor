import Post from "@/components/blog/Post";
import { getAllPost } from "@/sanity/sanity-utils";

import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Austin Margarone",
  description:
    "Austin Margarone's blog about real estate, Rochester, NY, and more.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Homes, Houses, Property, Listing, Listings, Buy, Sell, Rent, Blog",
};

export const dynamic = "force-dynamic";
export const revalidate = 1;
type Props = {
  params: { post: string };
};
const page = async ({ params }: Props) => {
  const post = await getAllPost();

  return (
    <article className="breakpoint mx-auto my-[1.25rem] flex flex-col">
      <h1 className="h1 mx-auto mb-[1.25rem] flex dark:text-white">Blog</h1>
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
    </article>
  );
};

export default page;
