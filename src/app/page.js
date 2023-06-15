"use client";
import { useState, useEffect } from "react";
import { createWorker } from "tesseract.js";

export default function Home() {
  const [workerObj, setWorkerObj] = useState(null);
  const extractCode = async (event) => {
    event.preventDefault();

    const fileInput = event.target.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    console.log(file);
    if (!file) return console.log("No file inputs detected");

    const reader = new FileReader();
    console.log(reader);
    reader.onload = async () => {
      const { data } = await workerObj.recognize(
        // "https://code.visualstudio.com/assets/docs/getstarted/themes/with-semantic-highlighting.png"
        reader.result
      );
      console.log(data.text);
    };

    reader.readAsDataURL(file);
    // const { data } = await workerObj.recognize(event.target.files[0]);
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

      <div className="flex flex-col">
        <form onSubmit={extractCode}>
          <label htmlFor="">Enter the code image</label>
          <input type="file" accept=".jpg, .jepg, .png" />
          <button type="submit">Extract Code</button>
        </form>
      </div>
    </div>
  );
}
