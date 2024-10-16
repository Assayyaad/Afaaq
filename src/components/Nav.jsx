import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const isDesktop = window.innerWidth >= 768;

  return (
    <nav
      className="py-12 text-white absolute top-0 left-0 right-0 "
      data-aos={isDesktop && "zoom-in"}
    >
      <div className="container flex items-center justify-between" dir="ltr">
        <ul className="md:flex items-start gap-4 f hidden">
          <li>
            <a href="#contact">تواصل معنا</a>
          </li>
          <li>
            <a href="#sponsors">شركاؤنا</a>
          </li>
          <li>
            <a href="#table">جدول الأسبوع</a>
          </li>
          <li>
            <a href="#services">الخدمات</a>
          </li>
          <li>
            <a href="#">الرئيسية</a>
          </li>
        </ul>

        <div className="mobile-nav md:hidden block">
          <button role="navigation">
            <GiHamburgerMenu size={25} onClick={() => setNav(!nav)} />
          </button>
          <ul
            className={
              nav
                ? "fixed top-0 left-0 bottom-0 w-[80%] z-[999] text-white flex flex-col items-center justify-center bg-black gap-8 translate-x-0 duration-300"
                : "fixed top-0 left-0 bottom-0 w-[80%] z-[999] text-white flex flex-col items-center justify-center bg-black gap-8 translate-x-[-100%] duration-300"
            }
          >
            <li>
              <a href="#" className="text-4xl" onClick={() => setNav(!nav)}>
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-4xl"
                onClick={() => setNav(!nav)}
              >
                الخدمات
              </a>
            </li>
            <li>
              <a
                href="#table"
                className="text-4xl"
                onClick={() => setNav(!nav)}
              >
                جدول الأسبوع
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className="text-4xl"
                onClick={() => setNav(!nav)}
              >
                شركاؤنا
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-4xl"
                onClick={() => setNav(!nav)}
              >
                تواصل معنا
              </a>
            </li>
            <button>
              <IoMdClose
                size={35}
                className="absolute top-10 left-10 z-[1000]"
                onClick={() => setNav(!nav)}
              />
            </button>
          </ul>
        </div>
        <a href="#" className="logo font-bold text-3xl">
          الاسم
        </a>
      </div>
    </nav>
  );
};

export default Nav;
