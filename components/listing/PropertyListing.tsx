"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface SlideImage {
  asset: {
    url: string;
  };
  alt: string;
  caption?: string;
}

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
  MLS: string;
  embed: string;
  description: string;
  garage: string;
  imageSlideshow: any;
}

interface DivStyle {
  display: string;
  alignItems: string;
  justifyContent: string;
  backgroundSize: string;
  backgroundPosition: string;
  position: "relative";
  paddingBottom: string;
}

const divStyle: DivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
};

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
  MLS,
  embed,
  description,
  garage,
  imageSlideshow,
}: Props) => {
  return (
    <main className="breakpoint mx-auto my-[1.25rem] flex flex-col gap-[0.625rem]">
      {/* Image */}
      <section>
        <div>
          <Slide autoplay={false}>
            {imageSlideshow.map((slideImage: SlideImage, index: number) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.asset.url})`,
                  }}
                >
                  <span className="hidden">{slideImage.alt}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>
      {/* Property Details */}
      <section>
        <div className="flex flex-col">
          <h1 className="h4 mb-[.625rem]">{address}</h1>
          <div className="flex w-fit rounded-sm bg-black px-[15px] py-1 shadow-md">
            <div
              className="my-auto mr-[12px] flex h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
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
