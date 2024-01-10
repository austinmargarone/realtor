import React from "react";
import Listing from "../shared/Listing";
import Link from "next/link";
import property from "../../data/property.json";

const ListingCards = async () => {
  const propertyListing = await property;
  console.log(property);
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
        {propertyListing.slice(0, 4).map((listing) => (
          <Listing
            key={listing.id}
            address={listing.address}
            image={listing.image}
            beds={listing.beds}
            baths={listing.baths}
            lot={listing.lot}
            list={listing.list}
            sale={listing.sale}
            status={listing.status}
            color={listing.color}
            sqft={listing.sqft}
            slug={listing.slug}
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
