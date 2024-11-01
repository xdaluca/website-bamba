"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const FormContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const SERVICE_ID = `${process.env.NEXT_PUBLIC_SERVICE_ID}`;
  const TEMPLATE_ID = `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`;
  const PUBLIC_KEY = `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`;

  const onSubmit = (data: FormData) => {
    const formattedData = {
      name: data.name,
      email: data.email,
      message: data.message,
    } as Record<string, unknown>;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formattedData, PUBLIC_KEY).then(
      () => {
        toast.success("Email sent successfully!");
        reset();
      },
      (err) => {
        toast.error(err || "Failed to send email. Please try again.");
      }
    );
  };

  return (
    <div
      id="bamba-eco"
      className="w-full flex justify-center items-center px-6 mb-20"
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
      <div
        className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center bg-rich-black py-20 md:px-20 px-6 gap-10 rounded-2xl"
        style={{ boxShadow: "0px -40px 160px 0px #007AFF29" }}
      >
        <div className="w-full">
          <p className="text-very-light-gray text-3xl font-semibold">
            Fill out this form and contact us
          </p>
          <div className="text-dim-gray">
            Have questions or want to learn more? Fill out the form, and our hub
            team will get back to you soon.
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <label
              htmlFor="name"
              className="text-very-light-gray text-3xl font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 rounded-md bg-white text-black"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-very-light-gray text-3xl font-semibold"
            >
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full p-2 rounded-md bg-white text-black"
              placeholder="Exemple@email.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="message"
              className="text-very-light-gray text-3xl font-semibold"
            >
              Your questions or comments
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "Please enter your questions or comments",
              })}
              className="w-full p-2 rounded-md bg-white text-black"
              placeholder="Your questions or comments"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 p-2 rounded-md bg-very-light-gray text-rich-black hover:bg-light-gray transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
