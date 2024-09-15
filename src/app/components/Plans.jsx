import React from 'react'
import { CiCircleCheck } from "react-icons/ci";


export const Plans = () => {
  const plans = [
    {
      plan_title : "1 Resume",
      plan_price : "FREE",
      plan_description : "Lorem ipsum ok niasdasasasdasdasce",
      plan_features:{
        feature_1 : "lorem ipsum goti thge.",
        feature_2 : "lorem ipsum goti",
        feature_3 : "lorem ipsum ok got it.",
        feature_4 : "lorem ipsum ok got it.",
      }
      ,
      subscribed : true
    },
    {
      plan_title : "3 Resume",
      plan_price : "$4.99",
      plan_description : "Lorem ipsum ok niasdasasasdasdasce",
      plan_features:{
        feature_1 : "lorem ipsum goti thge.",
        feature_2 : "lorem ipsum goti",
        feature_3 : "lorem ipsum ok got it.",
        feature_4 : "lorem ipsum ok got it.",
      },
      subscribed : false
    },
    {
      plan_title : "5 Resume",
      plan_price : "$9.99",
      plan_description : "Lorem ipsum ok niasdasasasdasdasce",
      plan_features:{
        feature_1 : "lorem ipsum goti thge.",
        feature_2 : "lorem ipsum goti",
        feature_3 : "lorem ipsum ok got it.",
        feature_4 : "lorem ipsum ok got it.",
      },
      subscribed : false
    }
    
  ]

  
  return (
    <div className="bg-black h-screen w-full flex items-center justify-center gap-12 flex-wrap">
     
      <div className='w-full'>
        
      <h1 className='text-white text-6xl font-semibold text-center -mb-32'>Elevate <span className='text-center text-[#0088DD]'>Your Job Applications,</span> <br />
      Pick a Plan and Shine!</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className='absolute z-5' version="1.1" viewBox="0 0 2400 800">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
        <stop stopColor="hsl(205, 69%, 60%)" stopOpacity="1" offset="0%"></stop>
        <stop stopColor="hsl(205, 69%, 80%)" stopOpacity="1" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
      <path d="M 0 572 Q 600 -100 1200 400 Q 1800 900 2400 572" opacity="0.96"></path>
      <path d="M 0 550 Q 600 -100 1200 400 Q 1800 900 2400 550" opacity="0.30"></path>
      <path d="M 0 528 Q 600 -100 1200 400 Q 1800 900 2400 528" opacity="0.75"></path>
      <path d="M 0 506 Q 600 -100 1200 400 Q 1800 900 2400 506" opacity="0.57"></path>
      <path d="M 0 484 Q 600 -100 1200 400 Q 1800 900 2400 484" opacity="0.97"></path>
      <path d="M 0 462 Q 600 -100 1200 400 Q 1800 900 2400 462" opacity="0.86"></path>
      <path d="M 0 440 Q 600 -100 1200 400 Q 1800 900 2400 440" opacity="0.94"></path>
      <path d="M 0 418 Q 600 -100 1200 400 Q 1800 900 2400 418" opacity="0.13"></path>
      <path d="M 0 396 Q 600 -100 1200 400 Q 1800 900 2400 396" opacity="0.99"></path>
      <path d="M 0 374 Q 600 -100 1200 400 Q 1800 900 2400 374" opacity="0.87"></path>
      <path d="M 0 352 Q 600 -100 1200 400 Q 1800 900 2400 352" opacity="0.35"></path>
      <path d="M 0 330 Q 600 -100 1200 400 Q 1800 900 2400 330" opacity="0.65"></path>
      <path d="M 0 308 Q 600 -100 1200 400 Q 1800 900 2400 308" opacity="0.95"></path>
      <path d="M 0 286 Q 600 -100 1200 400 Q 1800 900 2400 286" opacity="0.62"></path>
      <path d="M 0 264 Q 600 -100 1200 400 Q 1800 900 2400 264" opacity="0.23"></path>
      <path d="M 0 242 Q 600 -100 1200 400 Q 1800 900 2400 242" opacity="0.52"></path>
      <path d="M 0 220 Q 600 -100 1200 400 Q 1800 900 2400 220" opacity="0.90"></path>
      <path d="M 0 198 Q 600 -100 1200 400 Q 1800 900 2400 198" opacity="0.37"></path>
      <path d="M 0 176 Q 600 -100 1200 400 Q 1800 900 2400 176" opacity="0.92"></path>
      <path d="M 0 154 Q 600 -100 1200 400 Q 1800 900 2400 154" opacity="0.40"></path>
      <path d="M 0 132 Q 600 -100 1200 400 Q 1800 900 2400 132" opacity="0.52"></path>
      <path d="M 0 110 Q 600 -100 1200 400 Q 1800 900 2400 110" opacity="0.36"></path>
      <path d="M 0 88 Q 600 -100 1200 400 Q 1800 900 2400 88" opacity="0.53"></path>
      <path d="M 0 66 Q 600 -100 1200 400 Q 1800 900 2400 66" opacity="0.94"></path>
      <path d="M 0 44 Q 600 -100 1200 400 Q 1800 900 2400 44" opacity="0.30"></path>
    </g>
  </svg>
      {plans.map((plan, index) => (
    <div key={index} className=' bg-white p-8 w-[300px] rounded-sm flex flex-col gap-4 z-10'>
      <h1 className='font-bold text-xl text-black'>{plan.plan_title}</h1>
      <h2 className='font-extrabold text-4xl'>{plan.plan_price}</h2>
      <p className='text-gray-500'>{plan.plan_description}</p>
      <ul className=''>
        
        <li className='flex items-center gap-2 font-bold'><CiCircleCheck/>{plan.plan_features.feature_1}</li>
        <li className='flex items-center gap-2 font-bold'><CiCircleCheck/>{plan.plan_features.feature_2}</li>
        <li className='flex items-center gap-2 font-bold'><CiCircleCheck/>{plan.plan_features.feature_3}</li>
        <li className='flex items-center gap-2 font-bold'><CiCircleCheck/>{plan.plan_features.feature_4}</li>
      </ul>
      <button className={`mt-8 p-4 shadow-lg hover:bg-opacity-70 hover:scale-105 transition-all duration-200 text-white rounded-sm font-bold ${plan.subscribed ? "bg-[#A4A3A3]" : "bg-blue-600"}`}>{plan.subscribed ? "Current Plan" : "Upgrade Plan"}</button>
    </div>))}
    </div>
  )
}
