import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center border-t-2 border-black bg-white pb-[1rem] dark:bg-black md:px-[9rem] lg:flex-row lg:justify-between lg:py-[2.5rem] xl:px-[12rem]">
      <div className="mt-[1rem] flex items-center justify-center gap-[.63rem] lg:mt-0">
        <Link
          href={
            "https://www.realtor.com/realestateagents/austin-margarone_rochester_ny_3802982_051184163"
          }
          target="_blank"
        >
          <Image
            src={"/Realtor.jpg"}
            alt={"Realtor Logo"}
            width={150}
            height={150}
            className="h-[5rem] w-[5rem] lg:h-[7rem] lg:w-[7rem]"
          />
        </Link>
        <Link href={"/contact"}>
          <Button className="bg-kw-black dark:bg-white lg:w-[7.77rem]">
            <p className="text-white dark:text-black">Contact Me</p>
          </Button>
        </Link>
      </div>
      <div className="mt-[1rem] flex flex-col">
        <div className="flex justify-center">
          <p className="font-bold text-black dark:text-white">
            Austin Margarone
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-black dark:text-white">
            License #: <span className="">10401330819</span>
          </p>
        </div>
        <div className="flex justify-center gap-[.63rem]">
          <Link href={"/privacy-policy"}>
            <p className="text-black underline dark:text-white">
              Privacy Policy
            </p>
          </Link>
          <span className="text-black underline dark:text-white">|</span>
          <Link href={"/terms-and-conditions"}>
            <p className="text-black underline dark:text-white">
              Terms & Coditions
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
