"use client"
import Image from "next/image";
import { run } from "./prompt";
import Card from "./components/Card";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
export default function Home() {
 
  
  return (
    <>
    <NavBar/>
    <Hero/>
    </>
  );
}
