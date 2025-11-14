import banner from "../picture/Burger-banner.jpg"
import React from "react";
export default function Banner() {
  return (
    <section className="relative w-full h-80 md:h-[450px]">
      <img
        src={banner}
        alt="Delicious Burger"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to <span className="text-red-500">Burger Heaven</span>
        </h1>
        <p className="text-lg md:text-xl mt-3 drop-shadow-md">
          All Type of Burger Available Here🍔🍟
        </p>
      </div>
    </section>
  );
}
