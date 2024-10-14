import Countdown from "./CountDown";

const CountDownSection = () => {
  return (
    <section className="py-8 bg-gray-200">
      <div className="container flow-content--m">
        <header>
          <h2 className="font-bold text-4xl text-center">الحدث سيبدأ خلال</h2>
        </header>
        <div dir="ltr">
          <Countdown />
        </div>
      </div>
    </section>
  );
};

export default CountDownSection;
