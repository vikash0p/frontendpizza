"use client";
import { useState } from "react";
import Link from "next/link";
import { BiSearch, BiUser } from "react-icons/bi";
import { IoCartSharp } from "react-icons/io5";
import { useAppSelector } from "@/Redux-toolkit/hooks";
import Image from "next/image";
import { SideBar } from "./SideBar";
import { navLinks } from "@/utils/data/data";
import { usePathname } from "next/navigation";
import SearchPizza from "./PizzaComponents/SearchPizza";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux-toolkit/store";

const Navbar = () => {
  const pathname = usePathname();

  const pizza = useAppSelector((state) => state.cart.cart);
  const user = useSelector((state: RootState) => state.user.user);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  return (
    <nav className="bg-bgColor text-black  sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 hidden lg:block ">
            <Image
              src={"/logo.png"}
              alt="logo image "
              width={500}
              height={250}
              className=" w-64 h-full mix-blend-darken "
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="lg:hidden w-full flex  justify-between items-center">
            <div className="">
              <SideBar />
            </div>
            <div className="">
              <SearchPizza />
            </div>
            <div className="">
              <div className="relative me-4">
                <Link
                  href="/cart"
                  className="text-lg font-semibold"
                  aria-label="Shopping Cart"
                >
                  <IoCartSharp size={26} />
                  <span className="absolute -top-2 left-5 w-4 h-4 bg-red-500 text-white flex items-center justify-center rounded-full text-xs">
                    {pizza.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Navigation links for large screens */}
          <div
            className={`hidden lg:flex md:space-x-4 overflow-hidden transition-all duration-400 ease-linear ${
              isSearch === true ? " opacity-80 hidden" : " opacity-100 block"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl ${
                    pathname === link.href ? "text-textColor" : ""
                  } ${
                    user?.success === true &&
                    (link.href === "/login" || link.href === "/register")
                      ? "hidden"
                      : ""
                  }  `}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons (Search, User, Cart) */}
          <div className="hidden lg:flex md:items-center space-x-4">
            <div className="flex flex-row items-center space-x-4">
              {/* Search bar with transition */}
              <div
                className={`${
                  isSearch
                    ? "w-96 scale-100 opacity-100"
                    : "w-0 scale-75 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out transform origin-right`}
              >
                <SearchPizza />
              </div>

              {/* Search button */}
              <button
                type="button"
                onClick={toggleSearch}
                aria-label={isSearch ? "Close search" : "Open search"}
                className="focus:outline-none text-gray-800 hover:text-gray-900 transition-colors duration-200"
              >
                <BiSearch size={26} className="mr-2" />
              </button>

              {/* User profile link */}
              {user?.message && (
                <Link
                  href="/user"
                  className="text-lg font-semibold hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2"
                  aria-label="User Profile"
                >
                  <span className="font-semibold text-2xl bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
                    {user.user.fullName.charAt(0)}
                  </span>
                </Link>
              )}

              {/* Cart link */}
              <div className="relative">
                <Link
                  href="/cart"
                  className="text-lg font-semibold hover:text-gray-900 transition-colors duration-200 relative flex items-center"
                  aria-label="Shopping Cart"
                >
                  <IoCartSharp size={26} className="text-black" />
                  <span className="absolute -top-2 -right-3 w-5 h-5 bg-red-500 text-white flex items-center justify-center rounded-full text-xs">
                    {pizza.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
