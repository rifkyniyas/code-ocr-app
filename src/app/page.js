"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWorker, updateLog } from "@/redux/ocrSlice";
import { createWorker } from "tesseract.js";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import CropImage from "@/components/CropImage";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import LoadingStatus from "@/components/LoadingStatus";
import ImageInput from "@/components/ImageInput";
import FormSteps from "@/components/FormSteps";
import BuyMeACoffee from "@/components/BuyMeACoffee";
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
      <BuyMeACoffee />
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
          <div className="pt-5 pb-10 bg-white shadow-md rounded">
            <FormSteps />
            {ocr.loggedData.isLoadingComplete ? (
              displayForm(imageData.step)
            ) : (
              <LoadingStatus
                message={ocr.loggedData.status}
                percentage={ocr.loggedData.progress * 100}
              />
            )}
          </div>
        </div>
      </section>

      <FeedbackForm />
      <div className="bg-gray bg-opacity-25 h-[1px] w-full"></div>
      <div className="py-8 px-4 my-10 rounded mx-auto max-w-5xl bg-white">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Support My Work
        </h2>
      </div>
      <Footer />
    </>
  );
}
