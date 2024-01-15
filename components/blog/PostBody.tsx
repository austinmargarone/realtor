import React from "react";
import { BlockContent } from "@/types/BlockContent";
import Image from "next/image";

interface Props {
  publishedAt: string;
  body: BlockContent[];
}

const PostBody = ({ publishedAt, body }: Props) => {
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
            {bodyItem._type === "image" && (
              <Image
                src={`/${(bodyItem as any).asset._ref}`}
                alt={(bodyItem as any).alt}
                width={250}
                height={250}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostBody;
