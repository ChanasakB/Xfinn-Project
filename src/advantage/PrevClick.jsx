import Image from "next/image";

export const PrevClick = ({progress,setProgress,setProgressStyle,activeStep,setActiveStep,setActiveImage}) => {
    const handlePrev = () => {
        if (progress === 100) {
          setProgress(50);
          setProgressStyle("animation-full-revert");
        } else if (progress === 50) {
          setProgress(0);
          setProgressStyle("animation-1-2-revert");
        }
        if (activeStep === 1) {
          setActiveStep(1);
        } else {
          setActiveStep(activeStep - 1);
        }
        setActiveImage((prevActiveImage) =>
          prevActiveImage === 0 ? 0 : prevActiveImage - 1
        );
      };
  return (
    <div className={`pl-[40px] pt-[248px]`}>
        <Image
          src="/carousel/Prev.svg"
          width={50}
          height={50}
          onClick={handlePrev}
          className="hidden md:block"
          alt="Prev"
        />
      </div>
  )
}
