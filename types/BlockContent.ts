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
