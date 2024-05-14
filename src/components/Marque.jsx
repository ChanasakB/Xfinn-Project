import Marquee from "react-fast-marquee";

const Box = () =>{
  return <div className={`min-w-[164px] min-h-[62px] rounded-[10px] bg-[#C7C7C7]`}></div>
}
const arrBox = [...Array(10).keys()]
const Marque = () => {
  return (
    <div className={`py-[60px]`}>
      <Marquee className={`w-full flex  h-[62px] overflow-hidden`}>
      <div className={`flex justify-center mx-[30px] w-[164px] h-[62px]  text-[20px] text-center font-anuphan font-bold m-auto`}>บริษัทที่ใช้งาน<br/>ผ่านวันนี้ลา</div>
      <div className={`flex gap-[30px]`}>{arrBox.map((ele)=> 
      <Box key={ele}/>)}
      </div>
      </Marquee>
    </div>
  )
}

export default Marque;
