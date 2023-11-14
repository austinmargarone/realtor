import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Listing = () => {
  return (
    <div className="w-fit rounded-[1rem] border bg-white p-[.21rem]">
      <div className="flex justify-center">
        <Image
          src={"/901.jpeg"}
          alt={"Listing Photo"}
          width={450}
          height={268}
          className="rounded-t-[1rem]"
        />
      </div>
      <div className="px-[1rem] py-[.2rem]">
        <p>
          <span>{/* Add Circle red or green */}</span>For Sale
        </p>
        <p>$300,000</p>
        <div className="flex gap-[1rem]">
          <p>
            <span>3</span> bed
          </p>
          <p>
            <span>2</span> bath
          </p>
          <p>
            <span>1,000</span> sqft
          </p>
          <p>
            <span>1</span> acre lot
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-[50%]">901 Long Pond Road, Rochester, NY 14616</p>
          <Link href="/">
            <Button className="w-fit border border-black text-black">
              View Listing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listing;
