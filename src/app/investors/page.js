import Investors from "../components/sections/Investors";

export const metadata = {
  title: "Investor Relations | Stamatis.AI",
  description: "Strategic partnerships and Series A growth metrics for the future of medical intelligence.",
};

export default function InvestorsPage() {
  return (
    <main className="pt-16 sm:pt-20 bg-surface-strong transition-colors duration-300">
      <Investors />
    </main>
  );
}