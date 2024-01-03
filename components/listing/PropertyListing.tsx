import React from "react";

interface Props {
  title: string;
}

const PropertyListing = ({ title }: Props) => {
  return <div>PropertyListing{title}</div>;
};

export default PropertyListing;
