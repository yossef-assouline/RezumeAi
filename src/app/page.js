"use client"
import Image from "next/image";
import { run } from "./prompt";
import UserInfo from "./components/UserInfo";
import { NavBar } from "./components/NavBar";
import { Intro } from "./components/Intro";
import { About } from "./components/about";
import { Payment } from "./components/Payment";
import Education from "./components/Education";
export default function Home() {
 
  
  return (
    <>
    {/* <NavBar/>
    <Intro/>
    <About/> */}
    {/* <UserInfo /> */}
    <Education />
    {/* <Payment/> */}
    </>
  );
}
