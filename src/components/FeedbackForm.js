import { Icon } from "@iconify/react";
import { Formik, Form, useField } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label
        htmlFor={props.id || props.name}
        className="block mb-2 text-sm outline-none font-medium"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="px-3 py-2 text-sm rounded outline-primary w-full border border-gray"
      />
      {meta.touched && meta.error ? (
        <p className="text-red-400 text-xs">{meta.error}</p>
      ) : null}
    </div>
  );
};

const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label
        htmlFor={props.id || props.name}
        className="block mb-2 text-sm outline-none font-medium"
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="px-3 py-2 text-sm rounded outline-primary w-full border border-gray"
      ></textarea>
      {meta.touched && meta.error ? (
        <p className="text-red-400 text-xs">{meta.error}</p>
      ) : null}
    </div>
  );
};

const FeedbackForm = () => {
  return (
    <>
      <div className="bg-gray bg-opacity-25 h-[1px] w-full"></div>
      <section class="py-8 lg:py-16 px-8 mx-auto max-w-screen-md" id="feedback">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Provide Feedback
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Ran into an issue? Looking for a new feature? Let me know of your
          thoughts and I will reach back to you shortly
        </p>
        <Formik
          initialValues={{
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Oops, Invalid email address")
              .required("Hey, A vaild Email address is required"),
            message: Yup.string()
              .min(10, "Don't be shy, we can talk a little more.")
              .max(
                500,
                "Hey, shall have a brief conversation? Just a little brief."
              )
              .required("Well, I am looking for your message"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setSubmitting(false);
              // Send form data to FormKeep API
              console.log(process.env.NEXT_PUBLIC_formActionURL);
              const response = await fetch(
                process.env.NEXT_PUBLIC_formActionURL,
                {
                  method: "POST",
                  body: JSON.stringify(values),
                  headers: {
                    Accept: "application/javascript",
                    "Content-Type": "application/json",
                  },
                }
              );
              toast.success("Your feedback was submitted successfully");
              return resetForm();
            } catch (err) {
              return toast.error(
                "An error has occured while submitting your feedback. Please try again."
              );
            }
          }}
        >
          <Form>
            <TextInput
              label="Your Email"
              name="email"
              type="email"
              placeholder="name@email.com"
            />
            <TextAreaInput
              label="Your message"
              name="message"
              rows={6}
              placeholder="Leave your comment"
            />
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white bg-cta hover:bg-opacity-50 rounded"
            >
              Submit
            </button>
          </Form>
        </Formik>

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
