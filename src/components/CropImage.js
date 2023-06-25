import { useRef, useState } from "react";
import Modal from "./Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
const CropImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const cropperRef = useRef();
  return (
    <>
      <button type="button" onClick={openModal}>
        Open regular modal
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Cropper
          src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
          style={{ height: 400, width: "100%" }}
          // Cropper.js options
          initialAspectRatio={16 / 9}
          guides={false}
          // crop={sonCrop}
          ref={cropperRef}
        />
      </Modal>
    </>
  );
};

export default CropImage;
