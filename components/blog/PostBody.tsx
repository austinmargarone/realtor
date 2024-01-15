import React from "react";
import { BlockContent } from "@/types/BlockContent";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

interface Props {
  publishedAt: string;
  body: (BlockContent & { asset?: any })[];
}

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "defaultProjectId";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "defaultDataset";

const PostBody = ({ publishedAt, body }: Props) => {
  const builder = imageUrlBuilder({
    projectId,
    dataset,
  });

  return (
    <div className="breakpoint mx-auto mt-[1.25rem] py-[2.5rem]">
      <div>
        {body.map((bodyItem) => (
          <div key={bodyItem._key}>
            {bodyItem._type === "block" && (
              <div className={getBodyStyle(bodyItem.style)}>
                {bodyItem.children.map((span) => (
                  <span key={span._key} className={getSpanStyle(span.marks)}>
                    {span.text}
                  </span>
                ))}
              </div>
            )}
            {bodyItem._type === "image" && bodyItem.asset && (
              <Image
                alt={(bodyItem as any).alt}
                width={250}
                height={250}
                src={builder.image(bodyItem.asset._ref).url()}
                className="mx-auto mb-[1.25rem] h-fit w-[350px]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getBodyStyle = (style: string) => {
  // Map your Sanity styles to HTML elements or React components
  switch (style) {
    case "h1":
      return "h1 dark:text-white";
    case "h2":
      return "h2 dark:text-white";
    case "h3":
      return "h3 dark:text-white";
    case "h4":
      return "h4 dark:text-white";
    default:
      return "body dark:bodydark"; // Default style
  }
};

const getSpanStyle = (marks: string[]) => {
  // Map your Sanity marks to HTML elements or React components
  let style = "normal";
  if (marks.includes("strong")) {
    style = "bold";
  }
  if (marks.includes("em")) {
    style = "italic";
  }

  return style;
};

export default PostBody;
