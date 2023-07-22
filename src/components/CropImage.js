import { useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateImgData } from "@/redux/imageDataSlice";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import LanguageSelector from "./LanguageSelector";
const CropImage = () => {
  const { originalData, isCropped, croppedData } = useSelector(
    (state) => state.imageData
  );
  const ocr = useSelector((state) => state.ocr);
  const dispatch = useDispatch();
  const cropperRef = useRef();
  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    if (typeof cropper.getCroppedCanvas() === "undefined") return;
    dispatch(
      updateImgData({
        isCropped: true,
        croppedData: cropper.getCroppedCanvas().toDataURL(),
      })
    );
  };
  const extractCode = async () => {
    if (!croppedData) return console.log("Emptry Cropped data");

    const {
      data: { text },
    } = await ocr.worker.recognize(croppedData);
    dispatch(updateImgData({ step: "isExtracted", extractedCode: text }));
  };
  return (
    <div className="max-w-5xl mx-auto my-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div>
          <h3 className="text-lg font-medium mb-3">Original Image</h3>
          <Cropper
            src={originalData} //Inital data of input image
            style={{ width: "100%", maxHeight: "500px", borderRadius: "4px" }}
            viewMode={3}
            ref={cropperRef}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-3">Preview</h3>
          {isCropped && <img src={croppedData} alt="Cropped Preview" />}
        </div>
        <div className="col-span-2 flex justify-center mt-3 mb-2">
          <button
            onClick={handleCrop}
            className="py-3 px-5 text-sm font-medium text-center text-text 
          rounded border border-cta hover:border-transparent hover:bg-cta hover:text-white"
          >
            Crop and Preview
          </button>
        </div>
        <div className="col-span-2">
          <LanguageSelector />
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-6 mt-5">
        <button
          onClick={extractCode}
          className="py-3 px-5 text-sm font-medium text-center text-white bg-cta
        hover:bg-primary rounded disabled:bg-gray disabled:hover:bg-gray"
          disabled={!croppedData}
        >
          Extract Code
        </button>
      </div>
    </div>
  );
};

export default CropImage;
