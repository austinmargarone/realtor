import { Key } from "react";
import { BlockContent } from "./BlockContent";

export type BlogPost = {
  [x: string]: any;
  id: Key | null | undefined;
  map(
    arg0: (post: any) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>;
  title: string;
  slug: {
    current: string;
  };
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
  keywords: string[];
  description: string;
};
