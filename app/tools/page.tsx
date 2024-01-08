import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="breakpoint mx-auto mt-[2.5rem] flex flex-col gap-[1.25rem]">
      <h1 className="md:h1 h2 dark:text-white">Tools</h1>
      <div className="mx-auto h-[250px] w-[300px] justify-center xs:h-[275px] xs:w-[325px] sm:h-[400px] sm:w-[500px] md:h-[480px] md:w-[600px] lg:h-[680px] lg:w-[850px] xl:h-[750px] xl:w-[950px]">
        <iframe
          className="h-full w-full rounded-sm"
          src="https://dashboards.domusanalytics.com/v/RochesterInfographic"
        ></iframe>
      </div>
      <div className="mx-auto mb-[1.25rem] flex">
        <Image
          src={"/rocvert.jpg"}
          alt={"Rochester Cityscape"}
          width={300}
          height={300}
          className="mx-auto flex h-full w-[300px] justify-center rounded-sm shadow-lg xs:w-[300px] sm:w-[500px] md:w-[600px] lg:hidden"
        />
      </div>
    </div>
  );
};

export default page;
