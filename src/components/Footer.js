import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer class="p-4 bg-primary text-white sm:p-6 ">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 flex justify-center">
            <a
              className="text-xl font-semibold pb-1 uppercase text-white
              flex justify-center items-center gap-x-2 
              border-b border-b-transparent hover:border-b-white"
              href="/"
            >
              <Icon icon={"ph:code-simple-bold"} />
              <span>Code OCR App</span>
              <Icon icon={"ph:code-bold"} />
            </a>
          </div>
          <ul class="flex items-center justify-center gap-x-3 text-opacity-60">
            <li>
              <a href="#" class="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#feedback" class="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rifkyniyas/code-ocr-app"
                target="_blank"
                class="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/NiyasRifky"
                target="_blank"
                class="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.buymeacoffee.com/rifkyniyas"
                target="_blank"
                class="hover:underline"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white my-5 bg-opacity-25 h-[1px] w-full"></div>
        <div class="flex flex-col gap-y-5 text-center lg:text-left lg:flex-row justify-between">
          <div class="flex flex-col gap-y-1">
            <p>
              Made by&nbsp;
              <a
                href="https://rifkyniyas.vercel.app/"
                target="_blank"
                className="underline font-bold hover:no-underline"
              >
                Rifky Niyas
              </a>
            </p>
            <p>
              Powered by&nbsp;
              <a
                href="https://vercel.com"
                target="_blank"
                className="underline font-bold hover:no-underline"
              >
                Vercel
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://tesseract.projectnaptha.com/"
                target="_blank"
                className="underline font-bold hover:no-underline"
              >
                Tesseract.js
              </a>
            </p>
          </div>
          <span class="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
