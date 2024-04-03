import Post from "@/components/blog/Post";
import { getAllPost } from "@/sanity/sanity-utils";
import { BlogPost } from "@/types/BlogPost";

import type { Metadata } from "next";
import React from "react";

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
  const posts = await getAllPost();

  // Sort posts by published date
  const sortedPosts = posts.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => {
      return (
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
      );
    }
  );

  const numberOfColumns = 2;

  // Initialize an array to hold posts for each column
  const columns: React.JSX.Element[][] = Array.from(
    { length: numberOfColumns },
    () => []
  );

  // Distribute posts into columns
  sortedPosts.forEach((post: BlogPost, index: number) => {
    const columnIndex = index % numberOfColumns;
    columns[columnIndex].push(
      <div key={post.id}>
        <Post
          title={post.title}
          mainImage={post.mainImage}
          categories={post.categories}
          publishedAt={post.publishedAt}
          body={post.body}
          description={post.description}
          slug={post.slug}
        />
      </div>
    );
  });

  return (
    <section className="mx-auto my-[1.25rem] flex max-w-[1600px] flex-col px-[1rem] lg:px-[10rem]">
      <h1 className="h1 mx-auto mb-[1.25rem] flex dark:text-white">Blog</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-5">
            {column}
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
