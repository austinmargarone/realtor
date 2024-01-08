import { BlockContent } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  slug: {
    current: string;
  };
  mainImage: string;
  categories: {
    name: string;
  };
  publishedAt: string;
  body: BlockContent[];
}

const Post = ({
  title,
  slug,
  categories,
  mainImage,
  body,
  publishedAt,
}: Props) => {
  return (
    <main>
      <Link href={`blog/${slug.current}`}>
        <div className="mx-auto mb-[1.25rem] flex rounded-[.5rem] border-[3px] border-black bg-white p-[1rem] shadow-lg dark:bg-black">
          <div className="flex w-full">
            <div className="flex w-[25%] items-center justify-center">
              <Image
                src={mainImage}
                width={50}
                height={50}
                alt={title}
                className="h-[80px] w-[80px] rounded-[0.75rem]"
              />
            </div>
            <div className="flex w-[75%] flex-col justify-start">
              <div className="mb-[.75rem]">
                <h2 className="h3 line-clamp-2 flex justify-start dark:text-white">
                  {title}
                </h2>
              </div>
              <div>
                <h2 className="h2 body dark:text-kw-red">{categories.name}</h2>
              </div>
              <div className="line-clamp-6">
                {body.map((block) => (
                  <div key={block._key}>
                    {block._type === "block" && (
                      <div className="body dark:bodydark">
                        {block.children[0].text}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="body dark:bodydark mt-[.75rem] flex justify-center">
                {publishedAt}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Post;
