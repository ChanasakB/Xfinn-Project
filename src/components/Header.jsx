import Button from '@mui/material/Button';
import Image from 'next/image';


const Header = () => {
  return (
    <div className={` flex flex-col gap-[20px] w-[335px] h-[602px] md:w-[1134px] m-auto md:flex-row md:h-[492px] bg-[#FFFFFF] md:pl-[97px] font-bold  rounded-[10px] drop-shadow-md`}>
        <div className={`order-2 md:order-1 text-center`}> 
            <h1 className={`md:pt-[80px] text-[30px] text-[#ED6238]  pb-[10px] `}>แอปลางานออนไลน์ <br/>
            ผ่าน LINE OA    
            </h1>
            <p>แจ้งและอนุมัติวันลาออนไลน์ ใช้งานง่าย <br />ผ่าน LINE OA ไม่ต้องติดตั้งแอปเพิ่ม</p>
            <div className={`flex flex-col gap-[20px] pt-[20px] items-center`}>
            <Button disableRipple variant="contained" className={`w-[261px] h-[50px] bg-[#DEEDFF] hover:bg-[#DEEDFF] border-none text-[#4C71F1] shadow-none   hover:shadow-none text-[20px] text-center font-anuphan font-bold rounded-md`}>ดูรายละเอียด</Button>
            <Button disableRipple variant="contained" className={`w-[261px] h-[50px] bg-[#4C71F1] hover:bg-[#4C71F1] shadow-none hover:shadow-none text-[20px] text-center font-anuphan font-bold `}>เริ่มต้นใช้งาน</Button>
            </div>
        </div>
        <div className={`flex items-center justify-center pt-[30px] md:pt-[56px] md:pl-[120px] order-1 md:order-2 `}>
            <Image src='/Group 37.svg' width={292} height={204} alt='imggroup' className={`md:w-[531px] md:h-[372px]`}/>
        </div>
    </div>
  )
}

export default Header;
