import Listing from "@/components/shared/Listing";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto my-[1.25rem]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-[1.25em] flex items-center justify-between md:mx-[5rem] lg:mx-[7.5rem]">
          <h2 className="h2">My Listings</h2>
          <Link href="/listings">
            <button className="button dark:buttondark">Porfoilo</button>
          </Link>
        </div>
        <div className="m-[2rem] flex flex-wrap justify-center gap-[2rem]">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </section>
    </main>
  );
}
