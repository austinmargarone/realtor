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

const Sold = ({
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
    <article>
      <div className="w-fit min-w-[350px] max-w-[450px] rounded-[1rem] border bg-white p-[.5rem] shadow-lg dark:border-kw-darkgray dark:bg-kw-black">
        <Link href={`${link}`} target="_blank">
          <div className="flex justify-center">
            <Image
              src={mainImage.asset.url}
              alt={"Listing Photo"}
              width={450}
              height={268}
              className="h-[280px] w-full rounded-t-[.5rem]"
            />
          </div>
        </Link>
        <div className="p-[1rem] dark:text-white">
          <div className="flex gap-2 font-bold">
            <div className="my-auto flex h-3 w-3 rounded-full bg-kw-red"></div>
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
              <span className="font-bold">{lot}</span> acre lot
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[60%]">{address}</p>
            <Link href={`${link}`} target="_blank">
              <Button className="w-fit border border-black text-black hover:animate-pulse dark:bg-kw-red dark:text-white">
                View Listing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Sold;
