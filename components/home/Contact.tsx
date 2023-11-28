import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="mx-auto my-[1.25rem] flex max-w-[800px] flex-col items-center justify-center gap-[1.25rem]">
        <h2 className="h2 dark:text-kw-maingray">
          Let me help you with your real estate goals!
        </h2>
        <p className="flex text-center dark:text-kw-ltgray">
          Whether you are buying your first home, selling your current home, or
          buying a forever home, I am here to guide you through the whole
          process.
        </p>
        <Link href={""}>
          <button className="button dark:buttondark">Contact Me</button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
