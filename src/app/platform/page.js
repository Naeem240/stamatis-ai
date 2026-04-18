import Platform from "../components/sections/Platform";

export const metadata = {
  title: "Our Platform | Stamatis.AI",
  description: "Explore the Stamatis Engine: A patent-protected AI diagnostic tool for six major organ systems.",
};

export default function PlatformPage() {
  return (
    <main className="pt-16 sm:pt-20 bg-surface-strong transition-colors duration-300"> 
      <Platform />
    </main>
  );
}