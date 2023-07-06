import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateImgData } from "@/redux/imageDataSlice";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CropImage = () => {
  const { name, originalData, isCropped, croppedData, isExtracted } =
    useSelector((state) => state.imageData);
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

  return (
    <>
      <Cropper
        src={originalData} //Inital data of input image
        style={{ height: 400, width: "100%" }}
        // Cropper.js options
        initialAspectRatio={16 / 9}
        guides={false}
        ref={cropperRef}
      />
      <button onClick={handleCrop}>Crop</button>
      <button
        onClick={() => dispatch(updateImgData({ isExtracted: true }))}
      ></button>
      {isCropped && <img src={croppedData} alt="Cropped Preview" />}
    </>
  );
};

export default CropImage;
