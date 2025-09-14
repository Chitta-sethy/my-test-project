"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex h-20 items-center justify-between px-4 md:px-20 lg:px-20">
      <div className="flex items-center">
        {/* <Link href="/" alt="Link to Mo Medicine Home Page">
          <Image
            src="/mo-medicine-logo.svg"
            alt="Medicine Logo"
            height={230}
            width={440}
            className="h-16 w-full object-contain md:h-20"
          />
        </Link> */}
        <Link href="/">
          <h2 className="text-lg font-semibold text-green-500 md:text-2xl">
            MediService
          </h2>
          <h3 className="text-[10px] font-medium md:text-sm">
            YOUR OWN PHARAMACY
          </h3>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-7">
        <ul className="text-md flex space-x-7">
          <li>
            <Link href="/" className="hidden lg:flex">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hidden lg:flex">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hidden lg:flex">
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          <Link href="#" className="hidden lg:flex">
            <Button>
              <Store />
              Find Store
            </Button>
          </Link>
        </div>
        {/* <ul className="flex text-md space-x-7">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">About Us</Link>
          </li>
          <li>
            <Link href="/contact-sale">Contact Us</Link>
          </li>
        </ul> */}
        <div className="flex basis-1/4 justify-end md:basis-full lg:hidden">
          <Button
            variant="default"
            className="inline-block w-auto bg-white px-2 py-1 text-gray-700"
            onClick={toggleMenu}
          >
            <Menu />
          </Button>
        </div>{" "}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex items-start">
            <div className="relative flex h-full w-full flex-col items-start bg-white p-6 shadow-lg">
              <Button
                variant="secondary"
                className="absolute right-7 top-8"
                onClick={toggleMenu}
              >
                <X size={32} />
              </Button>

              <ul className="mt-10 space-y-5">
                <li>
                  <Link href="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={toggleMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="" onClick={toggleMenu}>
                    <Button>
                      <Store />
                      Find Store
                    </Button>
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" onClick={toggleMenu}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="p-6 text-md w-44 rounded-xl hover:bg-white hover:text-black"
                    >
                      CONTACT SALES
                    </Button>
                  </Link>
                </li> */}
              </ul>
              {/* <div className="flex mt-10 space-x-8">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/facebook.png"
                    alt="facebook"
                    height={30}
                    width={30}
                    className="w-auto h-10"
                  />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/insta.png"
                    alt="instagram"
                    height={30}
                    width={30}
                    className="w-auto h-10"
                  />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/titweer.png"
                    alt="titweer"
                    height={30}
                    width={30}
                    className="w-auto h-10"
                  />
                </Link>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
