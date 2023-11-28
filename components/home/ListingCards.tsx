import React from "react";
import Listing from "../shared/Listing";
import Link from "next/link";

const ListingCards = () => {
  return (
    <main>
      <div className="mx-[1.25em] flex items-center justify-between md:mx-[5rem] lg:mx-[7.5rem]">
        <h2 className="h2 te">My Listings</h2>
        <Link href="/listings">
          <button className="button dark:buttondark">Portfoilo</button>
        </Link>
      </div>
      <div className="m-[2rem] flex flex-wrap justify-center gap-[2rem]">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </div>
    </main>
  );
};

export default ListingCards;
