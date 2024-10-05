import Contact from "@/components/blog/Contact";
import FullPost from "@/components/blog/FullPost";
import PostBody from "@/components/blog/PostBody";
import PostLinks from "@/components/blog/PostLinks";
import { getPost } from "@/sanity/sanity-utils";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  const metadata = {
    title: post.title,
    keywords: post.keywords,
    description: post.description,
    publishedTime: post.publishedAt,
    type: "article",
    author: "Greg Miller",
    twitter: {
      cardType: "summary_large_image",
      site: "@AustinMargarone",
      handle: "AaustinMargarone",
    },
    openGraph: {
      images: [
        {
          url: post.mainImage.asset.url,
          width: 1200,
          height: 630,
          alt: "Greg Miller | Realtor",
        },
      ],
    },
  };

  return metadata;
}

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
