import { BlockContent } from "@/types/BlockContent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
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
  slug,
  categories,
  mainImage,
  body,
  publishedAt,
}: Props) => {
  const category = categories.map((cat) => cat.title);
  return (
    <main>
      <Link href={`blog/${slug.current}`}>
        <div className="mx-auto mb-[1.25rem] flex h-[36rem] min-h-[12.5rem] rounded-[.5rem] border-[3px] border-kw-maingray bg-white p-[1rem] shadow-lg dark:border-kw-lessblack dark:bg-black md:h-[38rem] lg:h-[36rem] lg:max-h-[25rem]">
          <div className="my-[.75rem] flex w-full gap-[1.25rem] lg:my-[1.25rem]">
            <div className="hidden items-center justify-center lg:flex lg:w-[25%]">
              <Image
                src={mainImage.asset.url}
                width={500}
                height={500}
                alt={title}
                className="h-fit w-full rounded-[0.75rem]"
              />
            </div>
            <div className="my-auto flex flex-col justify-start lg:w-[75%]">
              <div className="mb-[.75rem]">
                <h2 className="h3 line-clamp-2 flex justify-start dark:text-white">
                  {title}
                </h2>
              </div>
              <div className="mb-2">
                <h2 className="text-kw-red">{category}</h2>
              </div>
              <div className="line-clamp-6 w-[250px] xs:w-fit md:line-clamp-[8]">
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
              <div className="mx-auto my-[.75rem] flex items-center justify-center lg:hidden">
                <Image
                  src={mainImage.asset.url}
                  width={500}
                  height={500}
                  alt={title}
                  className="h-[15rem] w-full rounded-[0.75rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Post;
