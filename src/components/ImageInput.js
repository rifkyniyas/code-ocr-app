import { useState } from "react";
import CropImage from "./CropImage";
import { readImageFile } from "@/utilities/imageUtils";
const ImageInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerModal = () => setIsModalOpen((prevState) => !prevState);
  const [imageData, setImageData] = useState(null);
  const handleImageUpload = async (event) => {
    event.preventDefault();

    const files = event.target.querySelector('input[type="file"]').files;
    const data = await readImageFile(files[0]);
    console.log(data);
    setImageData(data);
    triggerModal();

    // if (!file) return console.log("No file inputs detected");
  };
  return (
    <form onSubmit={handleImageUpload}>
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Enter the code image
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".jpg, .jepg, .png"
                  multiple
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG</p>
          </div>
        </div>

        <button type="submit">Begin Extraction</button>
      </div>
      {isModalOpen && (
        <CropImage triggerModal={triggerModal} imageData={imageData} />
      )}
    </form>
  );
};

export default ImageInput;
