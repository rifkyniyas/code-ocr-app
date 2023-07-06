"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createWorker } from "tesseract.js";
import CodeEditor from "@/components/CodeEditor";
import ImageInput from "@/components/ImageInput";
import CropImage from "@/components/CropImage";

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
    <div>
      <h1>Code Extractor</h1>
      <ImageInput />
      {imageData.name !== null && !imageData.isExtracted && (
        <CropImage worker={workerObj} />
      )}
      <CodeEditor />
    </div>
  );
}
