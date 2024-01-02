import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  status: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  sale: string;
  list: string;
  address: string;
  link: string;
}

const Sold = ({
  status,
  image,
  beds,
  baths,
  sqft,
  lot,
  sale,
  list,
  address,
  link,
}: Props) => {
  return (
    <div className="w-fit min-w-[350px] max-w-[420px] rounded-[1rem] border bg-white p-[.5rem] dark:border-kw-darkgray dark:bg-kw-black">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={"Listing Photo"}
          width={450}
          height={268}
          className="rounded-t-[.5rem]"
        />
      </div>
      <div className="p-[1rem] dark:text-white">
        <div className="flex gap-2">
          {status}
          <span>-</span>
          <span className="font-bold">
            ${sale && sale.trim() !== "" ? sale : list}
          </span>
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
            <Button className="w-fit border border-black text-black dark:bg-kw-red dark:text-white">
              View Listing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sold;
