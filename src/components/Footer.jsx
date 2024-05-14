import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [menu, setMenu] = useState([
    "หน้าแรก",
    "จุดเด่น",
    "ราคา",
    "บทความ",
    "ติดต่อเรา",
  ]);

  const [under, setUnder] = useState([
    "ตั้งค่าคุกกี้",
    "นโยบายการใช้คุกกี้",
    "ข้อตกลงและเงื่อนไข",
    "นโยบายการคุ้มครองข้อมูลส่วนบุคคล",
  ]);

  const [image, setImage] = useState([
    {
        img: "/footer/Line.svg",
    },
    {
        img: "/footer/Fackbook.svg",
    },
    {
        img: "/footer/tiktok.svg",
    },
  ])
  return (
    <div>
      <div className={`flex flex-col md:flex-row justify-center items-center  md:justify-start  w-[375px] md:w-[1134px] m-auto gap-[30px] border-b-2 border-[#C7C7C7] pb-[30px]`}>
        <Image src="/logo.svg" width={164} height={83} alt="logo" />
        <ul className={`flex  flex-wrap  justify-center  md:justify-start md:items-center gap-[30px] md:gap-[40px] text-[16px] text-[black] font-semibold w-[164px] md:w-[1134px]`}>
          {menu.map((ele,index) => (
            <li key={index} className={`hover:text-[#4C71F1]`}>
              <Link href="#">{ele}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`pb-[120px]`}>
      <div className={`pt-[30px] flex  flex-col md:flex-row w-[375px] md:w-[1134px] m-auto justify-center items-center text-center md:justify-between gap-[30px] md:gap-[0]`}>
          <div>
            <ul className={`flex flex-col md:flex-row gap-[30px] text-[16px] text-[black] font-semibold `}>
                {under.map((item,index)=>
                <li key={index} className={`hover:text-[#4C71F1]`}>
                <Link href="#">{item}</Link>
              </li>
            )}
            </ul>
          </div>
          <div className={`flex gap-[30px] cursor-pointer`}>
            {image.map((time,index)=>
            <Image key={index} src={time.img} width={25} height={25} alt="logo"/>
        )}
          </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
