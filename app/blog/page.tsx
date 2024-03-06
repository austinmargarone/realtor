import Post from "@/components/blog/Post";
import { getAllPost } from "@/sanity/sanity-utils";

import React from "react";
import type { Metadata } from "next";
import { BlockContent } from "@/types/BlockContent";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Blog | Austin Margarone",
  description:
    "Austin Margarone's blog about real estate, Rochester, NY, and more.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Homes, Houses, Property, Listing, Listings, Buy, Sell, Rent, Blog",
  openGraph: {
    images: [
      {
        url: `${baseURL}/meta.png`,
        width: 1200,
        height: 630,
        alt: "Austin Margarone | Realtor",
      },
    ],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 1;
type Props = {
  params: { post: string };
};
const page = async ({ params }: Props) => {
  const post = await getAllPost();
  const sortedPost = post.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => {
      return (
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
      );
    }
  );
  return (
    <section className="mx-auto my-[1.25rem] flex max-w-[1800px] flex-col px-[1rem] lg:px-[10rem]">
      <h1 className="h1 mx-auto mb-[1.25rem] flex dark:text-white">Blog</h1>
      {sortedPost.map(
        (post: {
          id: React.Key | null | undefined;
          title: string;
          slug: { current: string };
          mainImage: { asset: { url: string } };
          categories: { title: string; description: string }[];
          publishedAt: string;
          body: BlockContent[];
        }) => (
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
        )
      )}
    </section>
  );
};

export default page;
