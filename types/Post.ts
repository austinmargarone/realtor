import { Key } from "react";
import { BlockContent } from "./BlockContent";

export type Post = {
  id: Key | null | undefined;
  map(
    arg0: (post: any) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>;
  title: string;
  slug: string;
  mainImage: {
    asset: any;
    alt: string;
  };
  categories: {
    title: string;
    description: string;
  }[];
  publishedAt: string;
  body: BlockContent[];
  links: { text: string; url: string }[];
};
