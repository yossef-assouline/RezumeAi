import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const KEY = process.env.API_KEY

const genAI = new GoogleGenerativeAI('AIzaSyCXj1E3VDz6CjmMgbmo_YXRhXUY6H7kLzI'); 

export async function run(userInput) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `I want you to make a porfolio acording to the input I will provide you: ${userInput},
    I want you to organize to json format like so: my details, experience, education, etc...`;
    const result = await model.generateContent(prompt);
    const res = await result.response;
    // console.log(res)
    const text = res.text();
    console.log(text);
}

