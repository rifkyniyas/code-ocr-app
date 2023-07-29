"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Icon } from "@iconify/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "@/components/Header";
import MainForm from "@/components/MainForm";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import BuyMeACoffee from "@/components/BuyMeACoffee";

export default function Home() {
  return (
    <>
      <Header />
      <BuyMeACoffee />
      {/* Hero Section */}
      <section class="container">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Tired of typing out entire code snippets from images you see online?
          </h1>
          <p class="mb-14 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Extract code from images with just a few clicks and start using in
            your project right away.
          </p>
          <Provider store={store}>
            <MainForm />
          </Provider>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={1000} //1s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable
        draggablePercent={80}
        theme="light"
      />
      <FeedbackForm />
      {/* Support my work section */}
      <div className="bg-gray bg-opacity-25 h-[1px] w-full"></div>
      <div className="py-8 px-4 my-10 rounded mx-auto max-w-screen-md shadow-md bg-white">
        <h2 class="mb-5 text-4xl tracking-tight font-extrabold text-center">
          Support My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex justify-center items-center col-span-4">
            <Icon
              icon="line-md:buy-me-a-coffee-twotone"
              className="w-24 h-24 text-primary "
            />
          </div>
          <div className="col-span-8">
            <p className="mb-1">
              Hey, hope you enjoyed using the app and it was able to save your
              time. It takes considerable amount of time and effort to build
              these tools and I will work on improving the experience on this
              app. This will remain totally free to use. You can always show
              your support by providing your{" "}
              <a
                href="#feedback"
                className="underline underline-offset-2 text-primary hover:no-underline"
              >
                feedback
              </a>
              .
            </p>
            <p className="mb-1">
              If you are <strong>able to and willing to</strong> please consider
              buying me a cup of coffee. You can make a one-time donation or
              become a recurring supporter. Every contribution, big or small,
              helps me to build more tools empowering your digital experience.
            </p>
            <p>Thank you and have a beautiful day, my friend!</p>
            <a
              href="https://www.buymeacoffee.com/rifkyniyas"
              target="_blank"
              className="inline-flex py-3 mt-3 px-5 justify-center items-center gap-x-3 rounded 
          bg-cta hover:bg-opacity-50 text-white"
            >
              <span>Buy Me A Coffee</span>
            </a>
          </div>
        </div>
      </div>
      {/* End of support my work section */}
      <Footer />
    </>
  );
}
