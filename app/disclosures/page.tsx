import Contact from "@/components/home/Contact";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Discloures | Austin Margarone",
  description:
    "Austin Margarone's resoruces and disclosures for real estate transactions.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Homes, Houses, Property, Listing, Listings, Buy, Sell, Rent",
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

const page = () => {
  return (
    <main className="breakpoint mx-auto my-[1.25rem] flex flex-col">
      <h1 className="md:h1 h2 dark:text-white">Real Estate Disclosures</h1>
      <section className="mx-auto my-[1.25rem] flex max-w-[420px] flex-col gap-[1.5rem]">
        <div className="flex items-center justify-between">
          <h3 className="body dark:bodydark w-[50%]">
            Fair Housing Disclosure
          </h3>
          <Link href="/fairhousing.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="body dark:bodydark w-[50%]">
            Standard Operating Procedure
          </h3>
          <Link href="/SOP.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="body dark:bodydark w-[50%]">Agency Disclosure</h3>
          <Link href="/agency.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="body dark:bodydark w-[50%]">Anti-discrimination</h3>
          <Link href="/antidiscrimination.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default page;
