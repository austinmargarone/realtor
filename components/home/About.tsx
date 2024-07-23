import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem] md:flex-row">
        <div className="flex justify-center md:w-[50%]">
          <Link href={"/about"}>
            <Image
              src={"/smallheadshot.jpeg"}
              alt={"Listing Photo"}
              width={450}
              height={268}
              className="size-[300px] rounded-full border-[3px] border-black bg-black p-5  shadow-lg hover:border-kw-red md:size-[325px] lg:size-[400px] xl:size-[420px]"
            />
          </Link>
        </div>
        <div className="md:w-[50%] ">
          <h2 className="h2 mb-[.66rem] dark:text-white">About Me</h2>
          <p className="body dark:bodydark">
            I enjoy working with buyers and sellers to help them achieve their
            dreams. My goal is to take the stress out of every transaction for
            my clients to make the experience enjoyable and exciting.
          </p>
          <Link
            href={"https://mailchi.mp/be4735125a1b/subscribe"}
            target="_blank"
          >
            <button className="button dark:buttondark mx-auto mt-[1.2rem] flex">
              Subscribe to Email Campaign
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
