import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="breakpoint mx-auto mt-[2.5rem] h-screen">
      <div className="mx-auto h-[250px] w-[300px] justify-center xs:h-[275px] xs:w-[325px] sm:h-[400px] sm:w-[500px] md:h-[480px] md:w-[600px] lg:h-[680px] lg:w-[850px] xl:h-[750px] xl:w-[950px]">
        <iframe
          className="h-full w-full"
          src="https://dashboards.domusanalytics.com/v/RochesterInfographic"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
