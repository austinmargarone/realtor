"use client";
import React from "react";
import Link from "next/link";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Button } from "../ui/button";
import Image from "next/image";

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
  imageSlideshow: any;
}

const divStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
};

const customArrowStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "24px",
  color: "#fff", // Adjust color as needed
  cursor: "pointer",
};

const SmallListing = ({
  color,
  beds,
  baths,
  sqft,
  lot,
  sale,
  address,
  slug,
  status,
  imageSlideshow,
}: Props) => {
  return (
    <main className="w-full px-2.5">
      <div className="w-full rounded-[1rem] border bg-white p-[.5rem] shadow-lg dark:border-kw-darkgray dark:bg-kw-black">
        <div>
          <Fade
            transitionDuration={100}
            autoplay={false}
            canSwipe={true}
            prevArrow={
              <div style={{ ...customArrowStyle }}>
                <Image
                  src={"/icons/icons8-chevron-left-30.png"}
                  alt={"Left Arrow"}
                  width={25}
                  height={25}
                  className="shadow-lg"
                />
              </div>
            }
            nextArrow={
              <div style={{ ...customArrowStyle }}>
                <Image
                  src={"/icons/icons8-chevron-right-30.png"}
                  alt={"Right Arrow"}
                  width={25}
                  height={25}
                  className="shadow-lg"
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
        <div className="p-[1rem] dark:text-white">
          <Link href={`/portfolio/${slug}`}>
            <div className="flex gap-2 font-bold">
              <div
                className="my-auto flex size-3 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span>{status}</span>
              <span>-</span>
              <span>${sale}</span>
            </div>
            <div className="my-[.1rem] flex justify-start gap-[1rem]">
              <p>
                <span className="font-bold">{beds}</span> bed
              </p>
              <p>
                <span className="font-bold">{baths}</span> bath
              </p>
              <p>
                <span className="font-bold">{sqft}</span> sqft
              </p>
              <p>
                <span className="font-bold">{lot}</span> acre
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="flex flex-start">{address}</p>
              <Button className="mt-[.25rem] w-full border border-black bg-kw-red text-white hover:animate-pulse dark:bg-kw-red dark:text-white">
                View Listing
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SmallListing;
