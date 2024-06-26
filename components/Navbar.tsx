"use client";
import { useState } from "react";
import Link from "next/link";
import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { useGlobalAuth } from "@/context/AuthProvider";
import { useAppSelector } from "@/Redux-toolkit/hooks";

const Navbar = () => {
      const pizza = useAppSelector((state) => state.cart.cart);

  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useGlobalAuth();
  console.log("🚀 ~ file: Navbar.tsx:13 ~ user:", user?.user);
  const admin=user?.user.role==='admin'
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 text-black border-b-2 bg-bgColor border-textColor ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h2 className="text-3xl font-bold text-textColor">HotPizza</h2>
          </div>
          <div className="hidden md:flex md:space-x-4 ">
            {user ? (
              <div>
                {isSearch ? (
                  <div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="px-4 border border-gray-800 rounded-sm outline-none w-96 h-9 bg-bgColor2 focus:border-red-700"
                      placeholder="Search product"
                    />
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col items-center gap-4 lg:flex-row">
                      <Link href="/" className="text-lg font-semibold">
                        Home
                      </Link>

                      <Link href="/pizza" className="text-lg font-semibold">
                        pizza
                      </Link>
                     {
                        admin &&(
                          <Link href="/createPizza" className="text-lg font-semibold">
                        create Pizza
                      </Link>

                        )
                     }
                      <button
                        type="button"
                        className="px-6 py-2 text-white bg-textColor"
                        onClick={() => logoutUser()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Link href="/login">
                  <span className="text-lg font-semibold">Login</span>
                </Link>
                <Link href="/register">
                  <span className="text-lg font-semibold">Register</span>
                </Link>
              </div>
            )}
          </div>
          <div className="flex md:hidden">
            <button className="text-3xl text-textColor" onClick={toggleMenu}>
              <BiMenu />
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            {user ? (
              <div className="flex flex-row items-center gap-2">
                <button type="button" onClick={toggleSearch}>
                  <BiSearch size={25} className="mr-4" />
                </button>
                <Link href="/user" className="text-lg font-semibold">
                  <BiUser size={25} className="mr-4" />
                </Link>
                <div className="relative me-4">
                  <Link href="/cart" className="text-lg font-semibold">
                    <BiCart size={25} />
                    <span className="absolute top-0 flex items-center justify-center w-5 h-5 text-sm text-white bg-gray-800 rounded-full left-6">
                      {pizza.length}
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          {user ? (
            <div className="flex flex-col items-start gap-4 pb-3 md:flex-row ps-5">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="/user" className="text-lg font-semibold">
                User
              </Link>
              <Link href="/pizza" className="text-lg font-semibold">
                pizza
              </Link>
              <Link href="/createPizza" className="text-lg font-semibold">
                Create Pizza
              </Link>
              <button
                type="button"
                className="px-6 py-2 text-white bg-textColor"
                onClick={() => logoutUser()}
              >
                Logout
              </button>
              <div className="flex flex-row items-center gap-2">
                {/* <button type="button" onClick={toggleSearch}>
                  <BiSearch size={25} className="mr-4" />
                </button> */}
                <Link href="/user" className="text-lg font-semibold">
                  <BiUser size={25} className="mr-4" />
                </Link>
                <div className="relative me-4">
                  <Link href="/cart" className="text-lg font-semibold">
                    <BiCart size={25} />
                    <span className="absolute top-0 flex items-center justify-center w-5 h-5 text-sm text-white bg-gray-800 rounded-full left-6">
                      {pizza.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-start gap-4 pb-3 md:flex-row ps-5">
              <Link href="/login">
                <span className="text-lg font-semibold">Login</span>
              </Link>
              <Link href="/register">
                <span className="text-lg font-semibold">Register</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
