import React from "react";

interface Props {
  slug: string;
  id: string;
  title: string;
  address: string;
  image: string;
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
  MLS: string;
}

const PropertyListing = ({
  slug,
  id,
  title,
  address,
  image,
  description,
  list,
  sale,
  beds,
  baths,
  sqft,
  lot,
  year,
  garage,
  tour,
  embed,
  status,
  MLS,
}: Props) => {
  return <main></main>;
};

export default PropertyListing;
