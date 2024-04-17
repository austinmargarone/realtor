import Link from "next/link";
import React from "react";

interface PostLinksProps {
  links?: { text: string; url: string }[];
}

const PostLinks: React.FC<PostLinksProps> = ({ links }) => {
  return (
    <div className="lg:breakpoint mx-auto px-[1.5rem]">
      <h2 className="h3 flex justify-start dark:text-white">Links</h2>
      {links ? (
        <ul className="list-disc pl-7 pt-[.25rem] dark:text-white">
          {links.map((linkItem, index) => (
            <li key={index}>
              <Link href={linkItem.url} passHref target="_blank">
                <p className="cursor-pointer text-kw-red underline">
                  {linkItem.text}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No links available.</p>
      )}
    </div>
  );
};

export default PostLinks;
