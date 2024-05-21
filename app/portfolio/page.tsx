import React from "react";
import Listing from "@/components/shared/Listing";
import Sold from "@/components/shared/Sold";
import { getListPortfolio, getSoldPortfolio } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import SmallListing from "@/components/shared/SmallListing";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Portfolio | Austin Margarone",
  description:
    "Austin Margarone's portfolio of listings and buyer transactions.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Listing, Listings, Buy, Sell, Rent, Portfolio, Transactions",
  openGraph: {
    images: [
      {
        url: `${baseURL}/meta.png`,
        width: 1200,
        height: 630,
        alt: "Austin Margarone | Realtor",
      },
    ],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 1;

const page = async () => {
  const solddata = await getSoldPortfolio();
  const listdata = await getListPortfolio();

  return (
    <main>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-between">
        <div>
          <h2 className="md:h1 h2 max-w-[1100px] dark:text-white">
            My Listings
          </h2>
          <div className="my-[2rem] flex flex-wrap justify-center gap-[2rem] xs:flex hidden">
            {listdata
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((listing) => (
                <Listing
                  key={listing.id}
                  address={listing.address}
                  beds={listing.beds}
                  baths={listing.baths}
                  lot={listing.lot}
                  sale={listing.sale}
                  sqft={listing.sqft}
                  color={listing.color}
                  slug={listing.slug}
                  status={listing.status}
                  imageSlideshow={listing.imageSlideshow}
                />
              ))}
          </div>
          <div className="my-[2rem] flex flex-wrap justify-center gap-[2rem] flex xs:hidden">
            {listdata
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((listing) => (
                <SmallListing
                  key={listing.id}
                  address={listing.address}
                  beds={listing.beds}
                  baths={listing.baths}
                  lot={listing.lot}
                  sale={listing.sale}
                  sqft={listing.sqft}
                  color={listing.color}
                  slug={listing.slug}
                  status={listing.status}
                  imageSlideshow={listing.imageSlideshow}
                />
              ))}
          </div>
        </div>
        <div className="mt-[1.25rem]">
          <h2 className="h2 max-w-[1100px] dark:text-white">
            Buyer Transactions
          </h2>
          <div className="my-[2rem] flex flex-wrap justify-center gap-[2rem]">
            {solddata
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((sold) => (
                <Sold
                  key={sold.id}
                  address={sold.address}
                  beds={sold.beds}
                  baths={sold.baths}
                  lot={sold.lot}
                  list={sold.sale}
                  sale={sold.sale}
                  sqft={sold.sqft}
                  link={sold.link}
                  mainImage={sold.mainImage}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
