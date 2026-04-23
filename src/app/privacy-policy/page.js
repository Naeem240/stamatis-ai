import Privacy from "@/app/components/sections/Privacy";

export const metadata = {
  title: "Privacy Policy | Stamatis.AI - Clinical Data Privacy",
  description: "Stamatis.AI is committed to protecting the privacy of healthcare professionals, hospital partners, and any clinical data shared with our platform. Read our comprehensive privacy policy.",
  keywords: [
    "privacy policy",
    "clinical data privacy",
    "HIPAA compliance",
    "healthcare AI privacy",
    "Stamatis.AI privacy",
    "Cornerstone Eagle LLC privacy",
    "medical data protection",
    "patient data privacy",
    "health information privacy",
    "AI diagnostic privacy"
  ],
  authors: [{ name: "Stamatis.AI - Cornerstone Eagle LLC" }],
  creator: "Stamatis.AI",
  publisher: "Stamatis.AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stamatis.ai/privacy-policy",
    siteName: "Stamatis.AI",
    title: "Privacy Policy | Stamatis.AI - Clinical Data Privacy",
    description: "Stamatis.AI is committed to protecting the privacy of healthcare professionals, hospital partners, and any clinical data shared with our platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stamatis.AI Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Stamatis.AI",
    description: "Clinical Data Privacy Policy - Stamatis.AI is committed to protecting the privacy of healthcare professionals.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://stamatis.ai/privacy-policy",
  },
  category: "privacy",
  classification: "Legal & Privacy",
};

export default function PrivacyPolicyPage() {
  return <Privacy />;
}