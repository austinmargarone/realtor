import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Charts | Austin Margarone",
  description:
    "Austin Margarone's market charts for the Rochester, NY real estate market.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Market, Charts, Home Prices, Sales Price, Price Per SQFT, Days on Market, Inventory, Homes For Sale, Listings, Buy, Sell, Rent",
};

const page = () => {
  return (
    <div>
      <section className="mx-auto my-[2.5rem] flex flex-col gap-6">
        {/* Sales Price - Short Term */}
        <div className="flex flex-col">
          <h3 className="h2 pb-[4px] dark:text-white">Sales Price</h3>
          <iframe
            width="640"
            height="480"
            src="https://grar.stats.showingtime.com/infoserv/s-v1/KVvo-R1F?w=640&amp;h=480"
            className="mx-auto w-[300px] rounded-sm sm:w-[500px] md:w-[600px] lg:w-[650px]"
          ></iframe>
        </div>
        {/* Sales Price - Long Term */}
        <div className="flex flex-col">
          <h3 className="h2 pb-[4px] dark:text-white">
            Sales Price - Long Term
          </h3>
          <iframe
            width="640"
            height="480"
            src="https://grar.stats.showingtime.com/infoserv/s-v1/KVvU-n2S?w=640&amp;h=480"
            className="mx-auto w-[300px] rounded-sm sm:w-[500px] md:w-[600px] lg:w-[650px]"
          ></iframe>
        </div>
        {/* Price Per SQFT */}
        <div className="flex flex-col">
          <h3 className="h2 pb-[4px] dark:text-white">Price Per SQFT</h3>{" "}
          <iframe
            width="640"
            height="480"
            src="https://grar.stats.showingtime.com/infoserv/s-v1/KVvX-sqN?w=640&amp;h=480"
            className="mx-auto w-[300px] rounded-sm sm:w-[500px] md:w-[600px] lg:w-[650px]"
          ></iframe>
        </div>
        {/* Days on Market */}
        <div className="flex flex-col">
          <h3 className="h2 pb-[4px] dark:text-white">Days on Market</h3>
          <iframe
            width="640"
            height="480"
            src="https://grar.stats.showingtime.com/infoserv/s-v1/KVvR-rDA?w=640&amp;h=480"
            className="mx-auto w-[300px] rounded-sm sm:w-[500px] md:w-[600px] lg:w-[650px]"
          ></iframe>
        </div>
        {/* Homes For Sale */}
        <div className="flex flex-col">
          <h3 className="h2 pb-[4px] dark:text-white">Inventory</h3>
          <iframe
            width="640"
            height="480"
            src="https://grar.stats.showingtime.com/infoserv/s-v1/KVvq-hOW?w=640&amp;h=480"
            className="mx-auto w-[300px] rounded-sm sm:w-[500px] md:w-[600px] lg:w-[650px]"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default page;
