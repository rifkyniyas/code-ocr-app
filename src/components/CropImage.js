import { useRef, useState } from "react";
import Modal from "./Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
const CropImage = ({ triggerModal, imageData }) => {
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState(imageData);
  const cropperRef = useRef();
  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    if (typeof cropper.getCroppedCanvas() === "undefined") return;
    setPreview(cropper.getCroppedCanvas().toDataURL());
    console.log("Extracted" + cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      <Modal isOpen={true} onClose={triggerModal}>
        <Cropper
          src={images}
          style={{ height: 400, width: "100%" }}
          // Cropper.js options
          initialAspectRatio={16 / 9}
          guides={false}
          ref={cropperRef}
        />
        <button onClick={handleCrop}>Crop</button>
        {preview && <img src={preview} alt="Cropped Preview" />}
      </Modal>
    </>
  );
};

export default CropImage;
