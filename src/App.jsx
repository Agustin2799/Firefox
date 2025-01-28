import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DescriptionSection from "./components/DescriptionSection";
import InformationSection from "./components/InformationSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white ">
      <Nav />
      <Hero />
      <DescriptionSection />
      <InformationSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
