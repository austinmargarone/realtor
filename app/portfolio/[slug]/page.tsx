import React from "react";
import ListYours from "@/components/listing/ListYours";
import { getMyListing } from "@/sanity/sanity-utils";
import PropertyListing from "@/components/listing/PropertyListing";

export const dynamic = "force-dynamic";
export const revalidate = 1;

interface Props {
  params: { slug: string };
}

const Page = async ({ params }: Props) => {
  const listing = await getMyListing(params.slug);
  return (
    <div className="flex flex-col gap-[0.625rem]">
      <PropertyListing
        color={listing.color}
        beds={listing.beds}
        baths={listing.baths}
        sqft={listing.sqft}
        lot={listing.lot}
        sale={listing.sale}
        address={listing.address}
        slug={listing.slug}
        status={listing.status}
        MLS={listing.MLS}
        embed={listing.embed}
        description={listing.description}
        garage={listing.garage}
        imageSlideshow={listing.imageSlideshow}
        year={listing.year}
      />
      <ListYours />
    </div>
  );
};

export default Page;
