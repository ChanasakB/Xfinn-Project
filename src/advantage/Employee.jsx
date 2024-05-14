import Image from "next/image";
import { useState } from "react";

const Employee = () => {
  const [circleEmployee, setCircleEmployee] = useState([
    {
      topic: "วันลา \n คงเหลือ",
      Img: "/sectionthree/icon6.svg",
    },
    {
      topic: "โปรไฟล์ \n ส่วนตัว",
      Img: "/sectionthree/icon7.svg",
    },
    {
      topic: "ประวัติ \n การทำงาน",
      Img: "/sectionthree/icon8.svg",
    },
  ]);

  const [circleEmployeeTwo, setCircleEmployeeTwo] = useState([
    {
      topic: "แก้ไข \n ข้อมูล",
      Img: "/sectionthree/icon9.svg",
    },
    {
      topic: "ระดับสิทธิ์ \n การใช้งาน",
      Img: "/sectionthree/icon10.svg",
    },
  ]);
  return (
    <div className={`w-[335px] h-[647px] md:w-[455px] md:h-[664px] bg-[#ffffff] rounded-[10px] drop-shadow-md p-[30px] md:p-[40px] flex flex-col gap-[20px] md:gap-[52px] order-2 md:order-3`}>
      <div>
        <div className={`pb-[30px] md:pb-[38px]`}> 
          <h3 className={`text-[24px] text-[#ED6238] font-bold pb-[10px]`}>Employee’s Profile</h3>
          <p className={`text-[16px] font-semibold`}>
            หน้าโปรไฟล์ส่วนตัว เลือกดูจำนวนวันลาคงเหลือ แยกตามประเภทต่างๆ
            และดูประวัติการทำงานของบริษัท ได้ตลอดเวลาผ่าน LINE OA
          </p>
        </div>
        <div className={`flex justify-start items-center cursor-pointer gap-[20px] md:gap-[32px]`}>
          {circleEmployee.map((ele,i) => (
            <div key={i} className="flex flex-col items-center w-[80px]">
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
      <div>
          <div className={`pb-[38px]`}>
          <h3 className={`text-[24px] text-[#ED6238] font-bold pb-[10px]`}>Employee’s Management</h3>
          <p className={`text-[16px] font-semibold`}>
          จัดการ แก้ไขข้อมูลเพื่อนร่วมงาน กำหนดสิทธิ์ในการใช้งานของระบบ HR 
          </p>
          </div>
          <div className={`flex justify-start items-center cursor-pointer gap-[20px] md:gap-[32px]`}>
          {circleEmployeeTwo.map((ele,i) => (
            <div key={i} className="flex flex-col items-center w-[80px]">
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
    </div>
  );
};

export default Employee;
