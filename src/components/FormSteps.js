import { useSelector, useDispatch } from "react-redux";
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
        <Icon icon={icon} className="w-5 h-5 block" />
      </button>
      <h2 class="mt-3 hidden md:block text-sm font-medium uppercase">{text}</h2>
      <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
    </li>
  );
};

const FormSteps = () => {
  const imageData = useSelector((state) => state.imageData);
  return (
    <ol class="flex py-5 items-center justify-center">
      <FormStep
        isCompleted={imageData.originalData}
        stepToUpdate={"waitingUpload"}
        isDisabled={false}
        text={"1. Upload Image"}
        icon={"octicon:upload-24"}
      />
      <FormStep
        isCompleted={imageData.extractedCode}
        stepToUpdate={"waitingCrop"}
        isDisabled={!imageData.originalData}
        text={"2. Crop the Code"}
        icon={"ic:sharp-crop"}
      />
      <FormStep
        isCompleted={false}
        stepToUpdate={"isExtracted"}
        isDisabled={!imageData.extractedCode}
        text={"3. Extracted Code"}
        icon={"bi:code"}
      />
    </ol>
  );
};

export default FormSteps;
