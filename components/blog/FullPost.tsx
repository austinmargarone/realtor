import { BlockContent } from "@/types/BlockContent";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
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

const FullPost = ({
  title,
  mainImage,
  categories,
  publishedAt,
  body,
}: Props) => {
  const catagory = categories.map((cat) => cat.title);
  return (
    <div className="mx-auto flex flex-col">
      <div className="my-[1.25rem] flex flex-col gap-[.625rem]">
        <h1 className="h4 sm:h3 flex justify-start">{title}</h1>
        <p className="text-kw-red">{catagory}</p>
      </div>
      <div className="h-full w-full">
        <Image
          src={mainImage.asset.url}
          width={500}
          height={500}
          alt={title}
          className="2xl:w-[800px]] xl:w-[700px flex] mx-auto h-fit w-[325px] rounded-[0.75rem] xs:w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
        />
      </div>
      <div className="mt-[1.25rem] line-clamp-6 md:line-clamp-[8] lg:line-clamp-[10]">
        {body.map((block) => (
          <div key={block._key}>
            {block._type === "block" && (
              <div className="body dark:bodydark">{block.children[0].text}</div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[.625rem]">{publishedAt}</p>
    </div>
  );
};

export default FullPost;
