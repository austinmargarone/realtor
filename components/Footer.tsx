import Image from "next/image";
import React from "react";
import Link from "next/link";
import CopyNumber from "./ui/CopyNumber";

const Footer = () => {
  return (
    <section className="border-black bg-white shadow-lg dark:bg-black">
      <div className="breakpoint mx-auto flex flex-col items-center pb-[1rem]  lg:flex-row lg:justify-between lg:py-[2.5rem]">
        <div className="mt-[1rem] flex items-center justify-center gap-[1.25rem] lg:mt-0">
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
              className="size-[5rem] rounded-sm dark:shadow-lg lg:size-[7rem]"
            />
          </Link>
          <Image
            src={"/KWRed.png"}
            alt={"KW Logo"}
            width={150}
            height={150}
            className="h-[3rem] w-fit dark:shadow-lg lg:h-[4rem]"
          />
        </div>
        <div className="mt-[1rem] flex flex-col">
          <div className="flex justify-center">
            <p className="font-bold text-black dark:text-white">
              Austin Margarone
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-black dark:text-white">
              <CopyNumber />
            </p>
          </div>
          <div className="flex justify-center gap-[.63rem]">
            <Link href="/policy.pdf" passHref target="_blank">
              <p className="text-black underline dark:text-white">
                Privacy Policy
              </p>
            </Link>
            <span className="text-black underline dark:text-white">|</span>
            <Link href="/terms.pdf" passHref target="_blank">
              <p className="text-black underline dark:text-white">
                Terms & Coditions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
