"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-slideshow-image";
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
  year: number;
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

const customArrowStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#fff", // Adjust color as needed
  cursor: "pointer",
};

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
  year,
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
          <Fade
            transitionDuration={100}
            autoplay={false}
            canSwipe={true}
            prevArrow={
              <div
                className="my-auto flex h-[5rem] w-[5rem] items-center rounded-full text-white"
                style={{ ...customArrowStyle }}
              >
                <Image
                  src={"/icons/icons8-double-left-64white.png"}
                  alt={"Arrow Left"}
                  width={50}
                  height={50}
                  className="h-[1.5rem] w-[1.5rem] shadow-lg md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem]"
                />
              </div>
            }
            nextArrow={
              <div
                className="my-auto flex h-[5rem] w-[5rem] items-center justify-end rounded-full text-white"
                style={{ ...customArrowStyle }}
              >
                <Image
                  src={"/icons/icons8-double-right-64.png"}
                  alt={"Arrow Right"}
                  width={50}
                  height={50}
                  className="h-[1.5rem] w-[1.5rem] shadow-lg md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem]"
                />
              </div>
            }
          >
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
          </Fade>
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
          <div className="flex sm:flex-col">
            <div className="my-[.625rem] flex w-[150px] flex-wrap gap-3 sm:w-full sm:flex-none">
              <p className="outlineborder flex gap-1  bg-kw-ltgray pr-[.5rem] text-black shadow-md dark:bg-kw-maingray dark:text-black">
                <Image
                  src={"/icons/icons8-bedroom-48.png"}
                  alt={"Icon8 Bedroom"}
                  width={50}
                  height={50}
                  className="m-auto h-[1rem] w-[1rem]"
                />
                {beds}
                <span> Beds</span>
              </p>
              <p className="outlineborder flex gap-1  bg-kw-ltgray pr-[.5rem] text-black shadow-md dark:bg-kw-maingray dark:text-black">
                <Image
                  src={"/icons/icons8-bathroom-50.png"}
                  alt={"Icon8 Bathroom"}
                  width={50}
                  height={50}
                  className="m-auto h-[1rem] w-[1rem]"
                />
                {baths}
                <span> Bath</span>
              </p>
              <p className="outlineborder flex gap-1 bg-kw-ltgray pr-[.5rem] text-black shadow-md dark:bg-kw-maingray dark:text-black">
                <Image
                  src={"/icons/icons8-size-30.png"}
                  alt={"Icon8 Sqft"}
                  width={50}
                  height={50}
                  className="m-auto h-[1rem] w-[1rem]"
                />
                {sqft}
                <span> sqft</span>
              </p>
            </div>
            <div className="my-[.625rem] flex w-[150px] flex-wrap gap-3 sm:w-full sm:flex-none">
              <p className="outlineborder flex gap-1  bg-kw-ltgray pr-[.5rem] text-black shadow-md dark:bg-kw-maingray dark:text-black">
                <Image
                  src={"/icons/icons8-land-64.png"}
                  alt={"Icon8 Acres"}
                  width={50}
                  height={50}
                  className="m-auto h-[1rem] w-[1rem]"
                />
                {lot}
                <span> Acres</span>
              </p>
              <p className="outlineborder flex gap-1  bg-kw-ltgray pr-[.5rem] text-black shadow-md dark:bg-kw-maingray dark:text-black">
                <Image
                  src={"/icons/icons8-calendar-50.png"}
                  alt={"Icon8 Calendar"}
                  width={50}
                  height={50}
                  className="m-auto h-[1rem] w-[1rem]"
                />
                <span>Built </span>
                <span>{year}</span>
              </p>
              <p className="outlineborder flex gap-1  bg-kw-ltgray pr-[.5rem] text-black shadow-md dark:bg-kw-maingray dark:text-black">
                <Image
                  src={"/icons/icons8-garage-100.png"}
                  alt={"Icon8 Garage"}
                  width={50}
                  height={50}
                  className="m-auto h-[1rem] w-[1rem]"
                />
                {garage}
                <span> Cars</span>
              </p>
            </div>
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
          <span>Listing Agent: Greg Miller</span>
          <span>MLS# {MLS}</span>
        </div>
      </section>
    </main>
  );
};

export default PropertyListing;
