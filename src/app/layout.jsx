import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medicine",
  description: " ",
  robots: "index, follow",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png" },
      new URL("/favicon-16x16.png", "https://momedicine.com"),
      { url: "/favicon-32x32.png", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: ["/android-chrome-512x512.png"],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
