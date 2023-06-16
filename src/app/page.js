"use client";
import { useState, useEffect } from "react";
import { createWorker } from "tesseract.js";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  const [workerObj, setWorkerObj] = useState(null);
  const [extractedCode, setExtractedCode] = useState("");
  const extractCode = async (event) => {
    event.preventDefault();

    const fileInput = event.target.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    console.log(file);
    if (!file) return console.log("No file inputs detected");

    const reader = new FileReader();
    console.log(reader);
    reader.onload = async () => {
      const {
        data: { text },
      } = await workerObj.recognize(reader.result);
      // console.log(text);
      setExtractedCode(text);
    };

    reader.readAsDataURL(file);
  };

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

      <form onSubmit={extractCode}>
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Enter the code image
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".jpg, .jepg, .png"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          <button type="submit">Extract Code</button>
        </div>
      </form>

      <CodeEditor codeValue={extractedCode} />
    </div>
  );
}
