import React from "react";
import ListYours from "@/components/listing/ListYours";
import { getMyListing } from "@/sanity/sanity-utils";
import PropertyListing from "@/components/listing/PropertyListing";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const listing = await getMyListing(params.slug);
  const metaimage = listing.imageSlideshow[0].asset.url;
  console.log(listing.imageSlideshow[0]?.asset?.url);

  const metadata = {
    title: listing.address,
    keywords: listing.keywords,
    description: listing.metadesc,
    openGraph: {
      images: [
        {
          url: metaimage,
          width: 1200,
          height: 630,
          alt: "Austin Margarone | Realtor",
        },
      ],
    },
  };

  return metadata;
}

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
