"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the interface for form data
interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  PropertyAddress: string;
  Message: string;
  buyingProperty: boolean;
  sellingProperty: boolean;
}

// Define the Zod schema for form validation
const formSchema = z.object({
  FirstName: z.string().min(1).max(15),
  LastName: z.string().min(1).max(13),
  Email: z.string().min(1).max(25).email(),
  PhoneNumber: z.string().min(1).max(14),
  PropertyAddress: z.string().max(120),
  Message: z.string().max(200),
  buyingProperty: z.boolean(),
  sellingProperty: z.boolean(),
});

// Create the Zod resolver
const resolver = zodResolver(formSchema);

// Define the Form component
const Form = () => {
  // Destructure useForm hook to get form methods and state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver,
  });

  // Define the onSubmit function
  const onSubmit = (data: FormData) => {
    // Zod validation succeeded, proceed with your logic
    console.log(data);

    reset();
  };

  // Log form validation errors
  console.log(errors);

  return (
    <section className="flex min-w-[300px] max-w-[420px] grow bg-kw-maingray p-8 dark:bg-kw-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[1.25rem]"
      >
        <input
          type="text"
          placeholder="First name"
          {...register("FirstName")}
        />
        <input type="text" placeholder="Last Name" {...register("LastName")} />
        <input type="text" placeholder="Email" {...register("Email")} />
        <input
          type="tel"
          placeholder="Phone number"
          {...register("PhoneNumber")}
        />
        <input
          type="text"
          placeholder="Property Address"
          {...register("PropertyAddress")}
        />
        <textarea {...register("Message")} placeholder="Message" />
        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3">
            <input type="checkbox" {...register("buyingProperty")} />
            <label htmlFor="buyingProperty" className="dark:text-light-900">
              Buying Property
            </label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" {...register("sellingProperty")} />
            <label htmlFor="sellingProperty" className="dark:text-light-900">
              Selling Property
            </label>
          </div>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
