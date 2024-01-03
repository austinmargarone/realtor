import React from "react";
import propertyData from "../../../data/property.json";
import PropertyListing from "@/components/listing/PropertyListing";
import ListYours from "@/components/listing/ListYours";

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
      <PropertyListing
        title={property.address}
        slug={property.slug}
        id={property.id}
        address={property.address}
        image={property.image}
        description={property.description}
        list={property.list}
        sale={property.sale}
        beds={property.beds}
        baths={property.baths}
        sqft={property.sqft}
        lot={property.lot}
        year={property.year}
        garage={property.garage}
        tour={property.tour}
        embed={property.embed}
        status={property.status}
        MLS={property.MLS}
      />
      <ListYours />
    </div>
  );
};

export default Page;
