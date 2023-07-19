import { useRef } from "react";
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
    <div className="grid grid-cols-2">
      <div>
        <Cropper
          src={originalData} //Inital data of input image
          style={{ width: "100%" }}
          // Cropper.js options
          viewMode={3}
          ref={cropperRef}
        />
        <button onClick={handleCrop}>Crop</button>
      </div>
      <div>
        {isCropped && <img src={croppedData} alt="Cropped Preview" />}
        <button onClick={extractCode}>Extract Code</button>
      </div>
    </div>
  );
};

export default CropImage;
