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
}

const FullPost = ({ title, mainImage, categories }: Props) => {
  const catagory = categories.map((cat) => cat.title);
  return (
    <div className="breakpoint mx-auto flex flex-col">
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
          className="mx-auto flex h-fit w-[325px] rounded-[0.75rem] xs:w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[750px]"
        />
      </div>
    </div>
  );
};

export default FullPost;
