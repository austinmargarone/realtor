import Listing from "@/components/shared/Listing";

export default function Home() {
  return (
    <main>
      <div className="h1-bold"> Hello World! </div>
      <div className="flex gap-[2rem]">
        <Listing />
        <Listing />
      </div>
    </main>
  );
}
