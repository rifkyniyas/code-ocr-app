import { useRef, useState } from "react";
import Modal from "./Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
const CropImage = ({ isModalOpen, triggerModal }) => {
  const [preview, setPreview] = useState("");
  const cropperRef = useRef();
  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    if (typeof cropper.getCroppedCanvas() === "undefined") return;
    setPreview(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      <Modal>
        <Cropper
          src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
          style={{ height: 400, width: "100%" }}
          // Cropper.js options
          initialAspectRatio={16 / 9}
          guides={false}
          // crop={sonCrop}
          ref={cropperRef}
        />
        <button onClick={handleCrop}>Crop</button>
        {preview && <img src={preview} alt="Cropped Preview" />}
      </Modal>
    </>
  );
};

export default CropImage;
