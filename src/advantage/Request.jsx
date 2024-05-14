import { useState } from "react";
import Image from "next/image";

export const Request = () => {
        const [circle, setCircle] = useState([
          {
            topic: "แจ้งวันลา",
            Img: "/icon.svg",
          },
          {
            topic: "อนุมัติวันลา",
            Img: "/icon1.svg",
          },
          {
            topic: "กำหนดวันลา",
            Img: "/icon5.svg",
          },
        ]);
  return (
    <div
          className={`w-[335px] md:w-[358px] h-[393px] md:h-[423px] p-[30px] md:p-[40px] flex flex-col bg-[#FFFFFF] rounded-[10px] drop-shadow-md`}
        >
          <div className={`flex flex-col gap-[10px] w-[279px] m-auto pb-[20px] md:pb-[37px] `}>
            <h2 className={`text-[24px] text-[#ED6238] font-bold `}>
              Leave Request & Management
            </h2>
            <p className={`text-[16px] font-medium`}>
              จัดการวันลา และแจ้งวันลาออนไลน์ผ่าน LINE OA
            </p>
            <p className={`text-[16px] font-medium text-[#8B8B8B]`}>
              ระบบวันลาออนไลน์ ่ส่งคำขอวันลาทาง LINE OA
              และอนุมัติวันลาจากที่ใดก็ได้ ยังสามารถจัดการวันลา และประเภทต่างๆ
              ได้อย่างอิสระ
            </p>
          </div>
          <div className={`flex justify-between items-center cursor-pointer`}>
            {circle.map((ele,i)=> (
              <div key={i} className="flex flex-col justify-between items-center w-[80px]">
              <div
                className={`w-[67px] h-[67px] rounded-[100px] bg-[#4C71F1] flex items-center justify-center `}
              >
                <Image src={ele.Img} width={30} height={30} alt="icon" />
              </div>
              <p
                className={`pt-[10px] text-[14px] font-semibold text-center whitespace-pre-line`}
              >
                {ele.topic}
              </p>
            </div> 
            ))}
          </div>
        </div>
  );
};
