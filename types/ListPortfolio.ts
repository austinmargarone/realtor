type StatusType = "Active" | "SOLD" | "PENDING";

export type ListPortfolio = {
  id: string;
  address: string;
  imageSlideshow: {
    alt: string;
    asset: {
      url: any;
      _ref: string;
      _type: string;
    };
  }[];
  sale: string;
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  year: number;
  slug: string;
  status: StatusType;
  color: string;
  description: string;
  list: string;
  garage: string;
  tour: string;
  embed: string;
  MLS: string;
  keywords: string[];
  metadesc: string;
};
