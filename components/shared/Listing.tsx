"use client";
import React from "react";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Button } from "../ui/button";

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

const Listing = ({
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
    <main>
      <div className="w-fit min-w-[350px] max-w-[450px] rounded-[1rem] border bg-white p-[.5rem] dark:border-kw-darkgray dark:bg-kw-black">
        <div>
          <Slide
            autoplay={false}
            prevArrow={
              <div style={{ ...customArrowStyle, left: "10px" }}>{"<"}</div>
            }
            nextArrow={
              <div style={{ ...customArrowStyle, right: "10px" }}>{">"}</div>
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
          </Slide>
        </div>
        <div className="p-[1rem] dark:text-white">
          <Link href={`/portfolio/${slug}`}>
            <div className="flex gap-2 font-bold">
              <div
                className="my-auto flex h-3 w-3 rounded-full"
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
                <span className="font-bold">{lot}</span> acre lot
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[60%]">{address}</p>
              <Button className="w-fit border border-black text-black hover:animate-pulse dark:bg-kw-red dark:text-white">
                View Listing
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Listing;
