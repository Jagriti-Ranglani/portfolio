import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});


export const metadata = {
  title: "Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}