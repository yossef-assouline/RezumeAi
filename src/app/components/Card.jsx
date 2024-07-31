"use client"
import { run } from "../prompt";
import Image from "next/image";

export default function Card() {
  function handleForm(e){
    e.preventDefault()
    const name = e.target[0].value
    const experience = e.target[1].value
    const skills = e.target[2].value
    const input = `my name ${name}, I'm from Pakistan, I am 27 years old, i have experience in ${experience} my main skills are ${skills} `
    run(input)
  }
  return (
    <>
    <Image width={600} height={300} src="/logo-no-background-reszume-Ai.png" className="m-0 m-auto"></Image>
    <h2></h2>
    <form className="bg-[#15172b] box-border h-[500px] w-80 p-5 rounded-[20px]" onSubmit={(e)=>handleForm(e)}>
    
      <div className="text-[#eee] text-4xl font-semibold mt-[30px]">Step 1:</div>
      <div className="text-[#eee] text-base font-semibold mt-2.5">Personal info:</div>
      <div className="h-[50px] relative w-full  mt-10">
        <input id="firstname" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder=" " />
        <div className="bg-[#15172b] h-5 absolute translate-y-0 transition-transform duration-200 w-[76px] rounded-[10px] left-5 -top-5"></div>
        <label for="firstname" className="text-[#65657b] leading-[14px] pointer-events-none absolute origin-[0_50%] transition-transform duration-[200ms,color] delay-200 left-5 top-5
    ">First name</label>
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="lastname" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder=" " />
        <div className="bg-[#15172b] h-5 absolute translate-y-0 transition-transform duration-200 w-[76px] rounded-[10px] left-5 -top-5"></div>
        <label for="lastname" className="text-[#65657b] leading-[14px] pointer-events-none absolute origin-[0_50%] transition-transform duration-[200ms,color] delay-200 left-5 top-5">Last name</label>
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="email" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder=" " />
        <div className="bg-[#15172b] h-5 absolute translate-y-0 transition-transform duration-200 w-[76px] rounded-[10px] left-5 -top-5 w-[50px]"></div>
        <label for="email" className="text-[#65657b] leading-[14px] pointer-events-none absolute origin-[0_50%] transition-transform duration-[200ms,color] delay-200 left-5 top-5">Email</label>
      </div>
      <button type="text" className="bg-[#08d] box-border text-[#eee] cursor-pointer text-lg h-[50px] text-center w-full mt-[38px] rounded-xl border-0 active:bg-[#06b]">submit</button>
    
      
    </form>
    </>
  );
}
