import Contact from "@/components/about/Contact";
import Content from "@/components/about/Content";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Austin Margarone",
  description:
    "Austin Margarone is a licensed real estate salesperson in Rochester, NY. He works with buyers and sellers to make the process easy and stress-free.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Homes, Houses, Property, Listing, Listings, Buy, Sell, Rent",
};

const page = () => {
  return (
    <article className="bg-white dark:bg-kw-black">
      <section className="mx-auto flex flex-col">
        <div className="breakpoint mx-auto">
          <h1 className="h1 my-[2.5rem] flex justify-start dark:text-white">
            About Me
          </h1>
        </div>
        <section className="bg-kw-ltgray dark:bg-kw-darkgray">
          <div className="breakpoint mx-auto">
            <Content />
          </div>
        </section>
        <Contact />
      </section>
    </article>
  );
};

export default page;
