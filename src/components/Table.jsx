import TableCard from "./TableCard";

const Table = () => {
  return (
    <section className="py-12">
      <div className="container">
        <header className="mb-12 flow-content--s">
          <h2 className="text-4xl font-bold text-center">جدول الاسبوع</h2>
        </header>
        <div className="cards-wrapper py-6 ">
          <div className="wrapper flow-content--m">
            <div className="">
              <header className="flow-content--s mb-4">
                <h2 className="font-bold text-2xl">اليوم الاول</h2>
                <p className="font-bold text-2xl">تاريخ</p>
              </header>
              <div className="wrapper grid md:grid-cols-2 gap-4">
                <TableCard />
                <TableCard />
              </div>
            </div>
            <div className="">
              <header className="flow-content--s mb-4">
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
