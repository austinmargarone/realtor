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

  const components = {
    listItem: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),
    },
  };

  return (
    <div className="lg:breakpoint mx-auto mt-[1.25rem] px-[1.5rem] py-[2.5rem]">
      <div>
        {body.map((bodyItem) => (
          <div key={bodyItem._key}>
            {bodyItem._type === "block" && (
              <div className={getBodyStyle(bodyItem.style, bodyItem.listItem)}>
                {bodyItem.listItem === "bullet" ? (
                  <ul className="list-disc pl-8">
                    {bodyItem.children.map((span) => (
                      <components.listItem.bullet key={span._key}>
                        <span className={getSpanStyle(span.marks)}>
                          {span.text}
                        </span>
                      </components.listItem.bullet>
                    ))}
                  </ul>
                ) : (
                  // Handle other list types if needed
                  <div>
                    {bodyItem.children.map((span) => (
                      <span
                        key={span._key}
                        className={getSpanStyle(span.marks)}
                      >
                        {span.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            {bodyItem._type === "image" && bodyItem.asset && (
              <Image
                alt={(bodyItem as any).alt}
                width={500}
                height={500}
                src={builder.image(bodyItem.asset._ref).url()}
                className="mx-auto my-[1.25rem] flex h-fit w-[325px] rounded-[0.75rem] xs:w-[350px] sm:mx-0 sm:w-[400px] md:w-[500px]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getBodyStyle = (style: string, list: string) => {
  // Map your Sanity styles and list items to HTML elements or React components
  switch (style) {
    case "h1":
      return "blogh3 md:blogh1 dark:text-white";
    case "h2":
      return "blogh3 md:blogh2 dark:text-white";
    case "h3":
      return "blogh4 md:blogh3 dark:text-white";
    case "h4":
      return "blogh4 dark:text-white";
    case "blockquote":
      return "blogquote dark:darkblogquote";
    case "normal":
      return "blognormal dark:darkblognormal";
    case "small":
      return "blogsmall dark:darkblogsmall flex justify-center";
    default:
      return "body dark:darkbody";
  }
};

const getSpanStyle = (marks: string[]) => {
  // Map your Sanity marks to HTML elements or React components
  let style = "normal";
  if (marks.includes("strong")) {
    style = "blogbold dark:darkblogbold";
  }
  if (marks.includes("em")) {
    style = "blogitalic dark:darkblogitalic";
  }
  if (marks.includes("underline")) {
    style = "blogunderline dark:darkblogunderline";
  }
  if (marks.includes("bullet")) {
    style = "blogunderline dark:darkblogunderline";
  }

  return style;
};

export default PostBody;
