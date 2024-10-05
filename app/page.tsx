import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Cover from "@/components/home/Cover";
import ListingCards from "@/components/home/ListingCards";
import Reviews from "@/components/home/Reviews";
import type { Metadata } from "next";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Home | Greg Miller",
  description:
    "Greg Miller is your local real estate agent in Rochester, NY. He is a member of the National Association of Realtors and provides a stress-free experience for his clients.",
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

export const dynamic = "force-dynamic";
export const revalidate = 1;

export default function Home() {
  return (
    <main>
      <section>
        <Cover />
      </section>
      <section>
        <About />
      </section>
      <section className="mx-auto bg-kw-maingray py-[2.5rem] dark:bg-kw-lessblack">
        <Reviews />
      </section>
      {/* Porfolio */}
      <section className="mx-auto max-w-[1200px] py-[2.5rem]">
        <ListingCards />
      </section>
      {/* contact */}
      <section className="bg-kw-maingray py-[2.5rem] dark:bg-kw-lessblack">
        <Contact />
      </section>
    </main>
  );
}
