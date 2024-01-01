import React from "react";
import propertyData from "../../data/property.json";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="breakpoint mx-auto my-[1.25rem]">
      <h1>Portfolio</h1>
      <div>
        {propertyData.map((item) => (
          <li key={item.id}>
            <a>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.list}</p>
            </a>
          </li>
        ))}
      </div>
    </section>
  );
};

export default page;
