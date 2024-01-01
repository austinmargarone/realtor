import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem] md:max-w-[725px] md:flex-row lg:max-w-[1000px]">
        <div className="flex w-[50%] justify-center">
          <Image
            src={"/headshot.webp"}
            alt={"Listing Photo"}
            width={450}
            height={268}
            className="rounded-[.5rem] border-2 border-black"
          />
        </div>
        <div className="w-[50%] ">
          <h2 className="h2 mb-[.66rem] dark:text-kw-black">My Reviews</h2>
          <p className="dark:text-kw-maingray">
            “Austin helped us with what has been said to be one of the most
            stressful times in a persons life. Austin was punctual, always
            prepared, and creative. He thought of things to show the house at
            its best that we would never have never considered. We are so happy
            that we used Austin as our realtor. He is professional, courteous,
            and worked hard to get our home sold quickly. He kept us informed
            every step of the way. We recommend Austin without hesitation! He
            was fantastic!! Thank you,
          </p>
          <button className="button dark:buttondark mt-[1.25rem]">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
