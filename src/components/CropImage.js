import { useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateImgData } from "@/redux/imageDataSlice";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3>Original Image</h3>
          <Cropper
            src={originalData} //Inital data of input image
            style={{ width: "100%", maxHeight: "500px" }}
            viewMode={3}
            ref={cropperRef}
          />
        </div>

        <div>
          <h3>Preview</h3>
          {isCropped && <img src={croppedData} alt="Cropped Preview" />}
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-6">
        <button
          onClick={handleCrop}
          className="py-3 px-5 text-sm font-medium text-center text-white bg-cta
        hover:bg-opacity-50 rounded"
        >
          Crop and Preview
        </button>
        <button
          onClick={extractCode}
          className="py-3 px-5 text-sm font-medium text-center text-white bg-cta
        hover:bg-primary rounded"
          disabled={croppedData}
        >
          Extract Code
        </button>
      </div>
    </>
  );
};

export default CropImage;
