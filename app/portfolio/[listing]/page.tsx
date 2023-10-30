import React from "react";

type Params = {
  listing: string;
};

type Props = {
  params: Params;
};

const Page: React.FC<Props> = ({ params }) => {
  return <div>Dynamic Listings {params.listing}</div>;
};

export default Page;
