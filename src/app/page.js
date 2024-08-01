"use client"
import Image from "next/image";
import { run } from "./prompt";
import Card from "./components/Card";
import { NavBar } from "./components/NavBar";
import { Intro } from "./components/Intro";
import { About } from "./components/about";
import { Payment } from "./components/Payment";
export default function Home() {
 
  
  return (
    <>
    <NavBar/>
    <Intro/>
    <About/>
    <Payment/>
    </>
  );
}
