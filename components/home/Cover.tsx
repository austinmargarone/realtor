import React from "react";

const Cover = () => {
  return (
    <main
      className="flex min-h-screen w-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/roccover.jpg')" }}
    >
      <h1 className="h1 z-10 text-4xl text-white hover:text-5xl hover:text-black">
        Your Local Realtor
      </h1>
    </main>
  );
};

export default Cover;
