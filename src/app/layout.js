import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "./components/ui/Preloader";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>

// Configure Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // This creates a CSS variable
  display: 'swap',
});

// Configure DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", // This creates a CSS variable
  display: 'swap',
});

export const metadata = {
  title: "Stamatis.AI",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    // Add the variables to the HTML tag directly
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased text-text-primary dark:text-white">
        <ThemeProvider>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}