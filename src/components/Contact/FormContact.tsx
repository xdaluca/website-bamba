"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

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
        <Link
          target="_blank"
          href={"https://wa.me/5521968410716?text="}
        >
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6339_6463)">
              <path
                d="M1.1097 25.8914C1.10848 30.2946 2.25898 34.5939 4.44664 38.3834L0.900482 51.331L14.1507 47.8568C17.8156 49.8518 21.9218 50.8972 26.0945 50.8975H26.1054C39.8804 50.8975 51.0935 39.6885 51.0994 25.9111C51.102 19.235 48.5045 12.9573 43.785 8.23419C39.0665 3.51153 32.7909 0.909297 26.1044 0.90625C12.3279 0.90625 1.11559 12.1147 1.1099 25.8914"
                fill="url(#paint0_linear_6339_6463)"
              />
              <path
                d="M0.217344 25.8814C0.215922 30.443 1.40766 34.8961 3.67331 38.8213L0 52.233L13.7254 48.6342C17.5071 50.6961 21.765 51.7833 26.0977 51.7849H26.1089C40.378 51.7849 51.9939 40.1726 52 25.9021C52.0024 18.9861 49.3114 12.4826 44.4234 7.59037C39.5348 2.69872 33.0348 0.00284375 26.1089 0C11.8373 0 0.223031 11.6106 0.217344 25.8814ZM8.3913 38.1453L7.87881 37.3317C5.72447 33.9062 4.58737 29.9477 4.589 25.883C4.59347 14.0215 14.2468 4.37125 26.117 4.37125C31.8654 4.37369 37.2677 6.61456 41.3311 10.6803C45.3942 14.7465 47.63 20.1516 47.6285 25.9005C47.6233 37.762 37.9697 47.4134 26.1089 47.4134H26.1003C22.2383 47.4114 18.4507 46.3742 15.1474 44.4143L14.3613 43.9481L6.21644 46.0836L8.3913 38.1453Z"
                fill="url(#paint1_linear_6339_6463)"
              />
              <path
                d="M19.6377 15.0625C19.1531 13.9854 18.643 13.9636 18.1821 13.9447C17.8047 13.9285 17.3733 13.9297 16.9423 13.9297C16.5108 13.9297 15.8098 14.092 15.2173 14.739C14.6242 15.3865 12.9529 16.9514 12.9529 20.1342C12.9529 23.3169 15.2711 26.3931 15.5943 26.8251C15.9179 27.2563 20.0698 33.9968 26.6453 36.5899C32.1102 38.7449 33.2223 38.3163 34.4084 38.2082C35.5946 38.1006 38.2361 36.6438 38.7749 35.1331C39.3142 33.6227 39.3142 32.328 39.1526 32.0574C38.9909 31.7878 38.5594 31.626 37.9125 31.3026C37.2655 30.9792 34.0848 29.4139 33.4919 29.198C32.8987 28.9823 32.4675 28.8746 32.0361 29.5224C31.6046 30.1691 30.3658 31.626 29.9882 32.0574C29.611 32.4898 29.2333 32.5437 28.5866 32.2201C27.9392 31.8955 25.8558 31.2132 23.384 29.0095C21.4608 27.2947 20.1624 25.1771 19.785 24.5294C19.4076 23.8826 19.7446 23.532 20.069 23.2097C20.3596 22.9198 20.7161 22.4543 21.0399 22.0766C21.3625 21.6988 21.4701 21.4293 21.6858 20.9978C21.9018 20.566 21.7937 20.1882 21.6322 19.8646C21.4701 19.541 20.213 16.3416 19.6377 15.0625Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6339_6463"
                x1="2510.85"
                y1="5043.38"
                x2="2510.85"
                y2="0.90625"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1FAF38" />
                <stop
                  offset="1"
                  stop-color="#60D669"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6339_6463"
                x1="2600"
                y1="5223.3"
                x2="2600"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9F9F9" />
                <stop
                  offset="1"
                  stop-color="white"
                />
              </linearGradient>
              <clipPath id="clip0_6339_6463">
                <rect
                  width="52"
                  height="52.4062"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FormContact;
