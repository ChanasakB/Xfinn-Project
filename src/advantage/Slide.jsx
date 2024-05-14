import { useState , useRef , useEffect } from "react";

const Slide = ({ outSetEmployeeAmount }) => {
  const [employeeAmount, setAmployeeAmount] = useState("30");
  const [inputWidth, setInputWidth] = useState(0);
  const progress = Math.ceil(((employeeAmount - 10) / 100) * 100 * 1.1);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      const distanceWidth = Math.ceil(
        (inputRef.current.offsetWidth * progress) / 100 / 1.1
      );
      setInputWidth(distanceWidth);
    }
    console.log(progress)
    console.log(inputRef.current?.offsetWidth)
  }, [employeeAmount,progress]);
  return (
    <div>
      <div className={`flex flex-col w-[335px] h-[137px] md:w-[552px] md:h-[151px] bg-white rounded-[10px] shadow-custom-shadow items-center gap-2.5 p-5 drop-shadow-md`}>
        <div>
          <p className={`font-bold text-[#ED6238] text-xl text-center`}>พนักงาน {employeeAmount} คน</p>
        </div>
        <input
          type="range"
          id="employee"
          name="employee"
          min="10"
          max="100"
          value={employeeAmount}
          onChange={(e) => {
            setAmployeeAmount(e.target.value);
            outSetEmployeeAmount(e.target.value);
          }}
          ref={inputRef}
          style={{
            backgroundImage: `linear-gradient(to right,#4C71F1 ${progress}%,#DEEDFF ${progress}%)`,
          }}
          className={
            "w-full z-10 max-w-[470px] h-[10px] mt-2.5 appearance-none focus:outline-none rounded-full [&::-webkit-slider-thumb]:appearance-none  [&::-webkit-slider-thumb]:w-[40px] [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:bg-[#4C71F1] [&::-webkit-slider-thumb]:border-[9px] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:drop-shadow"
          }
         
        />
        <div
          
          className="flex justify-between w-full max-w-[470px] text-[#8B8B8B] text-xs -mt-2.5 z-0"
        >
          <option value="10" label="10" className="p-0 z-0"></option>
          <option value="100" label="100" className="p-0 z-0"></option>
        </div>
        <div className="w-full pl-0 md:pl-[28px]">
          <p
            style={{ transform: `translateX(${inputWidth}px)` }}
            className={`w-fit text-[#ED6238] font-semibold text-[16px] md:font-bold md:text-xl`}
          >
            {employeeAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
