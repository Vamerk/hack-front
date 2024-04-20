import React from "react";
import { GiAtomicSlashes } from "react-icons/gi";

export const Universities = () => {
  const benefit = [
    {
      name: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex arcu, laoreet sit amet tristique eu, fringilla sit amet ex.",
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex arcu, laoreet sit amet tristique eu",
    },
    {
      name: "Lorem ipsum",
      description:
        "Proin vulputate ex purus, at lacinia quam laoreet ut. "
    },
    {
      name: "Lorem ipsum",
      description: "Phasellus tincidunt, nunc et hendrerit placerat, nunc mauris tincidunt urna, imperdiet consequat ligula dolor a risus.",
    },
  ];
  return (
    <>
      <div className="bg-[url(/landing/bg2.png)] bg-no-repeat bg-cover">
        <div className="container mx-auto max-w-[700px] px-5 py-20 flex flex-col">
          <h2 className=" text-5xl  text-black  self-center text-center md:text-6xl ">
            ВУЗам
          </h2>
          <ul className="mt-10 grid gap-x-5 gap-y-5 grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] ;">
            {benefit.map((items, index) => {
              return (
                <li
                  key={index}
                  className="flex  gap-x-2 gap-y-1 flex-col text-black"
                >
                  <div className="flex gap-x-2 items-center text-sm md:text-base ">
                    <GiAtomicSlashes /> {items.name}
                  </div>
                  <p className="text-xs md:sm">{items.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};