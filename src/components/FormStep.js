import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const FormStep = () => {
  const imageData = useSelector((state) => state.imageData);
  return (
    <ol class="items-center sm:flex justify-center">
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <Icon icon="octicon:upload-24" />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Upload your Image
          </h3>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <Icon icon={"radix-icons:crop"} />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Crop the Code
          </h3>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <Icon icon={"tabler:code"} />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Extracted Code
          </h3>
        </div>
      </li>
    </ol>
  );
};

export default FormStep;
