import { BlockContent } from "@/types/BlockContent";
import React from "react";

interface Props {
  publishedAt: string;
  body: BlockContent[];
}

const PostBody = ({ publishedAt, body }: Props) => {
  return (
    <div className="breakpoint mx-auto mt-[1.25rem] py-[2.5rem]">
      <div className="line-clamp-6 md:line-clamp-[8] lg:line-clamp-[10]">
        {body.map((block) => (
          <div key={block._key}>
            {block._type === "block" && (
              <div className="body dark:bodydark">{block.children[0].text}</div>
            )}
          </div>
        ))}
      </div>
      <p className="body dark:bodydark mt-[.625rem]">{publishedAt}</p>
    </div>
  );
};

export default PostBody;
