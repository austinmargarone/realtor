type ImageBlock = {
  _key: string;
  _type: "image";
  alt: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type BlockContent =
  | {
      _key: string;
      _type: string;
      style: string;
      list: string;
      listItem: string;
      children: {
        _key: string;
        _type: string;
        text: string;
        marks: string[];
      }[];
    }
  | ImageBlock;
