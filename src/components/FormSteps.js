import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import FormStep from "./FormStep";

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
      {/* <li class="relative w-1/5 flex flex-col justify-center items-center">
        <button
          class={`flex items-center  justify-center rounded-full p-2 z-10 text-white 
          ${
            imageData.originalData != ""
              ? "bg-cta hover:bg-primary"
              : "bg-primary hover:bg-cta "
          }
          disabled:hover:cursor-not-allowed disabled:bg-gray disabled:hover:bg-gray`}
          onClick={() => dispatch(updateImgData({ step: "waitingUpload" }))}
        >
          <Icon icon="octicon:upload-24" className="w-5 h-5" />
        </button>
        <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">
          1. Upload Image
        </h3>
        <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
      </li> */}
      {/* <li class="relative w-1/5 flex flex-col justify-center items-center">
        <button
          class={`flex items-center  justify-center rounded-full p-2 z-10 text-white 
          ${
            imageData.croppedData != ""
              ? "bg-cta hover:bg-primary"
              : "bg-primary hover:bg-cta "
          }
          disabled:hover:cursor-not-allowed disabled:bg-gray disabled:hover:bg-gray`}
          onClick={() => dispatch(updateImgData({ step: "waitingCrop" }))}
          disabled={imageData.originalData ? false : true}
        >
          <Icon icon="ic:sharp-crop" className="w-5 h-5" />
        </button>
        <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">
          2. Crop the Code
        </h3>
        <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
      </li> */}
      {/* <li class="relative w-1/5 flex flex-col justify-center items-center">
        <button
          class={`flex items-center  justify-center rounded-full p-2 z-10 text-white 
          ${
            imageData.extractedCode != ""
              ? "bg-cta hover:bg-primary"
              : "bg-primary hover:bg-cta "
          }
          disabled:hover:cursor-not-allowed disabled:bg-gray disabled:hover:bg-gray`}
          onClick={() => {
            if (!imageData.extractedCode) return;
            dispatch(updateImgData({ step: "isExtracted" }));
          }}
          disabled={imageData.extractedCode ? false : true}
        >
          <Icon icon="bi:code" className="w-5 h-5" />
        </button>
        <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">
          3. Extracted Code
        </h3>
        <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
      </li> */}
    </ol>
  );
};

export default FormSteps;
