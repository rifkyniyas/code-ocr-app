import { useContext } from "react";
import { ImageDataContext } from "@/context/ImageDataContext";
import { readImageFile } from "@/utilities/imageUtils";
import CropImage from "./CropImage";
const ImageInput = () => {
  const { updateImageData, imageData } = useContext(ImageDataContext);

  const handleImageUpload = async (event) => {
    event.preventDefault();

    const imageFile = event.target.files[0];
    const imageData = await readImageFile(imageFile);
    console.log(imageFile);
    updateImageData({
      name: imageFile.name,
      originalData: imageData,
      isCropped: false,
    });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
                  onChange={handleImageUpload}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG</p>
          </div>
        </div>
      </div>
      <p>{imageData.name} </p>
      <p>{imageData.originalData}</p>
      <p>{imageData.isCropped}</p>
      <p>{imageData.croppedData}</p>
      {imageData.name !== "" && !imageData.isCropped && <CropImage />}
    </form>
  );
};

export default ImageInput;
