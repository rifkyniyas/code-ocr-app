import Image from "next/image";

const InstructionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="justify-center items-center flex 
      overflow-x-hidden fixed inset-0 z-50
       outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h2 className="text-3xl font-bold">Instructions</h2>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-left">
              <section className="pb-5">
                <h3 className="text-xl font-semibold mb-2">Cropping Image</h3>
                <p>
                  Please carefully crop the image, including only the necessary
                  text portion. Remove any unwanted filenames or number lines to
                  ensure precise text extraction. Consider the example given
                  below
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
                <h3 className="text-xl font-semibold mb-2">
                  Possible Limitations
                </h3>
                <ol>
                  <li>
                    1. The extracted text might be inaccurate. This is due to
                    the limited capability of tesseract.js library and more
                    powerful models are being explored at the moment.
                  </li>
                  <li>
                    2. Code highlighting may have unexpected results if the
                    extracted code is inaccurate.
                  </li>
                  <li>
                    3. Code formatting is currently unavailable. We are working
                    on this feature.
                  </li>
                </ol>
              </section>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={onClose}
                className="py-1 px-5 text-sm font-medium text-center text-text 
          rounded border border-cta hover:border-transparent hover:bg-cta hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default InstructionsModal;
