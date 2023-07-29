import Image from "next/image";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const InstructionsModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <section className="pb-5">
        <h3 className="text-xl font-semibold mb-2">Cropping Image</h3>
        <p>
          Please carefully crop the image, including only the necessary text
          portion. Remove any unwanted filenames or number lines to ensure
          precise text extraction. Consider the example given below
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2 mt-3">
          <div>
            <h4 className="text-lg font-medium mb-1">Example Image</h4>
            <div className="relative max-h-[500px] min-h-[200px] w-full border border-dashed border-gray">
              <Image
                src="/example-images/carbon.png"
                alt="Example Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-xs">
              Obtained from&nbsp;
              <a
                href="https://carbon.now.sh/"
                target="_blank"
                className="text-primary hover:underline"
              >
                Carbon
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Cropped Image</h4>
            <div className="relative max-h-[500px] min-h-[200px] w-full border border-dashed border-gray">
              <Image
                src="/example-images/carbon-cropped.png"
                alt="Example Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <h3 className="text-xl font-semibold mb-2">Possible Limitations</h3>
        <ol>
          <li>
            1. The extracted text might be inaccurate. This is due to the
            limited capability of tesseract.js library and more powerful models
            are being explored at the moment.
          </li>
          <li>
            2. Code highlighting may have unexpected results if the extracted
            code is inaccurate.
          </li>
          <li>
            3. Code formatting is currently unavailable. We are working on this
            feature.
          </li>
        </ol>
      </section>
    </Modal>
  );
};

export default InstructionsModal;
