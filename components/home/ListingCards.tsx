import React from "react";
import Listing from "../shared/Listing";
import Link from "next/link";
import { getListPortfolio } from "@/sanity/sanity-utils";

const ListingCards = async () => {
  const listdata = await getListPortfolio();

  return (
    <main>
      <div className="breakpoint mx-auto flex items-center justify-between md:mx-[5rem] lg:mx-[7.5rem]">
        <h2 className="h2 mx-auto dark:text-white sm:mx-0">
          Featured Listings
        </h2>
        <div className="hidden sm:flex">
          <Link href="/portfolio">
            <button className="button dark:buttondark">Portfoilo</button>
          </Link>
        </div>
      </div>
      <div className="m-[2rem] flex flex-wrap justify-center gap-[2rem]">
        {listdata.slice(0, 4).map((listing) => (
          <Listing
            key={listing.id}
            address={listing.address}
            mainImage={listing.mainImage}
            beds={listing.beds}
            baths={listing.baths}
            lot={listing.lot}
            sale={listing.sale}
            color={listing.color}
            sqft={listing.sqft}
          />
        ))}
      </div>
      <Link href="/portfolio">
        <button className="button dark:buttondark mx-auto flex sm:hidden">
          Portfoilo
        </button>
      </Link>
    </main>
  );
};

export default ListingCards;
