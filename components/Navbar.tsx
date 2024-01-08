import Link from "next/link";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <header>
      <nav className="z-50 flex w-full items-center justify-between gap-5 bg-white p-6 px-[1.25rem] shadow-lg dark:bg-black lg:px-[3rem] xl:px-[5rem]">
        <Link href="/">
          <p className="lg:h4 font-extrabold text-black dark:text-white">
            Austin Margarone | Realtor
          </p>
        </Link>
        <div className="flex items-center">
          <ul className="hidden gap-[1.25rem] pr-[2rem] font-bold text-black dark:text-white lg:flex">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link href="/contact">
              <li>Contact Me</li>
            </Link>
            <Link href="/tools">
              <li>Tools</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/disclosures">
              <li>Disclosures</li>
            </Link>
          </ul>
          <Theme />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
