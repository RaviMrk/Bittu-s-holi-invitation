import Sparkles from "./components/Sparkles";
import ColorSplashes from "./components/ColorSplashes";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import CountdownSection from "./components/CountdownSection";
import MessageSection from "./components/MessageSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-royal-gradient min-h-screen text-white font-sans relative">
      <ColorSplashes />
      <Sparkles />
      <HeroSection />
      <EventDetails />
      <CountdownSection />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default App;
