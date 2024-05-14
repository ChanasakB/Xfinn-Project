import Image from "next/image";
import { useState } from "react";

const Section = () => {
  const [choice, setChoice] = useState([
    {
      topic: "แจ้งวันลาออนไลน์ \n ผ่าน LINE OA",
      Img: "/icon.svg",
    },
    {
      topic: "อนุมัติวันลา \n ออนไลน์",
      Img: "/icon1.svg",
    },
    {
      topic: "จัดการแผนก \n ต่างๆ",
      Img: "/icon2.svg",
    },
    {
      topic: "จัดการข้อมูล \n เพื่อนร่วมงาน",
      Img: "/icon3.svg",
    },
    {
      topic: "จัดการวันหยุด \n และปฏิทินวันหยุด",
      Img: "/icon4.svg",
    },
  ]);
  return (
    <div className={`max-w-[940px] m-auto `}>
      <div>
        <p
          className={`flex justify-center text-[16px] font-semibold text-center pb-[10px]`}
        >
          ภาพรวมของ Vannila
        </p>
        <h2
          className={`flex justify-center text-[24px] md:text-[30px] font-bold text-center w-[335px] md:w-[552px] m-auto text-[#ED6238] pb-[40px]`}
        >
          โปรแกรม HR บริหารงานบุคคล <br /> ใช้ง่าย ใช้งานผ่าน LINE OA
        </h2>
      </div>
      <div className={`flex flex-wrap gap-[30px] justify-center md:justify-between md:items-center pb-[40px] md:pb-[60px] cursor-pointer`}>
      {choice.map((ele,i) => (
          <div key={i} className="flex flex-col  items-center">
            <div
              className={`w-[92px] h-[92px] rounded-[100px] bg-[#4C71F1] flex items-center justify-center `}
            >
              <Image src={ele.Img} width={40} height={40} alt="icon" />
            </div>
            <p
              className={`w-[164px] pt-[10px] text-[16px] font-semibold text-center whitespace-pre-line`}
            >
              {ele.topic}
            </p>
          </div> 
      ))}
      </div>
    </div>
  );
};

export default Section;
