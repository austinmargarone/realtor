import Image from "next/image";
import React from "react";

interface Props {
  slug: string;
  id: string;
  title: string;
  address: string;
  image: string;
  description: string;
  list: string;
  sale: string;
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  year: number;
  garage: number;
  tour: string;
  embed: string;
  status: string;
  MLS: string;
}

const PropertyListing = ({
  slug,
  id,
  title,
  address,
  image,
  description,
  list,
  sale,
  beds,
  baths,
  sqft,
  lot,
  year,
  garage,
  tour,
  embed,
  status,
  MLS,
}: Props) => {
  return (
    <main className="breakpoint mx-auto my-[1.25rem] flex flex-col gap-[0.625rem]">
      {/* Image */}
      <section>
        <div className="mx-auto flex h-fit justify-center">
          <Image
            src={image}
            alt={slug}
            width={1000}
            height={1000}
            className="w-full max-w-[720px] rounded-[.75rem] shadow-lg"
          />
        </div>
      </section>
      {/* Property Details */}
      <section>
        <div className="flex flex-col">
          <h1 className="h4 mb-[.625rem]">{address}</h1>
          <div className="w-fit rounded-sm bg-black px-5 shadow-md">
            <p className="text-white">
              {status} <span> - ${sale}</span>
            </p>
          </div>
          <div className="my-[.625rem] flex gap-3">
            <p className="outlineborder shadow-md">
              {beds}
              <span> Beds</span>
            </p>
            <p className="outlineborder shadow-md">
              {baths}
              <span> Bath</span>
            </p>
            <p className="outlineborder shadow-md">
              {sqft}
              <span> sqft</span>
            </p>
          </div>
          <div className="flex gap-3">
            <p className="outlineborder shadow-md">
              {lot}
              <span> Acres</span>
            </p>
            <p className="outlineborder shadow-md">
              <span> Built</span>
              {year}
            </p>
            <p className="outlineborder shadow-md">
              {garage}
              <span> Cars</span>
            </p>
          </div>
        </div>
      </section>
      {/* Property Description */}
      <section>
        <p className="body dark:bodydark">{description}</p>
      </section>
      {/* Property Tour */}
      <section>
        {embed ? (
          <iframe
            width="853"
            height="480"
            className="mx-auto flex h-[500px] w-[300px] rounded-md shadow-lg sm:w-[100%] lg:h-[600px]"
            src={embed}
          ></iframe>
        ) : (
          <></>
        )}
      </section>
      <section>
        <div className="body dark:bodydark flex flex-col">
          <span>Listing Agent: Austin Margarone</span>
          <span>MLS# {MLS}</span>
        </div>
      </section>
    </main>
  );
};

export default PropertyListing;
