import Button from "@mui/material/Button";
import Image from "next/image";
import { useState } from "react";

const Package = ({ recieveEmployee }) => {
  const packageType = [
    {
      name: "Cone",
      price: 29,
      originalPrice: 35,
      img: "/package/cone.svg",
      Order: 2,
      isSuggest: false,
    },
    {
      name: "Sundae",
      price: 59,
      originalPrice: 69,
      img: "/package/sundae.svg",
      Order: 1,
      isSuggest: true,
    },
    {
      name: "Quart",
      price: 89,
      originalPrice: 109,
      img: "/package/quart.svg",
      Order: 3,
      isSuggest: false,
    },
  ];
  const [packSelect, setPackSelect] = useState(1);
  const [content, setContent] = useState([
    {
      image: "/package/correct.svg",
      content: "แจ้ง และอนุมัติวันลาที่ไหนก็ได้ ผ่าน LINE OA",
    },
    {
      image: "/package/correct.svg",
      content: "วันลาคงเหลือแต่ละประเภท ประวัติการลา/อนุมัติ",
    },
    {
      image: "/package/correct.svg",
      content: "กำหนดระดับสิทธิ์การใช้งาน",
    },
    {
      image: "/package/correct.svg",
      content: "กำหนดรูปแบบ และจัดการ วันหยุด วันลาพักร้อน",
    },
    {
      image: "/package/correct.svg",
      content: "จัดการข้อมูลแผนก และพนักงาน",
    },
  ]);

  const handlePackClick = (Order) => {
    setPackSelect(Order);
  };
  return (
    <div className={`flex  flex-col gap-[20px] m-auto w-[335px] md:gap-[0] md:flex-row md:w-[940px] items-center  md:justify-between pb-[30px] drop-shadow-md cursor-pointer`}>
      {packageType.map((item , index) => (
        <div
          key={item.Order}
          className={`relative bg-[#FFFFFF] w-[334px] md:w-[291px] h-[475px] rounded-[10px]  ${
            packSelect === item.Order
              ? "border-2 border-[#4C71F1] bg-[#dfedff]"
              : "border-2 border-white bg-white"
          } order-${item.Order} md:order-${index + 1}`}
          onClick={() => handlePackClick(item.Order)}
        >
          <div
            className={`${
              packSelect && item.isSuggest
                ? "absolute w-[118px] bg-[#F34336] font-medium rounded-[4px] text-white  text-center top-0 right-6 transform -translate-x-1/2 -translate-y-1/2"
                : "hidden"
            } ` }
          >
            แพ็คเกจแนะนำ!
          </div>
          <div
            className={`h-[130px] border-b-2  flex flex-col pl-[20px] ${
              packSelect === item.Order
                ? "border-[#4C71F1]"
                : "border-[#F0F0F0]"
            }`}
          >
            <div className={`flex gap-[10px]  pt-[20px] pb-[7px]`}>
              <Image
                src="/package/cone.svg"
                width={40}
                height={40}
                alt="icon"
              />
              <h1
                className={`text-[24px] text-[#ED6238] font-bold  text-center`}
              >
                {item.name}
              </h1>
            </div>
            <div>
              <p className={`text-[#00AF70] text-[20px] font-bold`}>
                {recieveEmployee * item.price} บาท/เดือน {""}
                <span
                  className={`text-black text-[16px] font-semibold line-through decoration-2`}
                >
                  {item.originalPrice * recieveEmployee} บาท
                </span>
              </p>
            </div>
          </div>
          <div
            className={`px-[20px] m-auto pt-[20px] flex flex-col gap-[12px]`}
          >
            {content.map((item,index) => (
              <div key={index} className={`flex gap-[10px]`}>
                <Image src={item.image} width={25} height={25} alt="icon" />
                <p className={`w-[216]`}>{item.content}</p>
              </div>
            ))}
          </div>
          <div className={`flex justify-center items-center pt-[20px]`}>
            <Button
              disableRipple
              variant="contained"
              className={`w-[251px] h-[50px] bg-[#4C71F1] hover:bg-[#4C71F1] shadow-none hover:shadow-none text-[20px] text-center font-bold rounded-[6px]`}
            >
              ทดลองใช้ฟรี 30 วัน
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Package;
