"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CopyNumber = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const notify = () =>
    toast("Number copied to clipboard!", {
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
    <>
      <button
        onClick={() => {
          copyText("5855015690");
          notify();
        }}
      >
        <ToastContainer />
        <p className="text-black dark:text-white">
          Cell #: <span className="">585-555-5555</span>
        </p>
      </button>
    </>
  );
};

export default CopyNumber;
