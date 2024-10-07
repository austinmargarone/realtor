import Link from "next/link";
import React from "react";

const ListYours = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem]">
        <h2 className="h2 dark:text-white">List Your Property</h2>
        <p className="body dark:bodydark flex max-w-[600px] text-center">
          Selling a home requires precision, and I’m dedicated to every detail.
          From setting the ideal price that highlights your property’s true
          value to crafting customized marketing strategies that connect with
          the perfect buyers, your goals are always my top priority.
        </p>
        <Link href={"/contact"}>
          <button className="button dark:buttondark">Contact Me</button>
        </Link>
      </div>
    </section>
  );
};

export default ListYours;
