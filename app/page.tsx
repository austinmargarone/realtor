import Contact from "@/components/home/Contact";
import ListingCards from "@/components/home/ListingCards";

export default function Home() {
  return (
    <main>
      {/* Porfolio */}
      <section className="mx-auto max-w-[1200px] py-[2.5rem]">
        <ListingCards />
      </section>
      {/* contact */}
      <section className="bg-kw-maingray py-[2.5rem] dark:bg-kw-lessblack">
        <Contact />
      </section>
    </main>
  );
}
