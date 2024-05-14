import Image from "next/image";
import { images } from "./Carousel";


export const NextClick = ({progress,setProgress,setProgressStyle,activeStep,setActiveStep,setActiveImage}) => {
    const handleNext = () => {
        if (progress === 0) {
          setProgress(50);
          setProgressStyle("animation-1-2");
        } else if (progress === 50) {
          setProgress(100);
          setProgressStyle("animation-full");
        }
        setTimeout(() => {
          if (activeStep === 3) {
            setActiveStep(3);
          } else {
            setActiveStep(activeStep + 1);
          }
        }, 600);
        setTimeout(() => {
          setActiveImage((nextActiveImage) =>
            nextActiveImage === images.length - 1
              ? images.length - 1
              : nextActiveImage + 1
          );
        }, 600);
      };
  return (
    <div className={`pr-[40px]  pt-[248px]`}>
        <Image
          src="/carousel/next.svg"
          width={50}
          height={50}
          onClick={handleNext}
          className="hidden md:block"
          alt="Next"
        />
      </div>
  )
}
