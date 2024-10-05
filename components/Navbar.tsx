import Link from "next/link";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <header>
      <nav className="z-50 flex w-full items-center justify-between gap-5 bg-white p-6 px-[1.25rem] shadow-lg dark:bg-black lg:px-[3rem] xl:px-[5rem]">
        <Link href="/" passHref>
          <p className="lg:h4 font-extrabold text-black dark:text-white">
            Greg Miller&apos;s Website
          </p>
        </Link>
        <div className="flex items-center">
          <ul className="z-50 hidden gap-[1.25rem] pr-[2rem] font-bold text-black dark:text-white lg:flex">
            {/* Other menu items */}
            <Link href="/" passHref>
              <li>Home</li>
            </Link>
            <Link href="/portfolio" passHref>
              <li>Portfolio</li>
            </Link>
            <Link href="/contact" passHref>
              <li>Contact</li>
            </Link>

            <Link href="/blog" passHref>
              <li>Blog</li>
            </Link>
            <Link href="/disclosures" passHref>
              <li>Forms</li>
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
