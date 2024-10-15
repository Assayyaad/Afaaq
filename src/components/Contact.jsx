import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import Lottie from "lottie-react";
import { MdEmail } from "react-icons/md";
import emailAnimation from "../../public/animations/emailAnimation.json";

const Contact = () => {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(10),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section className="py-12">
      <div className="container">
        <header className="flow-content--m text-center mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-4 justify-center">
            تواصل معنا
            <MdEmail className="order-[-1]" size={30} />
          </h2>
          <p className="text-md">يرجى تعبئة الاستمارة التالية لتتواصلوا معنا</p>
        </header>
        <div
          className="wrapper grid md:grid-cols-2 items-center"
          lang="en"
          dir="ltr"
        >
          <form className="flow-content--m" onSubmit={handleSubmit(submitData)}>
            <div className="">
              <label htmlFor="name" className="select-none mb-1 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-2 py-1 border border-zinc-700 rounded-md"
                {...register("name")}
              />
              <span
                className={classNames("text-red-500 text-sm duration-300", {
                  "opacity-1": errors.name,
                  "opacity-0": !errors.name,
                })}
              >
                Name must be at least 3 characters long!
              </span>
            </div>
            <div className="">
              <label htmlFor="email" className="select-none mb-1 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-2 py-1 border border-zinc-700 rounded-md"
                {...register("email")}
              />
              <span
                className={classNames("text-red-500 text-sm duration-300", {
                  "opacity-1": errors.email,
                  "opacity-0": !errors.email,
                })}
              >
                Input a valid email!
              </span>
            </div>
            <div className="">
              <label htmlFor="message" className="select-none mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full px-2 py-1 border border-zinc-700 rounded-md min-h-[150px] vertical max-h-[200px]"
                {...register("message")}
              ></textarea>
              <span
                className={classNames("text-red-500 text-sm duration-300", {
                  "opacity-1": errors.message,
                  "opacity-0": !errors.message,
                })}
              >
                Message must be at least 10 characters long!
              </span>
            </div>
            <button
              type="submit"
              className={
                isValid
                  ? "px-8 py-2 rounded-md bg-[#222] hover:bg-[#000] duration-300 text-white"
                  : "px-8 py-2 rounded-md bg-gray-600  text-white duration-300"
              }
            >
              Submit
            </button>
          </form>
          <div className="order-[-1] md:order-[0]">
            <Lottie animationData={emailAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
