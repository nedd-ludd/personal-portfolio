import Image from "next/image";
const SkillCard = ({ key, image, text }) => (
  <div
    key={key}
    className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
  >
    {/* <div className="grid grid-cols-4 gap-0 justify-center items-center"> */}
    <div className="grid grid-cols-4 gap-0 justify-center items-center">
      <div className="m-auto">
        <Image src={image} width="30px" height="30px" alt="/" />
      </div>
      <div className="flex flex-col items-center col-span-3">
        <h6 className="text-xs md:text-base">{text}</h6>
      </div>
    </div>
  </div>
);
export default SkillCard;
