import Image from "next/image";
import { useState } from "react";
import DepartmentManager from "@/assets/DepartmentManager";
import Move from "@/assets/Move";
import EditIcon from "@/assets/Edit";


const Department = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);
  const [circleDepartment, setCircleDepartment] = useState([
    {
      topic: "จัดการ \n แผนก",
      Img: "/department/icon14.svg",
    },
    {
      topic: "แก้ไข \n แผนก",
      Img: "/department/icon15.svg",
    },
    {
      topic: "ย้าย \n แผนก",
      Img: "/department/icon16.svg",
    },
  ]);

  const [iconBar, setIconBar] = useState([
    {
      id: 1,
      name: "จัดการ",
      icon: <DepartmentManager width={20} height={20} />,
      image: "/department/Group1.svg",
    },
    {
      id: 2,
      name: "แก้ไข",
      icon: <EditIcon width={20} height={20} />,
      image: "/department/Group2.svg",
    },
    {
      id: 3,
      name: "ย้าย",
      icon: <Move width={20} height={20} />, 
      image: "/department/Group3.svg",
    },
  ]);

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
    setSelectedColor(id);
  };

  return (
    <div className={`pb-[30px]`}>
      <div
        className={`flex flex-col md:flex-row w-[335px] h-[647px] md:w-[940px] md:h-[378px] bg-[#ffffff] rounded-[10px] drop-shadow-md m-auto p-[30px] md:p-[40px] gap-[30px]`}
      >
        <div className={`w-[276px] md:w-[318px] flex flex-col gap-[30px] md:gap-[13px]`}>
          <div className={`flex flex-col gap-[10px]`}>
            <h3 className={`text-[24px] text-[#ED6238] font-bold`}>
              Department <br /> Management
            </h3>
            <p className={`text-[16px] font-semibold`}>
              จัดการแผนก บริหารงานบุคคล
            </p>
            <p className={`text-[16px] font-semibold text-[#8B8B8B]`}>
              เลือกจัดการเพื่อนร่วมงานเรียงตามแผนก ย้ายเพื่อนร่วมงาน
              หรือแก้ไขข้อมูลเพื่อนร่วมงานโดยละเอียด
            </p>
          </div>
          <div
            className={`flex justify-start items-center cursor-pointer gap-[32px]`}
          >
            {circleDepartment.map((ele,i) => (
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

        <div className={`w-[276px] md:w-[512px] flex flex-col gap-[20px] md:gap-[13px]`}>
          <div className={`flex justify-between`}>
            {iconBar.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-[10px] h-[40px] cursor-pointer ${
                  selectedTopicId === item.id
                    ? "border-b-2 border-[#4C71F1]"
                    : ""
                } ${selectedColor === item.id ? 'text-[#4C71F1]' : 'text-[#C7C7C7]'}`}
                onClick={() => handleTopicClick(item.id)}
              >
                {item.icon}
                <p
                  className={`flex text-[20px] font-bold ${
                    selectedTopicId === item.id
                      ? "text-[#4C71F1]"
                      : "text-[#000000]"
                  } `}
                >
                  {item.name}
                  <span className={`hidden md:block`}>แผนก</span>
                </p>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={iconBar.find((topic) => topic.id === selectedTopicId).image}
              alt="img"
              width={475} 
              height={267}
              className={`m-auto`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
