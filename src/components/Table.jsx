import TableCard from "./TableCard";

const Table = () => {
  return (
    <section className="py-12" id="table">
      <div className="container">
        <header
          className="mb-12 flow-content--s"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-4xl font-bold text-center">جدول الاسبوع</h2>
        </header>
        <div className="cards-wrapper py-6 ">
          <div className="wrapper flow-content--m">
            <div className="">
              <header
                className="flow-content--s mb-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h2 className="font-bold text-2xl">اليوم الاول</h2>
                <p className="font-bold text-2xl">تاريخ</p>
              </header>
              <div className="wrapper grid md:grid-cols-2 gap-4">
                <TableCard />
                <TableCard />
              </div>
            </div>
            <div className="">
              <header
                className="flow-content--s mb-4"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <h2 className="font-bold text-2xl">اليوم الثاني</h2>
                <p className="font-bold text-2xl">تاريخ</p>
              </header>
              <div className="wrapper grid md:grid-cols-2 gap-4">
                <TableCard />
                <TableCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
