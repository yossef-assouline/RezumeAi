import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const KEY = process.env.API_KEY

const genAI = new GoogleGenerativeAI('AIzaSyCXj1E3VDz6CjmMgbmo_YXRhXUY6H7kLzI'); 

export async function run(userInput) {
    // Step 1 // Personal Info
    const first_name = "yossef"
    const last_name = "yossef"
    const age = "18"
    const email = "wd@gmail.com"
    const country = "india"
    const phone_number = "0652652"
    const languages = "english , spanish"
    // Step 2 education
    const education = "College" || "university" || "bootcamp"
    const education_duration = ""
    const bcs = ""
    const skills = ""
    // step 3 experience
    // company name , role , duration 
    const companies_worked = {} 
    // step 4 links 
    const links = {linkedin : "url" , portfolio: "url",github:"link"}
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `I want you to make a porfolio acording to the input I will provide you: ${userInput},
    I want you to organize to json format like so: my details, experience, education, etc...`;
    const result = await model.generateContent(prompt);
    const res = await result.response;
    
    const text = res.text();
    console.log(text);
}

