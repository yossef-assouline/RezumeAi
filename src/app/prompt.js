import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const KEY = process.env.API_KEY

const genAI = new GoogleGenerativeAI(KEY); 

async function run(userInput) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `I want you to make a porfolio acording to the input I will provide you: ${userInput},
    I want you to organize to json format like so: my details, experience, education, etc...`;
    const result = await model.generateContent(prompt);
    const res = await result.response;
    // console.log(res)
    const text = res.text();
    console.log(text);
}

run("my name Hody katan, I'm from Pakistan, I am 27 years old, finished a computer science degree in ZUBUR uni in 2020, I currently work at Meta for 2 years now as sales representive, I have experience in Dark magic from temu, React, Node, MongoDB Im looking for a fullstack developer role at a high tech company, ");