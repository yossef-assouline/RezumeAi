import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavBar = () => {
  const pathname = usePathname()
  return (
    
    <nav className="h-20 w-full flex justify-between items-center ">
      <Image
        width={200}
        height={150}
        src="/logo-no-background-reszume-Ai.png"
        className="h-10 ml-8"
      ></Image>
    </nav>
  );
};
