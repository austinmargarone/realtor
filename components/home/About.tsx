import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem] md:flex-row">
        <div className="flex justify-center lg:w-[50%]">
          <Image
            src={"/headshot.webp"}
            alt={"Listing Photo"}
            width={450}
            height={268}
            className="rounded-[.5rem] border-2 border-black"
          />
        </div>
        <div className="lg:w-[50%] ">
          <h2 className="h2 mb-[.66rem] dark:text-kw-black">About Me</h2>
          <p className="dark:text-kw-maingray">
            I enjoy working with buyers and sellers to help them achieve their
            dreams. My goal is to take the stress out of every transaction for
            my clients to make the experience enjoyable and exciting.
          </p>
          <button className="button dark:buttondark mt-[1.25rem]">
            About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
