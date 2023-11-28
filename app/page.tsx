import Contact from "@/components/home/Contact";
import ListingCards from "@/components/home/ListingCards";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <main>
      <section className="mx-auto bg-kw-maingray py-[2.5rem] dark:bg-kw-lessblack">
        <Reviews />
      </section>
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
