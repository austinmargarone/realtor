import React from "react";

interface Props {
  beds: number;
  baths: number;
  sqft: string;
  lot: number;
  sale: string;
  address: string;
  color: string;
  slug: string;
  status: string;
}

const PropertyListing = ({
  color,
  beds,
  baths,
  sqft,
  lot,
  sale,
  address,
  slug,
  status,
}: Props) => {
  return (
    <main className="breakpoint mx-auto my-[1.25rem] flex flex-col gap-[0.625rem]">
      {/* Image */}
      <section>
        {/* <div className="mx-auto flex h-fit justify-center">
          <Image
            src={image}
            alt={"slug"}
            width={1000}
            height={1000}
            className="w-full max-w-[720px] rounded-[.75rem] shadow-lg"
          />
        </div> */}
      </section>
      {/* Property Details */}
      <section>
        <div className="flex flex-col">
          <h1 className="h4 mb-[.625rem]">{address}</h1>
          <div className="flex w-fit rounded-sm bg-black px-[15px] py-1 shadow-md">
            <div className="my-auto mr-[12px] flex h-3 w-3 rounded-full bg-kw-red"></div>
            <p className="text-white">
              {status} <span> - ${sale}</span>
            </p>
          </div>
          <div className="my-[.625rem] flex gap-3">
            <p className="outlineborder shadow-md dark:bg-kw-maingray dark:text-black">
              {beds}
              <span> Beds</span>
            </p>
            <p className="outlineborder bg-kw-darkgray text-white shadow-md dark:bg-kw-maingray dark:text-black">
              {baths}
              <span> Bath</span>
            </p>
            <p className="outlineborder bg-kw-darkgray text-white shadow-md dark:bg-kw-maingray dark:text-black">
              {sqft}
              <span> sqft</span>
            </p>
          </div>
          <div className="flex gap-3">
            <p className="outlineborder bg-kw-darkgray text-white shadow-md dark:bg-kw-maingray dark:text-black">
              {lot}
              <span> Acres</span>
            </p>
            <p className="outlineborder bg-kw-darkgray text-white shadow-md dark:bg-kw-maingray dark:text-black">
              <span>Built </span>
              {"year"}
            </p>
            <p className="outlineborder bg-kw-darkgray text-white shadow-md dark:bg-kw-maingray dark:text-black">
              {"garage"}
              <span> Cars</span>
            </p>
          </div>
        </div>
      </section>
      {/* Property Description */}
      <section>
        <p className="body dark:bodydark">{"description"}</p>
      </section>
      {/* Property Tour */}
      <section>
        {/* {embed ? (
          <iframe
            width="853"
            height="480"
            className="mx-auto flex h-[500px] w-[300px] rounded-md shadow-lg sm:w-[100%] lg:h-[600px]"
            src={embed}
          ></iframe>
        ) : (
          <></>
        )} */}
      </section>
      <section>
        <div className="body dark:bodydark flex flex-col">
          <span>Listing Agent: Austin Margarone</span>
          <span>MLS# {"MLS"}</span>
        </div>
      </section>
    </main>
  );
};

export default PropertyListing;
