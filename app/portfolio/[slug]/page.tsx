import React from "react";
import ListYours from "@/components/listing/ListYours";
import { getMyListing } from "@/sanity/sanity-utils";

export const dynamic = "force-dynamic";
export const revalidate = 1;

interface Props {
  params: { slug: string };
}

const Page = async ({ params }: Props) => {
  const listing = await getMyListing(params.slug);
  console.log(listing);
  return (
    <div className="flex flex-col gap-[0.625rem]">
      {/* <PropertyListing
        color={color}
        beds={beds}
        baths={baths}
        sqft={sqft}
        lot={lot}
        sale={sale}
        address={address}
        slug={slug}
        status={status}
      /> */}
      <ListYours />
    </div>
  );
};

export default Page;
