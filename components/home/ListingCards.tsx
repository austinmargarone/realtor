import React from "react";
import Listing from "../shared/Listing";
import Link from "next/link";
import propertyData from "../../data/property.json";

const ListingCards = () => {
  return (
    <main>
      <div className="breakpoint mx-auto flex items-center justify-between md:mx-[5rem] lg:mx-[7.5rem]">
        <h2 className="h2">Listings</h2>
        <Link href="/portfolio">
          <button className="button dark:buttondark">Portfoilo</button>
        </Link>
      </div>
      <div className="m-[2rem] flex flex-wrap justify-center gap-[2rem]">
        {propertyData.map((listing) => (
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
            sqft={listing.sqft}
            _id={listing.id}
          />
        ))}
      </div>
    </main>
  );
};

export default ListingCards;
