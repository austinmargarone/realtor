import React from "react";

const Cover = () => {
  return (
    <main
      className="flex min-h-screen  items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/roccover.jpg')" }}
    >
      <h1 className="h1 z-10 text-4xl text-white">Your Beach Ave Rental</h1>
    </main>
  );
};

export default Cover;
