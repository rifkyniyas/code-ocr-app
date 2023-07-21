import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const FormStep = () => {
  const imageData = useSelector((state) => state.imageData);
  return (
    <ol class="flex py-5 items-center justify-center">
      <li class="relative w-1/5 flex flex-col justify-center items-center">
        <button
          class="flex items-center justify-center  rounded-full 
          bg-gray text-white hover:bg-cta p-2 z-10"
        >
          <Icon icon="octicon:upload-24" className="w-5 h-5" />
        </button>
        <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">
          1. Upload Image
        </h3>
        <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
      </li>
      <li class="relative w-1/5 flex flex-col justify-center items-center">
        <button
          class="flex items-center justify-center  rounded-full 
          bg-gray text-white hover:bg-cta p-2 z-10"
        >
          <Icon icon="ic:sharp-crop" className="w-5 h-5" />
        </button>
        <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">
          2. Crop the Code
        </h3>
        <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
      </li>
      <li class="relative w-1/5 flex flex-col justify-center items-center">
        <button
          class="flex items-center justify-center  rounded-full 
          bg-gray text-white hover:bg-cta p-2 z-10"
        >
          <Icon icon="bi:code" className="w-5 h-5" />
        </button>
        <h3 class="mt-3 hidden md:block text-sm font-medium uppercase">
          3. Extracted Code
        </h3>
        <div className="absolute inset-x-0 bg-gray bg-opacity-25 h-[2px] top-4"></div>
      </li>
    </ol>
  );
};

export default FormStep;
