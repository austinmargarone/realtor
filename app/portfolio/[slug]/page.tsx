import React from "react";
import propertyData from "../../../data/property.json";
import PropertyListing from "@/components/listing/PropertyListing";

export const dynamic = "force-dynamic";
export const revalidate = 1;

type Props = {
  params: {
    [x: string]: string;
    propertyData: string;
  };
};

const Page = ({ params }: Props) => {
  const property = propertyData.find((property) => property.id === params.slug);
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <PropertyListing title={property.address} />
    </div>
  );
};

export default Page;
