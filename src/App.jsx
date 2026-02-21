import HoliColorThrow from "./components/HoliColorThrow";
import Sparkles from "./components/Sparkles";
import ColorSplashes from "./components/ColorSplashes";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import FamilySection from "./components/FamilySection";
import MessageSection from "./components/MessageSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-cream-50 min-h-screen font-sans relative">
      <HoliColorThrow />
      <ColorSplashes />
      <Sparkles />
      <HeroSection />
      <EventDetails />
      <FamilySection />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default App;
