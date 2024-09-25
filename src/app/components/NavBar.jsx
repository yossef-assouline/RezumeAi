import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-20 w-full flex justify-between items-center ">
      <Link href={"/"}>
      <Image
        width={200}
        height={150}
        src="/logo-no-background-reszume-Ai.png"
        className="h-10 ml-8"
      ></Image>
      </Link>
      <div className="flex gap-4 mr-8 items-center">
        <Link className="font-semibold" href={"plans"}>Plans</Link>
        <button className="rounded-md bg-black text-white font-bold p-1.5">Sign in</button>
      </div>
    </nav>
  );
};
