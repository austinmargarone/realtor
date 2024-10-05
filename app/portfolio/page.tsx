import React from "react";
import Listing from "@/components/shared/Listing";
import { getListPortfolio } from "@/sanity/sanity-utils";
import type { Metadata } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Portfolio | Greg Miller",
  description: "Greg Miller's portfolio of listings and buyer transactions.",
  keywords:
    "Greg Miller, Realtor, Real Estate, Rochester, NY, New York, Listing, Listings, Buy, Sell, Rent, Portfolio, Transactions",
  openGraph: {
    images: [
      {
        url: `${baseURL}/meta.png`,
        width: 1200,
        height: 630,
        alt: "Greg Miller | Realtor",
      },
    ],
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 1;

const page = async () => {
  const listdata = await getListPortfolio();

  return (
    <main>
      <section className="hidden xs:flex">
        <div className="xs:breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-between">
          <div>
            <h2 className="md:h1 h2 max-w-[1100px] dark:text-white">
              My Listings
            </h2>
            <section className="hidden xs:flex">
              <div className="my-[2rem] flex flex-wrap justify-center gap-[2rem]">
                {listdata
                  .sort((a, b) => a.id.localeCompare(b.id))
                  .map((listing) => (
                    <Listing
                      key={listing.id}
                      address={listing.address}
                      beds={listing.beds}
                      baths={listing.baths}
                      sale={listing.sale}
                      slug={listing.slug}
                      imageSlideshow={listing.imageSlideshow}
                      lot={0}
                      color={""}
                      status={""}
                      sqft={""}
                    />
                  ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* Conditionally render for screen size
       */}
    </main>
  );
};

export default page;
