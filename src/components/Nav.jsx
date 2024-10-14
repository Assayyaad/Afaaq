const Nav = () => {
  return (
    <nav className="py-12 absolute right-0 left-0 text-white">
      <div className="container" dir="ltr">
        <div className="wrapper flex items-center justify-between">
          <ul className="flex items-start gap-4 f">
            <li>
              <a href="">تواصل معنا</a>
            </li>
            <li>
              <a href="">شركاؤنا</a>
            </li>
            <li>
              <a href="">جدول الأسبوع</a>
            </li>
            <li>
              <a href="">الخدمات</a>
            </li>
            <li>
              <a href="">الرئيسية</a>
            </li>
          </ul>
          <a href="" className="logo font-bold text-3xl">
            الاسم
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
