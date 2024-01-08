import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem] md:flex-row">
        <div className="flex justify-center md:w-[50%]">
          <Image
            src={"/smallheadshot.jpeg"}
            alt={"Listing Photo"}
            width={450}
            height={268}
            className="h-[300px] w-[300px] rounded-full border-[3px] border-black shadow-lg hover:scale-90 hover:border-kw-red dark:hover:border-kw-ltgray md:h-[325px] md:w-[325px] lg:h-[400px] lg:w-[400px] xl:h-[420px] xl:w-[420px]"
          />
        </div>
        <div className="md:w-[50%] ">
          <h2 className="h2 mb-[.66rem] dark:text-white">About Me</h2>
          <p className="body dark:bodydark">
            I enjoy working with buyers and sellers to help them achieve their
            dreams. My goal is to take the stress out of every transaction for
            my clients to make the experience enjoyable and exciting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
