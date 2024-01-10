type StatusType = "Active" | "SOLD" | "PENDING";

export type ListPortfolio = {
  id: string;
  address: string;
  mainImage: {
    asset: any;
    alt: string;
  };
  sale: string;
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  year: number;
  slug: string;
  status: StatusType;
  color: string;
};
