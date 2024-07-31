"use client"
import Image from "next/image";
import { run } from "./prompt";

export default function Home() {
  function handleForm(e){
    e.preventDefault()
    const name = e.target[0].value
    const experience = e.target[1].value
    const skills = e.target[2].value
    const input = `my name ${name}, I'm from Pakistan, I am 27 years old, i have experience in ${experience} my main skills are ${skills} `
    run(input)
  }
  return (
    <form className="flex flex-col w-48" onSubmit={(e)=>handleForm(e)}>
      <label>name</label>
      <input name="name" className="border border-black"/>
      <label>experience</label>
      <input name="experience" className="border border-black"/>
      <label>skills</label>
      <textarea name="skills" className="border border-black"/>
      <button className="border border-black" type="submit">submit</button>
    </form>
  );
}
