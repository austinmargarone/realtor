import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator | Austin Margarone",
  description:
    "Austin Margarone's resoruces for buyers and sellers to calculate mortgage payments.",
  keywords:
    "Austin Margarone, Realtor, Real Estate, Rochester, NY, New York, Mortgage Calculator, Payment, Interest, Principal, Insurance, Mortgage Insurance, Buy, Sell, Rent",
};

const page = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <iframe
        title="Iframewidgetcode"
        src="https://www.primcomortgage.com/calculator/iframe-widget?HighchartColumnInterest=262526&HighchartColumnPrincipal=b40101&HighchartPieInterest=262526&HighchartPiePrincipal=b40101&HighchartPieInsurance=b40101&HighchartPieMortgageInsurance=dddad7&ButtonColor=b40101&HighlightTextColor=b40101&HighlightTextColorLight=b40101&HeaderColor=b40101&NavigateMode=true&CalcMode=Mortgage&Footnote=true&AmortTab=true&lo=false&lo-name= &lo-title=&lo-nmls=&lo-location=, &lo-email=&lo-phone=&lo-imageurl=https://cloud.cmgfi.com/dvbdysuf5/image/upload/v1571538212/CMG_Web_Resources/LO_Images/photo-placeholder.png&lo-applynow=&lo-mysite=&lo-logo="
        width="100%"
        height="1000"
        className="border bg-white pt-[2.5rem]"
      ></iframe>
    </>
  );
};

export default page;
