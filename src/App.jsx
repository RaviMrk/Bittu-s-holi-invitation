import HoliColorThrow from "./components/HoliColorThrow";
import Sparkles from "./components/Sparkles";
import ColorSplashes from "./components/ColorSplashes";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import FamilySection from "./components/FamilySection";
import MessageSection from "./components/MessageSection";
import Footer from "./components/Footer";
import AutoScroll from "./components/AutoScroll";

function App() {
  return (
    <div
      className="min-h-screen font-sans relative"
      style={{
        background: "linear-gradient(170deg, #fff5ee 0%, #ffe8d6 30%, #fdd9b5 55%, #fce4c0 80%, #fef6e0 100%)",
      }}
    >
      <AutoScroll />
      <HoliColorThrow />
      <ColorSplashes />
      <Sparkles />
      <HeroSection />
      <EventDetails />
      <FamilySection />
      <Footer />
    </div>
  );
}

export default App;
