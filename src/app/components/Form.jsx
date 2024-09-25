"use client";
import { useEffect, useState } from "react";
import { run } from "../prompt";
import { useUserInfo } from "@/store/userInfo";
import { motion, AnimatePresence } from "framer-motion";
import { GeminiFetch } from "../utils/AiFetch";

export default function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    experience: {},
    aboutYourself: {},
  });
  useEffect(()=>{console.log(step)},[step])
  const handleChange = (step, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      
      GeminiFetch(formData);
    }
  };

  const formVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <div className="h-[80vh] flex items-center">
    <div className="max-w-md  border mx-auto p-6 bg-white rounded-lg shadow-xl">
      {step > 3 ? <h1>Loading...</h1> : 

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="step1"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4">
              Step 1: Personal Information
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                handleChange("personalInfo", "fullName", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                handleChange("personalInfo", "email", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="age"
              placeholder="Age"
              onChange={(e) =>
                handleChange("personalInfo", "age", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="country"
              placeholder="Country"
              onChange={(e) =>
                handleChange("personalInfo", "country", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="phone_number"
              placeholder="Phone Number"
              onChange={(e) =>
                handleChange("personalInfo", "phone_number", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
           
            <input
              type="languages"
              placeholder="Languages"
              onChange={(e) =>
                handleChange("personalInfo", "languages", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </motion.form>
        )}

        {step === 2 && (
          <motion.form
            key="step2"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4">Step 2: Experience</h2>
            <textarea
              placeholder="Work Experience"
              onChange={(e) =>
                handleChange("experience", "workExperience", e.target.value)
              }
              className="w-full p-2 border rounded"
            ></textarea>
            <input
              type="text"
              placeholder="Skills"
              onChange={(e) =>
                handleChange("experience", "skills", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </motion.form>
        )}

        {step === 3 && (
          <motion.form
            key="step3"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4">Step 3: About Yourself</h2>
            <textarea
              placeholder="Tell us about yourself"
              onChange={(e) =>
                handleChange("aboutYourself", "bio", e.target.value)
              }
              className="w-full p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      }
    </div>
    </div>
  );
}

