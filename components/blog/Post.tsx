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
      <div className="mx-auto flex">
        <Link href={`blog/${slug.current}`}>
          <div className="flex">
            <div className="flex items-center justify-center">
              <Image
                src={mainImage}
                width={50}
                height={50}
                alt={title}
                className="h-[80px] w-[80px] rounded-[0.75rem]"
              />
            </div>
            <div className="flex flex-col justify-start">
              <div>
                <h2 className="h2 body dark:bodydark">{title}</h2>
              </div>
              <div>
                <h2 className="h2 body dark:text-kw-red">{categories.name}</h2>
              </div>
              <div>
                {body.map((block) => (
                  <div key={block._key}>
                    {block._type === "block" && (
                      <div className="body dark:bodydark">
                        {block.children[0].text}
                      </div>
                    )}
                  </div>
                ))}
                <div className="body dark:bodydark">{publishedAt}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Post;
