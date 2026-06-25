import Hero from "./components/Hero";
import LoveStats from "./components/LoveStats";
import Timeline from "./components/Timeline";
import MemoryGallery from "./components/MemoryGallery";
import CodeLove from "./components/CodeLove";
import HiddenTerminal from "./components/HiddenTerminal";
import Reasons from "./components/Reasons";
import FinalSection from "./components/FinalSection";

function App() {
  return (
    <main className="relative bg-ink-950 min-h-screen">
      <Hero />
      <LoveStats />
      <Timeline />
      <MemoryGallery />
      <CodeLove />
      <HiddenTerminal />
      <Reasons />
      <FinalSection />
    </main>
  );
}

export default App;
