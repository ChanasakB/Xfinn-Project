import Slide from "@/advantage/Slide";
import Package from "@/advantage/Package";
import { useState } from "react";

const Promotion = () => {
  const [employeeAmount, setEmployeeAmount] = useState("30");
  return (
    
    <div className={`w-[375px] md:w-[940px] m-auto`}>
      <div className={`flex flex-col m-auto items-center gap-[30px] md:gap-[35px] text-center w-[335px] md:w-[552px] md:justify-center`}>
        <div>
          <h2 className={`text-[#ED6238] text-[24px] md:text-[30px] font-bold `}>
            โปรโมชั่นราคาสุดพิเศษ เฉพาะเดือนนี้!
          </h2>
          <p className={`text-[16px] font-semibold`}>
            เลือกแพ็คเกจราคาตามความเหมาะสมของจำนวนพนักงานได้เลย
          </p>
        </div>
        <div className={`flex gap-[10px] justify-start items-start w-[344px] md:w-[344px] `}>
            <p className={`w-[30px] h-[30px] rounded-[100px] bg-[#4C71F1]  text-[#FFFFFF] text-[16px] font-semibold flex items-center justify-center`}>1</p>
            <h1 className={`text-[20px] text-[#4C71F1] font-bold`}>ระบุจำนวนพนักงานในบริษัท</h1>
        </div>
        <div>
          <Slide outSetEmployeeAmount={setEmployeeAmount}/>
        </div>
        <div className={`flex gap-[10px] justify-start items-start w-[344px] md:w-[344px]`}>
            <p className={`w-[30px] h-[30px] rounded-[100px] bg-[#4C71F1]  text-[#FFFFFF] text-[16px] font-semibold flex items-center justify-center`}>2</p>
            <h1 className={`text-[20px] text-[#4C71F1] font-bold `}>เลือกแผนบริการตามความต้องการ</h1>
        </div>
        <div>
          <Package recieveEmployee={employeeAmount}/>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
