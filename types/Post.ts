import { Key } from "react";

export type Post = {
  id: Key | null | undefined;
  map(
    arg0: (post: any) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>;
  title: string;
  slug: string;
  mainImage: {
    alt: string;
  };
  categories: {
    title: string;
    description: string;
  }[];
  publishedAt: string;
  body: BlockContent[];
};

export type BlockContent = {
  _key: string;
  _type: string;
  style: string;
  list: string;
  children: {
    _key: string;
    _type: string;
    text: string;
    marks: string[];
  }[];
};
