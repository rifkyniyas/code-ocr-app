import { Icon } from "@iconify/react";
import React from "react";

const FeedbackForm = () => {
  return (
    <>
      <div className="bg-gray bg-opacity-25 h-[1px] w-full"></div>
      <section class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Provide Feedback
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Ran into an issue? Looking for a new feature? Let me know of your
          thoughts and I will reach back to you shortly
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm outline-none font-medium "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="px-3 py-2 text-sm rounded outline-primary w-full border border-gray"
              placeholder="example@email.com"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium ">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block px-3 py-2 w-full text-sm rounded outline-primary border border-gray"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white bg-cta hover:bg-opacity-50 rounded"
          >
            Submit
          </button>
        </form>

        <div className="flex justify-center items-center gap-x-6 my-5">
          <span className="block h-[1px] w-1/2 bg-gray bg-opacity-25"></span>
          <span>or</span>
          <span className="block h-[1px] w-1/2 bg-gray bg-opacity-25"></span>
        </div>

        <div className="flex justify-center">
          <a
            href="https://twitter.com/NiyasRifky"
            target="_blank"
            className="inline-flex py-3 px-5 justify-center items-center gap-x-3 rounded 
          bg-[#1DA1F2] hover:bg-opacity-50 text-white"
          >
            <Icon icon={"entypo-social:twitter"} />
            <span>Drop a DM via Twitter</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default FeedbackForm;
