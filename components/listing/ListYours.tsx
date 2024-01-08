import Link from "next/link";
import React from "react";

const ListYours = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem]">
        <h2 className="h2 dark:text-white">List Your Property</h2>
        <p className="body dark:bodydark flex max-w-[600px] text-center">
          Selling your home is an art, and I amm meticulous about the details.
          Your needs are at the forefront of every decision, from the strategic
          pricing that reflects your properties value to the tailored marketing
          campaigns that reach the right audience.
        </p>
        <Link href={"/contact"}>
          <button className="button dark:buttondark">Contact Me</button>
        </Link>
      </div>
    </section>
  );
};

export default ListYours;
