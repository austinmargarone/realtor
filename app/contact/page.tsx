import Form from "@/components/contact/Form";
import React from "react";

const page = () => {
  return (
    <main className="breakpoint mx-auto my-[2.5rem] justify-center">
      <h2 className="h1 mb-[1.25rem] dark:text-white">Contact Me</h2>
      <section className="flex justify-center">
        <Form />
      </section>
    </main>
  );
};

export default page;
