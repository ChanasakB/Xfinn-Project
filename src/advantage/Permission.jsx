import Image from "next/image";

const Permission = () => {
  return (
    <div className={`w-[335px] h-[304px] md:w-[455px] md:h-[260px] rounded-[10px] drop-shadow-md flex flex-col justify-start gap-[20px]  p-[30px] md:gap-[40px] items-center md:flex-row  md:justify-start md:p-[40px] bg-[#DEEDFF] order-3 md:order-2`}>
      <h3 className={`w-[276px] h-[26px] md:w-[105px] md:h-[52px] text-[20px] text-[#4C71F1]  text-center font-medium `}>กำหนดระดับสิทธิ์ใช้งาน</h3>
      <Image src='/sectionthree/iPhone 8.svg' width={224} height={197} alt="icon" />
    </div>
  )
}

export default Permission;