import Form from "@/components/contact/Form";
import React from "react";

const page = () => {
  return (
    <main className="breakpoint mx-auto my-[1.25rem]">
      <h2 className="h2 mb-[1.25rem]">Contact Me</h2>
      <section className="flex justify-center">
        <Form />
      </section>
    </main>
  );
};

export default page;
