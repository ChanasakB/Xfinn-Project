import React, { useState } from "react";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onToggle, setOnToggle] = useState(0);
  const [item, setItem] = useState([
    {
      id: 1,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 3,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 4,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
    },
  ]);
  const [item2, setItem2] = useState([
    {
      id: 5,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 6,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 7,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 8,
      title: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
    },
  ]);

  const toggle = (id) => {
    setIsOpen(!isOpen);
    setOnToggle(id);
  };

  return (
    <div className={`pb-[50px]`}>
      <div
        className={`bg-white w-[335px] md:w-[940px] h-auto m-auto rounded-[10px] shadow-md pb-[20px]`}
      >
        <div>
          <h2
            className={`text-[24px] text-[#ED6238] font-bold text-center pt-[40px] mb-[32px]`}
          >
            คำถามที่พบบ่อย
          </h2>
        </div>
        <div className={`flex justify-center `}>
          <div className={`w-[430px] mt-[0px] `}>
            {item.map((item, i) => (
              <div
                key={i}
                className={`w-[300px] md:w-[370px] m-auto flex pb-[20px]`}
              >
                <div
                  className={`flex flex-col  border-b-2 border-black pb-[10px] `}
                >
                  <div
                    className={`flex w-[300px] md:w-[370px] h-[21px] items-center cursor-pointer  justify-between  `}
                    onClick={() => toggle(item.id)}
                  >
                    <h3 className={`text-[16px] font-semibold`}>
                      {item.title}
                    </h3>
                    {isOpen && onToggle === item.id ? (
                      <IndeterminateCheckBoxOutlinedIcon color="primary" />
                    ) : (
                      <LocalHospitalOutlinedIcon color="primary" />
                    )}
                  </div>
                  {isOpen && onToggle === item.id ? (
                    <div
                      className={`pt-[10px] w-[300px] md:w-[370px] text-[12px] font-medium`}
                    >
                      <p>{item.content}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={`hidden md:block w-[430px] mt-[0px]`}>
            {item2.map((item2, i) => (
              <div key={i} className={`w-[370px] m-auto flex pb-[20px]`}>
                <div
                  className={`flex flex-col  border-b-2 border-black pb-[10px] `}
                >
                  <div
                    className={`flex w-[370px] h-[21px] items-center cursor-pointer  justify-between  `}
                    onClick={() => toggle(item2.id)}
                  >
                    <h3 className={`text-[16px] font-semibold`}>
                      {item2.title}
                    </h3>
                    {isOpen && onToggle === item2.id ? (
                      <IndeterminateCheckBoxOutlinedIcon color="primary" />
                    ) : (
                      <LocalHospitalOutlinedIcon color="primary" />
                    )}
                  </div>
                  {isOpen && onToggle === item2.id ? (
                    <div
                      className={`pt-[10px] w-[370px] text-[12px] font-medium`}
                    >
                      <p>{item2.content}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
