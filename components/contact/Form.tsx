"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
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
          {...register("FirstName", { required: true, max: 15, min: 1 })}
        />
        <input
          type="text"
          placeholder="Last Name"
          {...register("LastName", { required: true, max: 13, min: 1 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, max: 25, min: 1 })}
        />
        <input
          type="tel"
          placeholder="Phone number"
          {...register("PhoneNumber", { required: true, max: 14, min: 1 })}
        />
        <input
          type="text"
          placeholder="Property Address"
          {...register("PropertyAddress", {
            required: true,
            max: 120,
            min: 1,
          })}
        />
        <textarea
          {...register("Message", {
            required: false,
            max: 200,
            maxLength: 200,
          })}
          placeholder="Message"
        />
        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3">
            <input
              type="checkbox"
              placeholder="buyer"
              {...register("buyingProperty")}
            />
            <label htmlFor="buyingProperty" className="dark:text-light-900">
              Buying Property
            </label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              placeholder="seller"
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
