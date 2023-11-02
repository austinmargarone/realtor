import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed z-50 flex w-full items-center justify-between gap-5 bg-black p-6 sm:px-[10rem]">
        <Link href="/">
          <p className="h2-bold text-white">Austin Margarone | Realtor</p>
        </Link>
        <ul className="flex gap-[1.25rem] pr-[2rem] font-bold text-white">
          <Link href="/about">
            <li>About Me</li>
          </Link>
          <Link href="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/tools">
            <li>Tools</li>
          </Link>
          <Link href="/contact">
            <li>Contac Me</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/disclosures">
            <li>Disclosures</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
