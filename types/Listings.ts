export type PropertyListing = {
  slug: string;
  id: string;
  title: string;
  address: string;
  images: Array<{
    asset: {
      _ref: string;
      _type: "imageType";
    };
    hotspot?: {
      height: number;
      width: number;
      x: number;
      y: number;
    };
  }>;
  description: string;
  list: string;
  sale: string;
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  year: number;
  garage: number;
  tour: string;
  embed: string;
  status: string;
  color: string;
  MLS: string;
};
