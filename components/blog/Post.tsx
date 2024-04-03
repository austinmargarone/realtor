import { BlockContent } from "@/types/BlockContent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: {
    title: string;
    description: string;
  }[];
  publishedAt: string;
  body: BlockContent[];
}

const Post = ({
  title,
  description,
  slug,
  categories,
  mainImage,
  publishedAt,
}: Props) => {
  const category = categories.map((cat) => cat.title);
  return (
    <main>
      <Link href={`blog/${slug.current}`}>
        <div className="mx-auto flex h-auto w-full min-w-[250px] max-w-[800px] flex-col items-center rounded-[.5rem] border-[3px] border-kw-maingray bg-white p-[1rem] shadow-lg dark:border-kw-lessblack dark:bg-black ">
          <div className="my-[.75rem] flex w-full flex-col gap-[1.25rem]">
            <div className=" flex items-center justify-center">
              <Image
                src={mainImage.asset.url}
                width={500}
                height={500}
                alt={title}
                className="h-fit w-full rounded-[0.75rem]"
              />
            </div>
            <div className="my-auto flex w-full flex-col justify-start">
              <div className="mb-[.75rem]">
                <h2 className="blogtitleh3 line-clamp-2 flex justify-start dark:text-white">
                  {title}
                </h2>
              </div>
              <div className="mb-2">
                <h2 className="text-kw-red">{category}</h2>
              </div>
              <div className="text-black dark:text-white">{description}</div>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Post;
