import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <ul>
          <li>
            <Link href="/portfolio/901-long-pond-road">901 Long Pond Road</Link>
          </li>
          <li>
            <Link href="/portfolio/609-wild-mallard-trail">
              609 Wild Mallard Trail
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
