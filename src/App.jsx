import Contact from "./components/Contact";
import CountDownSection from "./components/CountDownSection";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Sponsors from "./components/Sponsors";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CountDownSection />
      <Services />
      <Table />
      <Sponsors />
      <Contact />
    </>
  );
}

export default App;
