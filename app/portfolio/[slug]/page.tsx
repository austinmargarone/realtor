import React from "react";
import ListYours from "@/components/listing/ListYours";
import FullListing from "@/components/listing/FullListing";
import { getPropertyListings } from "@/sanity/sanity-utils";
export const dynamic = "force-dynamic";
export const revalidate = 1;

type Props = {
  params: {
    [x: string]: string;
    propertyData: string;
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const property = await getPropertyListings(params.slug);
  console.log(property);
  return (
    <div className="flex flex-col gap-[0.625rem]">
      <FullListing
        slug={params.slug}
        id={params.id}
        title={params.title}
        address={params.address}
        image={""}
        description={""}
        list={""}
        sale={""}
        beds={0}
        baths={0}
        sqft={""}
        lot={0}
        year={0}
        garage={0}
        tour={""}
        embed={""}
        status={""}
        MLS={""}
      />
      <ListYours />
    </div>
  );
};

export default Page;
