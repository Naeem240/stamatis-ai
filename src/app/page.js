import Hero from "./components/sections/Hero";
import Investors from "./components/sections/Investors";
import Platform from "./components/sections/Platform";
import Team from "./components/sections/Team";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-strong transition-colors duration-300">
      <Hero />
      <Platform />
      <Team/>
      <Investors/>
    </main>
  );
}