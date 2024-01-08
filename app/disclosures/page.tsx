import Contact from "@/components/home/Contact";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="breakpoint mx-auto my-[1.25rem] flex flex-col">
      <h1 className="h2 dark:text-white">Real Estate Disclosures</h1>
      <section className="mx-auto my-[1.25rem] flex max-w-[420px] flex-col gap-[1.5rem]">
        <div className="flex items-center justify-between">
          <h3 className="w-[50%] dark:text-kw-ltgray">
            Fair Housing Disclosure
          </h3>
          <Link href="/fairhousing.pdf" passHref target="_blank">
            <button className="button dark:buttondark ">View PDF</button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="w-[50%] dark:text-kw-ltgray">
            Standard Operating Procedure
          </h3>
          <Link href="/SOP.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="w-[50%] dark:text-kw-ltgray">Agency Disclosure</h3>
          <Link href="/agency.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="w-[50%] dark:text-kw-ltgray">Anti-discrimination</h3>
          <Link href="/antidiscrimination.pdf" passHref target="_blank">
            <button className="button dark:buttondark">View PDF</button>
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default page;
