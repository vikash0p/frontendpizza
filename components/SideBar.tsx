'use client'
import { FaBars } from "react-icons/fa";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { navLinks } from "@/utils/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SideBar() {
    const pathname=usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="hover:text-red-500">
          <FaBars size={25} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-bgColor">
        <SheetHeader>
          <SheetTitle>
            <Image
              src={"/logo.png"}
              alt="logo image "
              width={500}
              height={250}
              className=" w-64 h-full mix-blend-darken "
              priority={true}
              sizes="256px"
            />
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-start gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl ${
                    pathname === link.href ? "text-textColor" : "text-black"
                  }`}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
