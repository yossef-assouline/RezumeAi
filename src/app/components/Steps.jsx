import React from "react";
import { StepsWrapper } from "./styles/StepsWrapper.styled";
import { useState, useEffect, useRef } from "react";
export const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const steps = [
    {
      title: "Step 1",
      description: "Getting started with our SaaS platform",
      videoUrl: "video-test.mp4",
    },
    {
      title: "Step 2",
      description: "Setting up your first project",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Step 3",
      description: "Advanced features and customization",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      console.log(progress);
      if (progress === 100 && currentStep !== 2) {
        setCurrentStep(currentStep + 1);
      }
      if (currentStep === 3) {
        setCurrentStep(0);
      }
      setProgress(progress);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [currentStep]);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(0);
    }
  };

  const handleRestartStep = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      setProgress(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black ">
      <h1 className="text-white text-5xl mb-12" >Place Holder</h1>
      <div className="w-full  rounded-lg shadow-md overflow-hidden  flex  justify-evenly">
        <div className="flex p-4 border border-black items-center ">
          <div className="w-2/3 ml-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`mb-4 p-4 rounded-lg w-2/3 cursor-pointer transition-colors duration-200 ${
                  index === currentStep
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-gray-100 hover:bg-blue-50"
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div
                  key={index}
                  className={`w-5 p-3 h-5 text-white flex items-center justify-center  ${
                    index === currentStep
                      ? "bg-[#0088DD] border-2 border-blue-500"
                    : "bg-[#969696] hover:bg-blue-50"
                  }}`}
                >
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index === currentStep ? (
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div className="w-2/3 ml-8">
            <video
              ref={videoRef}
              src={steps[currentStep].videoUrl}
              className="w-full h-auto rounded-lg"
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};
