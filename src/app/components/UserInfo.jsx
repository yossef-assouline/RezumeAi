"use client"
import { useEffect } from "react";
import { run } from "../prompt";
import { useUserInfo } from "@/store/userInfo";

export default function userInfo() {

  const { fname, lname, email, age, address, phoneNumber } = useUserInfo();
  const setFirstName = useUserInfo(state => state.setFirstName);
  const setLastName = useUserInfo(state => state.setLastName);
  const setEmail = useUserInfo(state => state.setEmail);
  const setAge = useUserInfo(state => state.setAge);
  const setAddress = useUserInfo(state => state.setAddress);
  const setPhoneNumber = useUserInfo(state => state.setPhoneNumber);

  useEffect(() => {
    console.log(fname, lname, email, Number(age), address, phoneNumber);
  }, [fname, lname, email, age, address, phoneNumber])

  function handleForm(e){
    e.preventDefault()
    const fname1 = e.target[0]
    const lname1 = e.target[1].value
    const email1 = e.target[2].value
    const age1 = e.target[3].value
    const address1 = e.target[4].value
    const phoneNumber = e.target[5].value
    // const input = `my name ${name}, I'm from Pakistan, I am 27 years old, i have experience in ${experience} my main skills are ${skills} `
    // run(input)

    setFirstName(fname1);
    setLastName(lname1);
    setEmail(email1);
    setAge(age1);
    setAddress(address1);
    setPhoneNumber(phoneNumber);
  }

  return (
    <>
    <form className="mt-16 bg-[#15172b] box-border w-80 p-5 rounded-[20px] h-fit" onSubmit={(e)=>handleForm(e)}>
      <div className="text-[#eee] text-4xl font-semibold mt-[30px]">Step 1:</div>
      <div className="text-[#eee] text-base font-semibold mt-2.5">Personal info:</div>
      <div className="h-[50px] relative w-full  mt-10">
        <input id="firstname" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder="First Name" />
           
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="lastname" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder="Last Name" />
        
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="email" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder="Email" />
        
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="age" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder="Age" />
        
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="address" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder="Address" />
        
      </div>
      <div className="h-[50px] relative w-full mt-[30px]">
        <input id="phone number" className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0" type="text" placeholder="Phone Number" />
        
      </div>
      <button type="text" className="bg-[#08d] box-border text-[#eee] cursor-pointer text-lg h-[50px] text-center w-full mt-[38px] rounded-xl border-0 active:bg-[#06b]">submit</button>
    

    </form>
    </>
  );
}
