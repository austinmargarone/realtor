"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/types";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  Subscribe: boolean;
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
  const onSubmit = async (data: FormData) => {
    try {
      // Zod validation succeeded, proceed with your logic
      console.log(data);

      // Send email using emailjs
      const templateParams = {
        firstName: data.FirstName,
        lastName: data.LastName,
        email: data.Email,
        phoneNumber: data.PhoneNumber,
        propertyAddress: data.PropertyAddress,
        message: data.Message,
        buyingProperty: data.buyingProperty,
        sellingProperty: data.sellingProperty,
        subscribe: data.Subscribe,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_ID
      );

      // Reset the form after successful submission
      reset();
      notify();

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // Log form validation errors
  console.log(errors);

  const notify = () =>
    toast("Form submitted successfully!", {
      position: "top-center",
      autoClose: 4200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#666666",
        color: "#ffffff",
        borderRadius: "10px",
        border: "2px solid #000000",
      },
    });

  return (
    <section className="flex w-full max-w-[600px] grow rounded-md bg-kw-maingray p-8 shadow-lg dark:bg-kw-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[1.25rem]"
      >
        <input
          type="text"
          placeholder="First name"
          className="dark:contactform contactformlte pl-1 placeholder:text-black dark:placeholder:text-white"
          {...register("FirstName")}
        />
        {errors.FirstName && (
          <p className="mt-[-1rem] text-kw-red">{`First Name: ${errors.FirstName.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Last Name"
          className="dark:contactform contactformlte pl-1 placeholder:text-black dark:placeholder:text-white"
          {...register("LastName")}
        />
        {errors.LastName && (
          <p className="mt-[-1rem] text-kw-red">{`Last Name: ${errors.LastName.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          className="dark:contactform contactformlte pl-1 placeholder:text-black dark:placeholder:text-white"
          {...register("Email")}
        />
        {errors.Email && (
          <p className="mt-[-1rem] text-kw-red">{`Email: ${errors.Email.message}`}</p>
        )}
        <input
          type="tel"
          placeholder="Phone number"
          className="dark:contactform contactformlte pl-1 placeholder:text-black dark:placeholder:text-white"
          {...register("PhoneNumber")}
        />
        {errors.PhoneNumber && (
          <p className="mt-[-1rem] text-kw-red">{`Phone: ${errors.PhoneNumber.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Property Address (optional)"
          className="dark:contactform contactformlte pl-1 placeholder:text-black dark:placeholder:text-white"
          {...register("PropertyAddress")}
        />

        <textarea
          {...register("Message")}
          placeholder="Message (optional)"
          className="dark:contactform contactformlte pl-1 placeholder:text-black dark:placeholder:text-white"
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
          <div className="flex gap-3">
            <input type="checkbox" id="Subscribe" {...register("Subscribe")} />
            <label htmlFor="Subscribe" className="dark:text-light-900">
              Subscribe to Email Campaign
            </label>
          </div>
          <ToastContainer />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
