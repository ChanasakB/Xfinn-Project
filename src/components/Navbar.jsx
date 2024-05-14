import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Humberger from "@/advantage/Humberger";

export const menu = ["หน้าแรก", "จุดเด่น", "ราคา", "บทความ", "ติดต่อเรา"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={`flex justify-between items-center w-[375px] pt-[20px] pb-[30px] md:pb-[60px] px-[20px] md:px-0 md:pt-[40px] md:w-[1134px] m-auto`}
      >
        <div className={`flex justify-between items-center gap-[30px]`}>
          <Image src="/logo.svg" width={164} height={83} alt="logo" />
          <ul
            className={`hidden  md:flex justify-between items-center gap-[30px]`}
          >
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={`text-[20px] font-bold text-center  hover:text-[#4C71F1]`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`md:hidden`}>
          <Button
            disableRipple
            variant="contained"
            onClick={() => setIsOpen(!isOpen)}
            className={`bg-[#DEEDFF] hover:bg-[#DEEDFF] border-none text-[#4C71F1] shadow-none w-[121px] h-[50px]  hover:shadow-none text-[20px] text-center  font-bold rounded-md`}
          >
            เมนู
          </Button>
        </div>
        <div className={`hidden md:flex items-center gap-[30px]`}>
          <Button
            disableRipple
            variant="contained"
            className={`bg-[#DEEDFF] hover:bg-[#DEEDFF] border-none text-[#4C71F1] shadow-none w-[164px] h-[50px]  hover:shadow-none text-[20px] text-center  font-bold rounded-md`}
          >
            เข้าสู่ระบบ
          </Button>
          <Button
            disableRipple
            variant="contained"
            className={`w-[194px] h-[50px] bg-[#4C71F1] hover:bg-[#4C71F1] shadow-none hover:shadow-none text-[20px] text-center font-anuphan font-bold `}
          >
            เริ่มต้นใช้งาน
          </Button>
        </div>
      </div>
      <Humberger isOpen={isOpen}/>
    </div>
  );
};
export default Navbar;
