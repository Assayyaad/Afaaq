const Footer = () => {
  return (
    <footer className="bg-[#222] text-white py-12">
      <div className="container">
        <div className="container flex md:flex-row flex-col items-center justify-between">
          <a href="#" className="text-2xl font-bold mb-8 md:mb-0">
            الاسم
          </a>
          <ul className="flex md:flex-row flex-col items-center gap-4 justify-center">
            <li>
              <a href="#">الرئيسية</a>
            </li>
            <li>
              <a href="#services">الخدمات</a>
            </li>
            <li>
              <a href="#table">جدول الأسبوع</a>
            </li>
            <li>
              <a href="#sponsors">شركاؤنا</a>
            </li>
            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
