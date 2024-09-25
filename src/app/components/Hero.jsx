import React from "react";
import Image from "next/image";
import { Container } from "./styles/Container.styled";
import { MainButton } from "./MainButton";
import Link from "next/link";
export const Hero = () => {
  return (
    <>
      <Container className="bg-gray-50">
        <div className="wrapper">
          <div className="aside-hero">
            <h1 className="h1-hero">
              UNLOCK YOUR <br></br> CAREER <br />
              POTENTIAL WITH <br />
              <span className="h1-color">
                AI-POWERED <br /> RESUMES.
              </span>
            </h1>
            <p className="p-hero">
              Our AI-powered resume builder is <br />designed to help you craft a
              professional, <br />personalized resume in <br />minutes.
            </p>
            <Link href={"form"}><MainButton text={"Get Started"}/></Link> 
          </div>

          
          <Image
            width={650}
            height={500}
            src={"/robot-test.png"}
            className="hero-image"
          ></Image>
        </div>
      </Container>
    
    </>
  );
};
