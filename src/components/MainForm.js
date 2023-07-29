import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWorker, updateLog } from "@/redux/ocrSlice";
import { createWorker } from "tesseract.js";
import FormSteps from "@/components/FormSteps";
import LoadingStatus from "@/components/LoadingStatus";
import ImageInput from "@/components/ImageInput";
import CodeEditor from "@/components/CodeEditor";
import CropImage from "@/components/CropImage";

const displayForm = (formState) => {
  switch (formState) {
    case "waitingUpload":
      return <ImageInput />;
    case "waitingCrop":
      return <CropImage />;
    case "isExtracted":
      return <CodeEditor />;
  }
};

const MainForm = () => {
  const imageData = useSelector((state) => state.imageData);
  const ocr = useSelector((state) => state.ocr);
  const dispatch = useDispatch();

  const loadWorker = async () => {
    const worker = await createWorker({
      logger: (logData) => {
        const status = logData.status;
        console.log(logData);
        if (
          status == "initialized api" ||
          (status == "recognizing text" && logData.progress == 1)
        )
          return dispatch(updateLog({ isLoadingComplete: true }));
        dispatch(updateLog(logData));
      },
    });
    dispatch(updateWorker(worker));

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
  };

  useEffect(() => {
    loadWorker();

    return async () => {
      await ocr.worker.terminate();
    };
  }, []);
  return (
    <div className="pt-5 pb-10 bg-white shadow-md rounded">
      <FormSteps />
      {ocr.loggedData.isLoadingComplete ? (
        <div className="px-8 md:px-0">{displayForm(imageData.step)}</div>
      ) : (
        <LoadingStatus
          message={ocr.loggedData.status}
          percentage={ocr.loggedData.progress * 100}
        />
      )}
    </div>
  );
};

export default MainForm;
