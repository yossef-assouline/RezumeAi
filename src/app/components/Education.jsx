import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Education = () => {
    const [text, setText] = useState("")
  return (
    <>
      <form className="mt-16 bg-[#15172b] box-border w-80 p-5  h-fit" onSubmit={(e) => handleForm(e)}>
        <div className="text-[#eee] text-4xl font-semibold mt-[30px]">
          Step 2:
        </div>
        <div className="text-[#eee] text-base font-semibold mt-2.5">
          Education:
        </div>
        <div className="h-[50px] relative w-full mt-5">
          <label className="text-white">School:</label>
          <input
            id="education"
            className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 border-0 outline-0"
            type="text"
            placeholder="Ex: Boston University"
          />
        </div>
        <div className="h-[50px] relative w-full mt-[40px]">
            <label className="text-white">Degree:</label>
          <DropdownMenu>
            <DropdownMenuTrigger className={`bg-[#303245] box-border text-${text === "" ? "[#9C9EAC]" : "white"} text-lg h-fit min-h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0 text-left`}>{text || "Ex: Bachelor's"}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setText("Bachelor of Arts (BA)")}>Bachelor of Arts (BA)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Science (BSc)")}>Bachelor of Science (BSc)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Applied Arts (BAA)")}>
                Bachelor of Applied Arts (BAA)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Applied Science (BAS)")}>
                Bachelor of Applied Science (BAS)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Architecture (B.Arch.)")}>
                Bachelor of Architecture (B.Arch.)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Business Administration (BBA)")}>
                Bachelor of Business Administration (BBA)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Fine Arts (BFA)")}>Bachelor of Fine Arts (BFA)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setText("Bachelor of Science in Nursing (BSN)")}>
                Bachelor of Science in Nursing (BSN)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        <div className="h-[50px] relative w-full mt-[40px]">
            <label className="text-white">Field of study:</label>
          <input
            id="field-of-study"
            className="bg-[#303245] box-border text-[#eee] text-lg h-full w-full pt-1 pb-0 px-5 rounded-xl border-0 outline-0"
            type="text"
            placeholder="Ex: Business"
          />
          
        </div>
        <button
          type="text"
          className="bg-[#08d] box-border text-[#eee] cursor-pointer text-lg h-[50px] text-center w-full mt-[38px] rounded-xl border-0 active:bg-[#06b]">submit</button>
      </form>
    </>
  );
};

export default Education;
