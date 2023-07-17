"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWorker, updateLog } from "@/redux/ocrSlice";
import { createWorker } from "tesseract.js";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
// import ImageInput from "@/components/ImageInput";
import CropImage from "@/components/CropImage";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import LoadingStatus from "@/components/LoadingStatus";
import ImageInput from "@/components/ImageInput";
import FormStep from "@/components/FormStep";

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

export default function Home() {
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
    <>
      <Header />
      {/* Hero Section */}
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Found an interesting code snippet online and ended manually typing
            it out?
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Never again! Extract code from images with few clicks and start
            using in your project right away.
          </p>
          {ocr.loggedData.isLoadingComplete ? (
            <>
              {displayForm(imageData.step)}
              <FormStep />
            </>
          ) : (
            <LoadingStatus
              message={ocr.loggedData.status}
              percentage={ocr.loggedData.progress * 100}
            />
          )}
        </div>
      </section>

      <FeedbackForm />
      <Footer />
    </>
  );
}
