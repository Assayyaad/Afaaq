import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import Lottie from "lottie-react";
import { MdEmail } from "react-icons/md";
import emailAnimation from "../../public/animations/emailAnimation.json";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import submitAnimation from "../../public/animations/submitAnimation.json";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setSubmitted] = useState(false);

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

  const sendEmail = () => {
    emailjs
      .sendForm("service_t5lvzdy", "template_cneh97l", form.current, {
        publicKey: "WpAZ_YdF78OjIzJND",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(error);
        }
      );
  };

  const submitData = (data, e) => {
    e.preventDefault();
    setSubmitted(true);
    sendEmail();
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    console.log(data);
  };

  return (
    <section className="py-12" id="contact">
      <div className="container">
        <header
          className="flow-content--m text-center mb-8"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-bold flex items-center gap-4 justify-center">
            تواصل معنا
            <MdEmail className="order-[-1]" size={30} />
          </h2>
          <p className="text-md">يرجى تعبئة الاستمارة التالية لتتواصلوا معنا</p>
        </header>
        <div className="wrapper grid md:grid-cols-2 items-center">
          <form
            className="flow-content--m"
            onSubmit={handleSubmit(submitData)}
            data-aos="fade-left"
            data-aos-delay="500"
            ref={form}
          >
            <div className="">
              <label htmlFor="name" className="select-none mb-1 block">
                الاسم
              </label>
              <input
                type="text"
                name="name"
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
                يجب أن يتكون الاسم من 3 أحرف على الأقل!
              </span>
            </div>
            <div className="">
              <label htmlFor="email" className="select-none mb-1 block">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-2 py-1 border border-zinc-700 rounded-md"
                {...register("email")}
              />
              <span
                className={classNames("text-red-500 text-sm duration-300", {
                  "opacity-1": errors.email,
                  "opacity-0": !errors.email,
                })}
              >
                أدخل بريدًا إلكترونيًا صحيحًا!
              </span>
            </div>
            <div className="">
              <label htmlFor="message" className="select-none mb-1 block">
                الرسالة
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
                يجب أن لا يقل طول الرسالة عن 10 أحرف!
              </span>
            </div>
            <button
              type="submit"
              className={
                isValid
                  ? "px-8 py-2 rounded-md bg-[#222] hover:bg-[#000] duration-300 text-white"
                  : "px-8 py-2 rounded-md bg-gray-400  text-white duration-300"
              }
            >
              أرسل
            </button>
            {isSubmitted && (
              <div className="flex items-center gap-4">
                <span className="text-green-500 duration-300 text-md opacity-1">
                  تم إرسال رسالتك بنجاح
                </span>
                <Lottie animationData={submitAnimation} loop={false} />
              </div>
            )}
          </form>
          <div
            className="order-[-1] md:order-[0]"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <Lottie animationData={emailAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
