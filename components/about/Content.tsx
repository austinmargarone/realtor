import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <section className="breakpoint my-auto flex flex-col-reverse py-[2.5rem] lg:flex-row">
      <div className="my-auto w-full lg:w-[50%]">
        <h2 className="h2 flex justify-start dark:text-white">Greg Miller</h2>
        <h3 className="h4 my-[.75rem] flex justify-start dark:text-white">
          Licensed Real Estate Salesperson
        </h3>
        <p className="body dark:bodydark">
          I am a Rochester native who knows our city and surrounding areas. I
          take pride in being part of the Rochester, NY community. After high
          school, I studied building trades at Alfred State College. This
          background knowledge gives me the ability to see houses differently
          than my competition. My goal is to make the process easy and
          stress-free. Contact me today, I look forward to assisting you with
          your next real estate transaction.
        </p>
        <Link href="https://www.realtor.com/realestateagents/austin-margarone_rochester_ny_3802982_051184163">
          <Button className="button mt-[.75rem] text-black">
            Realtor Profile
          </Button>
        </Link>
      </div>
      <div className="my-auto mb-[1.25rem] w-full lg:mt-0 lg:w-[50%]">
        <Image
          src={"/smallheadshot.jpeg"}
          alt={"Listing Photo"}
          width={450}
          height={268}
          className="mx-auto size-[300px] rounded-full border-[3px] border-black bg-black  p-5 shadow-lg md:size-[325px] lg:size-[400px] xl:size-[420px]"
        />
      </div>
    </section>
  );
};

export default Content;
