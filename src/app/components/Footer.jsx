import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Footer = () => {
  return (
    <>
<hr />
    <div className='h-24 w-full flex justify-center flex-wrap items-center'>
    <Link href={"/"}>
      <Image
        width={200}
        height={150}
        src="/logo-no-background-reszume-Ai.png"
        className="h-10 ml-8"
      ></Image>
      </Link>
      <ul className='flex w-full gap-4 justify-center font-semibold'>
        <li ><Link href={"demo"}>Terms</Link></li>
        <li ><Link href={"demo"}>Plans</Link></li>
        <li ><Link href={"demo"}>Privacy</Link></li>
      </ul>
      
    </div>
    </>
  )
}
