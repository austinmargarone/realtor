import React from "react";
import Listing from "@/components/shared/Listing";
import Sold from "@/components/shared/Sold";
import { getListPortfolio, getSoldPortfolio } from "@/sanity/sanity-utils";

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
          <div className="my-[2rem] flex flex-wrap justify-center gap-[2rem]">
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
