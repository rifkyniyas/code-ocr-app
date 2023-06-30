"use client";
import { useState, useEffect, useContext } from "react";
import CodeEditorContextProvider from "@/context/CodeEditorContext";
import { createWorker } from "tesseract.js";
import CodeEditor from "@/components/CodeEditor";
import ImageInput from "@/components/ImageInput";
import ImageDataContextProvider from "@/context/ImageDataContext";
export default function Home() {
  const [workerObj, setWorkerObj] = useState(null);
  const [extractedCode, setExtractedCode] = useState("");
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

      <ImageDataContextProvider>
        <ImageInput />
      </ImageDataContextProvider>
      <CodeEditorContextProvider>
        <CodeEditor codeValue={extractedCode} />
      </CodeEditorContextProvider>
    </div>
  );
}
