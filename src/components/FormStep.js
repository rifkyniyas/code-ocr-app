import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const FormStep = () => {
  const imageData = useSelector((state) => state.imageData);
  return (
    <ol class="flex gap-x-5 py-5 items-center justify-center">
      <li class="relative w-1/5">
        <div class="flex items-center justify-center">
          <div
            class="flex items-center justify-center  rounded-full 
          bg-primary text-white p-2 z-10"
          >
            <Icon icon="octicon:upload-24" className="w-5 h-5" />
          </div>
        </div>
        <div class="hidden mt-3 md:block">
          <h3 class="font-medium">Upload Image</h3>
        </div>
        <div className="absolute inset-x-0 bg-text bg-opacity-25 h-1 top-4"></div>
      </li>
      <li class="relative w-1/5">
        <div class="flex items-center justify-center">
          <div
            class="flex items-center justify-center  rounded-full 
          bg-primary text-white p-2 z-10"
          >
            <Icon icon="tabler:code" className="w-5 h-5" />
          </div>
        </div>
        <div class="hidden mt-3 md:block">
          <h3 class="font-medium">Extracted Code</h3>
        </div>
        <div className="absolute inset-x-0 bg-text bg-opacity-25 h-1 top-4"></div>
      </li>
      {/* <Icon icon={""} />
      Crop the Code */}
      {/* <Icon icon={""} />
       */}
    </ol>
  );
};

export default FormStep;
