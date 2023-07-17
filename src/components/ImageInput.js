import { useDispatch } from "react-redux";
import { updateImgData } from "@/redux/imageDataSlice";
import { readImageFile } from "@/utilities/imageUtils";
const ImageInput = () => {
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
        isCropped: false,
      })
    );
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="col-span-full bg-white">
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm items-center leading-6 text-gray-600">
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
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              Supported File Types: PNG, JPG, JPEG
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ImageInput;
