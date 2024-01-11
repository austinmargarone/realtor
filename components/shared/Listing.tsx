import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  sale: string;
  address: string;
  color: string;
  slug: string;
  status: string;
}

const Listing = ({
  color,
  beds,
  baths,
  sqft,
  lot,
  sale,
  address,
  slug,
  status,
}: Props) => {
  return (
    <main>
      <div className="w-fit min-w-[350px] max-w-[450px] rounded-[1rem] border bg-white p-[.5rem] dark:border-kw-darkgray dark:bg-kw-black">
        <Link href={`/portfolio/${slug}`}>
          <div className="flex justify-center">
            {/* <Image
              src={imageSlideshow.asset.url}
              alt={"Listing Photo"}
              width={450}
              height={268}
              className="rounded-t-[.5rem]"
            /> */}
          </div>
        </Link>
        <div className="p-[1rem] dark:text-white">
          <div className="flex gap-2 font-bold">
            <div
              className="my-auto flex h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
            <span>{status}</span>
            <span>-</span>
            <span>${sale}</span>
          </div>
          <div className="my-[.1rem] flex justify-start gap-[1rem]">
            <p>
              <span className="font-bold">{beds}</span> bed
            </p>
            <p>
              <span className="font-bold">{baths}</span> bath
            </p>
            <p>
              <span className="font-bold">{sqft}</span> sqft
            </p>
            <p>
              <span className="font-bold">{lot}</span> acre lot
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[60%]">{address}</p>
            <Link href={`/portfolio/${slug}`}>
              <Button className="w-fit border border-black text-black hover:animate-pulse dark:bg-kw-red dark:text-white">
                View Listing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;
