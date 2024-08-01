import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavBar = () => {
  const pathname = usePathname()
  return (
    
    <nav className="h-20 w-full bg-[#b7245c] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 flex justify-between items-center ">
      <Image
        width={200}
        height={150}
        src="/logo-no-background-reszume-Ai.png"
        className="h-10 ml-8"
      ></Image>
      <ul className="flex gap-4 font-bold w-64 mr-8">
        {pathname === "/" ? "" : <Link className="" href={"/"}>Home</Link>}
        <Link href={"/"}>Get Started</Link>
        <Link href={"/contact"}>Contact us</Link>
      </ul>
    </nav>
  );
};
