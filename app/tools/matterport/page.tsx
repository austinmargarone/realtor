import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matterport Virtual Tours | Austin Margarone",
  description:
    "Austin Margarone provides Matterport virtual tours for his listings.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Virtual Tours, Matterport, 3D, 3D Tours, Digital Twins, listings, listing, sell",
};

const page = () => {
  return (
    <article className="breakpoint mx-auto my-[2.5rem]">
      <div>
        <iframe
          width="853"
          height="480"
          src="https://my.matterport.com/show/?m=Xjuo4yMEVqQ"
          allow="xr-spatial-tracking"
          allowFullScreen
          className="mx-auto flex w-[300px] rounded-md sm:w-[500px] md:w-[600px] lg:w-[850px]"
        ></iframe>
      </div>
      <div className="body dark:bodydark">
        <h1 className="h3 md:h1 mb-[.625rem] mt-[1.25rem] dark:text-white">
          Virtual Tour for Your Listing
        </h1>
        <p className="body dark:bodydark">
          Matterport virtual tours or digital-twins as some call them
          revolutionize the real estate industry. I am a Professional Matterport
          Technician with years of experience and own my own virtual tour
          company., Flower City Virtual Tours LLC. I created this company in
          early 2020 when there was limited showing capability. I offer this as
          a complimentary service on all of my listings as I believe it helps in
          many ways to sell your home.
        </p>
        <h2 className="h4 md:h2 my-[.625rem] dark:text-white">
          How my virtual tours upgrade your listing
        </h2>
        <ul className="ul">
          <li>
            Efficient vetting process by allowing people to see if they really
            like the home before coming in person.
          </li>
          <li>
            3D rendering allows people to see your home in a digital doll house
            view.
          </li>
          <li>Floor plan view</li>
          <li>Measurement capability</li>
          <li>
            Greater reach allowing out of town buyers to immerse themselves and
            be able to make a more confident sign unseen purchase.
          </li>
          <li>
            Documentation for proving condition for when the buyer completes a
            final walkthrough.
          </li>
          <li>Labeling key features within the home.</li>
          <li>exterior capabilities</li>
        </ul>
        <p className="mt-[.625rem]">
          On top of all of this, my virtual tours allow you to have memorabilia
          to hold on to once the house has sold. I host the digital twin until
          the transaction is done but you are able to host the tour post
          transaction if you please.
        </p>
      </div>
      <div>
        <Link href={"https://flowercityvirtualtours.com/"} target="_blank">
          <Button className="button dark:buttondark mx-auto mt-[1.25rem] flex">
            Flower City Virtual Tours
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default page;
