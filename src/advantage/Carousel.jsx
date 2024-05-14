import Image from "next/image";
import { useState } from "react";
import { PrevClick } from "./PrevClick";
import { NextClick } from "./NextClick";
import { DotComponent } from "./DotComponent";

export const images = [
  { src: "/carousel/step-leave-type 1.svg", alt: "Image 1" },
  { src: "/carousel/step-approved.svg", alt: "Image 2" },
  { src: "/carousel/step-approve-alert.svg", alt: "Image 3" },
];
export const dots = [
  { color: "gray-400", id: 1 },
  { color: "gray-400", id: 2 },
  { color: "gray-400", id: 3 },
];
export const CarouselBar = () => {
  const [progress, setProgress] = useState(0);
  const [progressStyle, setProgressStyle] = useState("w-0");
  const [activeImage, setActiveImage] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div
      className={`w-[335px] h-[483px] md:w-[552px] md:h-[423px] bg-[#DEEDFF] rounded-[10px] drop-shadow-md flex justify-between`}
    >
      <PrevClick progress={progress} setProgress={setProgress}  setProgressStyle={setProgressStyle} activeStep={activeStep} setActiveStep={setActiveStep} setActiveImage={setActiveImage}/>

      <div className={`flex flex-col justify-around md:justify-between `}>
        <div
          className={` border-b-[10px] border-white w-[208px]  mt-[45px] mx-auto relative `}
        >
          <div
            className={`border-b-[10px] border-[#4C71F1] ${progressStyle} absolute`}
          />
          <div
            className={`top-5 left-0 -translate-x-1/2 -translate-y-1/2  absolute flex flex-col justify-center items-center`}
          >
            <div
              className={`w-[30px] h-[30px] bg-[#4C71F1] rounded-[100%] flex justify-center items-center`}
            >
              <Image
                src={`/carousel/iconn1.${activeStep}.svg`}
                width={15}
                height={15}
                alt="1"
              />
            </div>
            <p
              className={`text-[16px]  w-[80px] text-center font-semibold mt-[10px] text-[#4C71F1]`}
            >
              แจ้งวันลา
            </p>
          </div>
          <div
            className={`top-5 left-[50%] -translate-x-1/2 -translate-y-1/2  absolute flex flex-col justify-center items-center `}
          >
            <Image
              src={`/carousel/iconn2.${activeStep}.svg`}
              width={30}
              height={30}
              alt="1"
            />
            <p
              className={`text-[16px] w-[90px] text-center font-semibold mt-[10px] ${
                activeStep >= 2 ? "text-[#4C71F1]" : ""
              }`}
            >
              อนุมัติวันลา
            </p>
          </div>
          <div
            className={`top-5 left-[100%] -translate-x-1/2 -translate-y-1/2  absolute flex flex-col justify-center items-center `}
          >
            <Image
              src={`/carousel/iconn3.${activeStep}.svg`}
              width={30}
              height={30}
              alt="1"
            />
            <p
              className={`text-[16px] w-[80px] text-center font-semibold mt-[10px] ${
                activeStep === 3 ? "text-[#4C71F1]" : ""
              }`}
            >
              พักร้อน!
            </p>
          </div>
        </div>
        <div>
          <Image
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            width={293}
            height={301}
            className={`pt-[30px] md:pt-[0]`}
          />
        </div>
        <DotComponent setProgressStyle={setProgressStyle} activeStep={activeStep} setActiveStep={setActiveStep} setActiveImage={setActiveImage} dots={dots}/>
      </div>
      <NextClick progress={progress} setProgress={setProgress}  setProgressStyle={setProgressStyle} activeStep={activeStep} setActiveStep={setActiveStep} setActiveImage={setActiveImage}/>
    </div>
  );
};
