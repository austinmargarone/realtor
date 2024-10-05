import Image from "next/image";
import React from "react";
import Link from "next/link";
import CopyNumber from "./ui/CopyNumber";

const Footer = () => {
  return (
    <section className="border-black bg-white shadow-lg dark:bg-black">
      <div className="breakpoint mx-auto flex flex-col items-center pb-[1rem]  lg:flex-row lg:justify-between lg:py-[2.5rem]">
        <div className="mt-[1rem] flex items-center justify-center gap-[1.25rem] lg:mt-0">
          <Link href={"https://www.airbnb.com/"} target="_blank">
            <Image
              src={"/Airbnb.png"}
              alt={"Realtor Logo"}
              width={300}
              height={150}
              className="size-[5rem] w-full rounded-sm dark:shadow-lg lg:size-[7rem]"
            />
          </Link>
        </div>
        <div className="mt-[1rem] flex flex-col">
          <div className="flex justify-center">
            <p className="font-bold text-black dark:text-white">Greg Miller</p>
          </div>
          <Link
            href={"https://mailchi.mp/be4735125a1b/subscribe"}
            target="_blank"
          >
            <button className="m-auto my-[.075rem] flex rounded-sm bg-kw-red px-[2.25rem] py-[.125rem] font-semibold text-kw-ltgray hover:bg-kw-ltgray hover:text-kw-red dark:bg-kw-red dark:hover:bg-kw-maingray dark:hover:text-black">
              Subscribe
            </button>
          </Link>
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
