"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

interface ToolOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: ToolOption[];
  onItemSelected: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onItemSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="group relative" onMouseEnter={() => setIsOpen(true)}>
      <Link href="/tools" passHref>
        <p className="cursor-pointer">Tools</p>
      </Link>
      {isOpen && (
        <ul
          className="absolute mt-2 space-y-2 border border-gray-300 bg-white dark:border-gray-700 dark:bg-black"
          onMouseLeave={() => setIsOpen(false)}
        >
          {options.map((tool: ToolOption) => (
            <Link href={tool.value} key={tool.value} passHref>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-kw-ltgray dark:hover:bg-kw-red"
                onClick={() => onItemSelected(tool.value)}
              >
                {tool.label}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar: React.FC = () => {
  const toolOptions: ToolOption[] = [
    { value: "/tools/charts", label: "Market Charts" },
    { value: "/tools/mortgage", label: "Mortgage Calculator" },
    { value: "/tools/matterport", label: "Matterport Services" },
    // Add more tools as needed
  ];

  const handleToolSelect = (value: string) => {
    // Do something with the selected value if needed
  };

  return (
    <header>
      <nav className="z-50 flex w-full items-center justify-between gap-5 bg-white p-6 px-[1.25rem] shadow-lg dark:bg-black lg:px-[3rem] xl:px-[5rem]">
        <Link href="/" passHref>
          <p className="lg:h4 font-extrabold text-black dark:text-white">
            Austin Margarone | Realtor
          </p>
        </Link>
        <div className="flex items-center">
          <ul className="hidden gap-[1.25rem] pr-[2rem] font-bold text-black dark:text-white lg:flex">
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
            {/* Use the Dropdown component for "Tools" */}
            <Dropdown options={toolOptions} onItemSelected={handleToolSelect} />

            <Link href="/blog" passHref>
              <li>Blog</li>
            </Link>
            <Link href="/disclosures" passHref>
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
