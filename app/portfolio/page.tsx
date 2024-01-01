import React from "react";
import propertyData from "../../data/property.json";
import Listing from "@/components/shared/Listing";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="my-[1.25rem]">
      <div className="breakpoint mx-auto flex items-center justify-between ">
        <h2 className="h2">My Listings</h2>
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

export default page;
