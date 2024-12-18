import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mia Nguyen Portfolio",
  description: "Explore the portfolio of Mia Nguyen, a full-stack developer specializing in modern web technologies.",
  keywords: "Mia Nguyen, portfolio, front-end developer, full-stack developer, web developer, Next.js, React.js",
  author: "Mia Nguyen",
  openGraph: {
    title: "Mia Nguyen Portfolio",
    description: "The portfolio of Mia Nguyen, showcasing front-end development projects and skills.",
    url: "https://mia-portfolio-flame.vercel.app/",
    siteName: "Mia Nguyen Portfolio",
    locale: "en_US",
    type: "website",
  },
  nextSizeAdjust: false,
  viewport: 'width=device-width, initial-scale=1.0', 
  robots: {
    index: true, // Allow page to be indexed in search results
    follow: true, // // Allow search engine to follow and index links on page
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
