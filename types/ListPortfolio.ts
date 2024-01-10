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
  link: string;
  status?: string;
  color: string;
};
