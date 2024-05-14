import Employee from "@/advantage/Employee";
import Examines from "@/advantage/Examines";
import Permission from "@/advantage/Permission";

const SectionThree = () => {
  return (
    <div className="pb-[30px]">
      <div
        className={`flex flex-col md:flex-wrap max-w-[335px] md:max-w-[940px] h-auto md:max-h-[664px] m-auto gap-[30px]`}
      >
        <Examines />
        <Permission />
        <Employee />
      </div>
    </div>
  );
};

export default SectionThree;
