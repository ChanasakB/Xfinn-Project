import { Request } from "@/advantage/Request";
import { CarouselBar } from "@/advantage/Carousel";

const SectionTwo = () => {
  
  return (
    <div className={`pb-[30px]`}>
      <div
        className={`flex flex-col md:flex-row justify-center items-center w-[335px] h-[62px] md:w-[552px] md:h-[39px] m-auto `}
      >
        <h2 className={`text-[24px] md:text-[30px] text-[#ED6238] font-bold text-center`}>
          จุดเด่น 
        </h2 >
        <h2 className={`text-[24px] md:text-[30px] text-[#ED6238] font-bold text-center`}>และรายละเอียดแต่ละเมนู</h2>

      </div>
      <div className={`w-[335]  md:max-w-[940px] m-auto pt-[30px] flex  flex-col items-center  md:flex-row  md:items-start gap-[30px]`}>
        <Request />
        <CarouselBar />
      </div>
    </div>
  );
};

export default SectionTwo;
