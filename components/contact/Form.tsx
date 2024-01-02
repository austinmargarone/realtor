"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/types";

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
          className="pl-1"
          {...register("FirstName")}
        />
        {errors.FirstName && (
          <p className="text-kw-red">{`First Name: ${errors.FirstName.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Last Name"
          className="pl-1"
          {...register("LastName")}
        />
        {errors.LastName && (
          <p className="text-kw-red">{`Last Name: ${errors.LastName.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          className="pl-1"
          {...register("Email")}
        />
        {errors.Email && (
          <p className="text-kw-red">{`Email: ${errors.Email.message}`}</p>
        )}
        <input
          type="tel"
          placeholder="Phone number"
          className="pl-1"
          {...register("PhoneNumber")}
        />
        {errors.PhoneNumber && (
          <p className="text-kw-red">{`Phone: ${errors.PhoneNumber.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Property Address"
          className="pl-1"
          {...register("PropertyAddress")}
        />

        <textarea
          {...register("Message")}
          placeholder="Message"
          className="pl-1"
        />
        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="buyingProperty"
              {...register("buyingProperty")}
            />
            <label htmlFor="buyingProperty" className="dark:text-light-900">
              Buying Property
            </label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="sellingProperty"
              {...register("sellingProperty")}
            />
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
