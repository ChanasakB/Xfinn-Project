import Image from "next/image";

const Examines = () => {
  return (
    <div className={`w-[335px] h-[373px] md:w-[455px] md:h-[373px] bg-[#ffffff] rounded-[10px] drop-shadow-md order-1`}>
      <div className={`flex flex-col justify-center items-center pt-[20px]`}>
      <h3 className={`text-[20px] text-[#4C71F1] font-bold pb-[22px]`}>ตรวจสอบวันลาผ่านหน้าโปรไฟล์</h3>
      <Image src='/sectionthree/leave.svg' width={293} height={301} alt="icon"/>
      </div>
    </div>
  )
}

export default Examines;
