"use server";
import React from "react";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();



export async function GeminiFetch(form_data) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  // deconstructing step 1
  const { fullName, email, country, phone_number, age, languages } =
    form_data?.personalInfo;
  const { workExperience, skills } = form_data?.experience;
  const { bio } = form_data?.aboutYourself;

  // // Step 1 // Personal Info
  // const first_name = "yossef"
  // const last_name = "yossef"
  // const age = "18"
  // const email = "wd@gmail.com"
  // const country = "india"
  // const phone_number = "0652652"
  // const languages = "english , spanish"
  // // Step 2 education
  // const education = "College" || "university" || "bootcamp"
  // const education_duration = ""
  // const bcs = ""
  // const skills = ""
  // // step 3 experience
  // // company name , role , duration
  // const companies_worked = {}
  // // step 4 links
  // const links = {linkedin : "url" , portfolio: "url",github:"link"}
  const prompt = `
    Create a professional resume for an individual with the following details:

    Personal Information:
    Name: ${fullName}
    Email: ${email}
    Country: ${country}
    Phone Number: ${phone_number}
    Age: ${age}
    Languages: ${languages}

    Work Experience:
    ${workExperience}

    Skills:
    ${skills}

    About:
    ${bio}

    Please generate a comprehensive resume that highlights this individual's experience, skills, and personal attributes. The resume should be tailored to their background and potential career goals.

    Return the result in the following JSON format:

    {
      "personalInfo": {
        "name": "${fullName}",
        "email": "${email}",
        "country": "${country}",
        "phoneNumber": "${phone_number}",
        "age": ${age},
        "languages": ${JSON.stringify(languages)}
      },
      "professionalSummary": "A concise professional summary based on the provided information",
      "workExperience": [
        {
          "position": "Job Title",
          "company": "Company Name",
          "duration": "Start Date - End Date",
          "responsibilities": ["Responsibility 1", "Responsibility 2", "Responsibility 3"]
        }
      ],
      "skills": ${JSON.stringify(skills)},
      "additionalInfo": "Any relevant information extracted from the bio that doesn't fit in other sections"
    }

    Ensure that the work experience section is detailed and reflects the information provided in the '${workExperience}' field. The skills section should list all the skills provided. The professional summary should be crafted based on the overall profile, including information from the bio. If there's any relevant information in the bio that doesn't fit into the other sections, include it in the additionalInfo field.
  `;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const res = await result.response.text();
  console.log(await res);
  // const text = res.text();
  // console.log(text);
}
