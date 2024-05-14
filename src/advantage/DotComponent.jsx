import React from 'react'


export const DotComponent = ({setProgressStyle,activeStep,setActiveStep,setActiveImage,dots}) => {
  const handleDotClick = (id) => {
    setTimeout(()=>{
      setActiveStep(id);
    },600)
    setTimeout(()=>{
      setActiveImage(id - 1);
    },600)
    const compare = Math.abs(activeStep - id)
    if (activeStep < id) {
      if (compare === 2) {
        setProgressStyle("animation-0");
      } else if (compare === 1 && activeStep === 1) {
        setProgressStyle("animation-1-2");
      } else if (compare === 1 && activeStep === 2) {
        setProgressStyle("animation-full")
      }
    } else {
      if (compare === 2) {
        setProgressStyle("animation-0-revert");
      } else if (compare === 1 && activeStep === 3) {
        setProgressStyle("animation-full-revert");
      } else if (compare === 1 && activeStep === 2){
        setProgressStyle("animation-1-2-revert")
      }
    }
  };
  return (
    <div className={`mt-4 flex justify-center md:hidden `}>
          {dots.map((dot,index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 rounded-full  ${
                activeStep === dot.id ? "bg-[#4C71F1] " : "bg-[#C7C7C7]"
              } mr-2`}
              onClick={() => handleDotClick(dot.id)}
            />
          ))}
        </div>
  )
}
