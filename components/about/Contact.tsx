import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section>
      <div className="breakpoint mx-auto my-[1.25rem] flex flex-col items-center justify-center gap-[1.25rem]">
        <h2 className="h2 dark:text-white">Get Started</h2>
        <p className="dark:bodydark body flex max-w-[600px] text-center">
          Whether you are buying your first home, selling your current home, or
          buying a forever home, I am here to guide you through the whole
          process.
        </p>
        <Link href={"/contact"}>
          <Button className="button dark:buttondark bg-kw-red text-white hover:bg-black dark:bg-kw-red">
            Contact Me
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
