import React from "react";
import { BlockContent } from "@/types/BlockContent";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

interface Props {
  publishedAt: string;
  body: (BlockContent & { asset?: any })[]; // Update the type declaration of `body` to include the `asset` property
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
              <div className="body dark:bodydark">
                {(bodyItem as any).children[0].text}
              </div>
            )}
            {bodyItem._type === "image" && bodyItem.asset && (
              <Image
                alt={(bodyItem as any).alt}
                width={250}
                height={250}
                src={builder.image(bodyItem.asset._ref).url()}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostBody;
