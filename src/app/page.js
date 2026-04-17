import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Platform from "./components/sections/Platform";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Platform />
      {/* Step 3: We will add PlatformSection and TeamSection here */}
    </main>
  );
}