"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  beds: number;
  baths: number;
  mainImage: {
    asset: {
      url: string;
    };
  };
  sqft: string;
  lot: number;
  sale: string;
  list: string;
  address: string;
  link: string;
}

const SmallSold = ({
  beds,
  baths,
  sqft,
  lot,
  sale,
  list,
  address,
  link,
  mainImage,
}: Props) => {
  return (
    <article className="w-full px-2.5">
      <div className="w-full rounded-[1rem] border bg-white p-[.5rem] shadow-lg dark:border-kw-darkgray dark:bg-kw-black">
        <Link href={`${link}`} target="_blank">
          <div className="flex justify-center">
            <Image
              src={mainImage.asset.url}
              alt={"Listing Photo"}
              width={450}
              height={268}
              className="h-auto w-full rounded-t-[.5rem]"
            />
          </div>
        </Link>
        <div className="p-[1rem] dark:text-white">
          <div className="flex gap-2 font-bold">
            <div className="my-auto flex size-3 rounded-full bg-kw-red"></div>
            <span>SOLD</span>
            <span>-</span>
            <span>${sale && sale.trim() !== "" ? sale : list}</span>
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
              <span className="font-bold">{lot}</span> acre
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="flex flex-start">{address}</p>
            <Link href={`${link}`} target="_blank" className="w-full">
            <Button className="mt-[.25rem] w-full border border-black bg-kw-red text-white hover:animate-pulse dark:bg-kw-red dark:text-white">
                View Listing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SmallSold;
