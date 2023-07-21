import { useDispatch } from "react-redux";
import { updateImgData } from "@/redux/imageDataSlice";
import { Icon } from "@iconify/react";

const FormStep = ({ isCompleted, stepToUpdate, isDisabled, text, icon }) => {
  const dispatch = useDispatch();
  return (
    <li class="relative w-1/5 flex flex-col justify-center items-center">
      <button
        class={`flex items-center  justify-center rounded-full p-2 z-10 text-white 
        ${isCompleted ? "bg-primary hover:bg-cta" : "bg-cta hover:bg-primary"}
        disabled:hover:cursor-not-allowed disabled:bg-gray disabled:hover:bg-gray`}
        onClick={() => dispatch(updateImgData({ step: stepToUpdate }))}
        disabled={isDisabled}
      >
        <Icon icon={icon} className="w-5 h-5" />
      </button>
      <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">{text}</h3>
      <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
    </li>
  );
};

export default FormStep;
