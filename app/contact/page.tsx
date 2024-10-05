import Form from "@/components/contact/Form";
import React from "react";
import type { Metadata } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Contact | Greg Miller",
  description:
    "Contact Greg Miller, a licensed real estate salesperson in Rochester, NY. He works with buyers and sellers to make the process easy and stress-free.",
  keywords:
    "Greg Miller, Realtor, Real Estate, Rochester, NY, New York, Homes, Houses, Property, Listing, Listings, Buy, Sell, Rent",
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

const page = () => {
  return (
    <main className="mx-auto my-[2.5rem] justify-center p-[1rem]">
      <h2 className="md:h1 h2 mb-[1.25rem] dark:text-white">Contact Me</h2>
      <section className="flex justify-center">
        <Form />
      </section>
    </main>
  );
};

export default page;
