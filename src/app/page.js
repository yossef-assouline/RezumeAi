"use client"
import Image from "next/image";
import { run } from "./prompt";
import UserInfo from "./components/UserInfo";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Steps } from "./components/Steps";
import { Plans } from "./components/Plans";
import { Footer } from "./components/Footer";


export default function Home(){
  return (
    <>
    <NavBar/>
    <Hero/>
    <Steps/>
    <Plans/>
    <Footer/>
    </>
    
    )
}
