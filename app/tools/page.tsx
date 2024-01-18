import Image from "next/image";
import Link from "next/link";
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
      <section className="mx-auto mb-[2.5rem] flex flex-col gap-[30px] md:flex-row">
        <Link href="/tools/charts">
          <button className="button w-[200px]">Market Charts</button>
        </Link>
        <Link href="/tools/mortgage">
          <button className="button w-[200px]">Mortgage Calculaor</button>
        </Link>
        <Link href="/tools/matterport">
          <button className="button w-[200px]">Matterport Services</button>
        </Link>
      </section>
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
