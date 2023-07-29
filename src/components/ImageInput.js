import { useDispatch, useSelector } from "react-redux";
import { updateImgData, clearData } from "@/redux/imageDataSlice";
import { readImageFile } from "@/utilities/imageUtils";
import Image from "next/image";

const ImageInput = () => {
  const imageData = useSelector((state) => state.imageData);
  const dispatch = useDispatch();
  const handleImageUpload = async (event) => {
    event.preventDefault();

    const imageFile = event.target.files[0];
    const imageData = await readImageFile(imageFile);
    console.log(imageFile);
    dispatch(
      updateImgData({
        step: "waitingCrop",
        name: imageFile.name,
        originalData: imageData,
      })
    );
  };
  if (imageData.name && imageData.originalData) {
    return (
      <div className="max-w-5xl my-3 mx-auto flex flex-col items-center justify-center px-6 py-5">
        <h3 className="text-lg font-medium mb-1">
          Image Uploaded : {imageData.name}
        </h3>
        <figure className="relative max-h-[500px] min-h-[250px] border border-dashed border-gray w-full">
          <Image
            src={imageData.originalData}
            alt={`Uploaded Image Preview for: ${imageData.name}`}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </figure>

        <button
          onClick={() => dispatch(clearData())}
          className="px-3 py-2 mt-5 cursor-pointer rounded-md font-semibold bg-red-400 hover:bg-red-900 text-white"
        >
          Remove
        </button>
      </div>
    );
  } else {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="max-w-5xl my-3 mx-auto flex justify-center rounded-lg border border-dashed border-gray px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm justify-center items-center leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative px-3 py-2 cursor-pointer rounded-md font-semibold bg-cta hover:bg-primary text-white 
                outline-none "
              >
                <span>Upload an image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".jpg, .jepg, .png"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              Supported File Types: PNG, JPG, JPEG
            </p>
          </div>
        </div>
      </form>
    );
  }
};

export default ImageInput;
