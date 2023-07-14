"use client";
import { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { createWorker } from "tesseract.js";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import ImageInput from "@/components/ImageInput";
import CropImage from "@/components/CropImage";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import LoadingStatus from "@/components/LoadingStatus";
export default function Home() {
  const imageData = useSelector((state) => state.imageData);
  const [workerObj, setWorkerObj] = useState(null);
  const loadWorker = async () => {
    const worker = await createWorker({
      logger: (m) => console.log(m),
    });
    setWorkerObj(worker);

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
  };

  useEffect(() => {
    loadWorker();

    return async () => {
      await workerObj.terminate();
    };
  }, []);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Found an interesting code snippet online and ended manually typing
            it out?
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Never again! Extract code from images with few clicks and start
            using in your project right away.
          </p>
          {/* <Suspense
            fallback={<LoadingStatus message={"loading"} percentage={"11"} />}
          >
            <ImageInput />
          </Suspense> */}

          {/*  */}
        </div>
      </section>

      {imageData.name !== null && !imageData.isExtracted && (
        <CropImage worker={workerObj} />
      )}
      <CodeEditor />
      <FeedbackForm />
      <Footer />
    </>
  );
}
