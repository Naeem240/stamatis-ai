import Team from "../components/sections/Team";

export const metadata = {
  title: "Our Team | Stamatis.AI Leadership",
  description: "Meet the experts in AI research, radiology, and clinical validation behind Stamatis.AI.",
};

export default function TeamPage() {
  return (
    <main className="pt-20">
      <Team />
    </main>
  );
}