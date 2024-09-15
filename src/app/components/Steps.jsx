import React, { useState, useRef, useEffect } from "react";

export const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const steps = [
    {
      title: "Tell us about yourself",
      description:
        "By clicking on a sponsor, you can see many information about the sponsor and the kind of YouTubers they work with. Save it to your favorites to keep track of it.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Choose a template",
      description: "Setting up your first project",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "download your resume in PDF",
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className=' text-6xl font-semibold text-center mb-16'>Step by Step Guide resumes <br /><span className='text-center text-[#0088DD]'> a few clicks away</span> <br />
     </h1>
      <div className="w-full rounded-lg  flex justify-center">
        <div className="flex p-4 items-center gap-2 w-2/3 ">
          <div className="w-2/3 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`border-l ring-1 ring-gray-200 dark:ring-gray-800 shadow flex flex-col justify-center  mb-4 p-4 rounded-[5px] w-[30rem] cursor-pointer transition-all duration-1000 ease-out ${
                  index === currentStep
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-gray-100 hover:bg-blue-50 "
                }`}
                onClick={() => handleStepClick(index)}
                style={{
                  overflow: "hidden",
                }}
              >
                <h3 class="flex items-center gap-2 text-xl font-medium mb-2">
                  <kbd
                    class={`inline-flex  ${
                      index === currentStep
                        ? "bg-[#0088DD] border-2 border-blue-500"
                        : "bg-[#969696] opacity-40"
                    } items-center justify-center text-white dark:text-gray-300 h-5 min-w-[20px] text-[11px] px-1 rounded  font-medium font-sans  dark:bg-gray-800  ring-gray-300 dark:ring-gray-700`}
                  >
                    {index + 1}
                  </kbd>{" "}
                  {step.title}
                </h3>

                <p
                  className={`text-sm text-gray-600 mt-2 transition-opacity duration-1000 ${
                    index === currentStep ? "opacity-100" : "hidden"
                  }`}
                >
                  {step.description}
                </p>
                {index === currentStep && (
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div
                      className="bg-blue-600 h-1 rounded-full transition-all duration-1000 ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
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

export default Steps;
