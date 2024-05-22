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
    <article className="flex justify-center">
      <div className="w-full min-w-[200px] max-w-[325px] flex-shrink-0 rounded-[1rem] border bg-white p-[.5rem] shadow-lg dark:border-kw-darkgray dark:bg-kw-black">
        <Link href={`${link}`} target="_blank">
          <div className="flex justify-center">
            <Image
              src={mainImage.asset.url}
              alt={"Listing Photo"}
              width={3500}
              height={268}
              className="h-[280px] rounded-t-[.5rem] w-full"
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
              <span className="font-bold flex flex-col">{beds}</span> bed
            </p>
            <p>
              <span className="font-bold flex flex-col">{baths}</span> bath
            </p>
            <p>
              <span className="font-bold flex flex-col">{sqft}</span> sqft
            </p>
            <p>
              <span className="font-bold flex flex-col">{lot}</span> acre
            </p>
          </div>
          <div className="flex gap-[.75rem] justify-between flex-col">
            <p className="flex flex-start">{address}</p>
            <Link href={`${link}`} target="_blank">
              <Button className="w-full border border-black bg-kw-red text-white hover:animate-pulse dark:bg-kw-red dark:text-white">
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
