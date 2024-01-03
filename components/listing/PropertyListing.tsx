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
    <main className="breakpoint mx-auto my-[1.25rem]">
      {/* Image */}
      <section>
        <div className="mx-auto flex h-fit justify-center">
          <Image
            src={image}
            alt={slug}
            width={1000}
            height={1000}
            className="w-full max-w-[720px]"
          />
        </div>
      </section>
      {/* Property Details */}
      <section>
        <div className="flex flex-col">
          <div>{address}</div>
          <div>
            <p>
              {status} <span> - ${sale}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <p>
              {beds}
              <span> Beds</span>
            </p>
            <p>
              {baths}
              <span> Bath</span>
            </p>
            <p>
              {sqft}
              <span> sqft</span>
            </p>
          </div>
          <div className="flex gap-3">
            <p>
              {lot}
              <span> Acres</span>
            </p>
            <p>
              <span> Built</span>
              {year}
            </p>
            <p>
              {garage}
              <span> Cars</span>
            </p>
          </div>
        </div>
      </section>
      {/* Property Description */}
      <section>
        <p>{description}</p>
      </section>
      {/* Property Features */}
      <section></section>
      {/* Property Tour */}
      <section>
        {embed ? (
          <iframe
            width="853"
            height="480"
            className="mx-auto flex h-[500px] w-[300px] sm:w-[100%] lg:h-[600px]"
            src={embed}
          ></iframe>
        ) : (
          <></>
        )}
      </section>
      <section>
        <div className="flex flex-col">
          <span>Listing Agent: Austin Margarone</span>
          <span>MLS# {MLS}</span>
        </div>
      </section>
    </main>
  );
};

export default PropertyListing;
