"use client"
import Image from "next/image";
import { run } from "./prompt";
import UserInfo from "./components/UserInfo";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/about";
import { Payment } from "./components/Payment";
import Education from "./components/Education";
export default function Home() {
 
  
  return (
    <>
    <NavBar/>
    <Intro/>
    <About/>
    <Card/>
    <Payment/>
    </>
  );
}
