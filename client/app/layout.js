import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "TaskIt",
  description:
    "Boost your productivity with our AI capable task manager. Built with Go and NextJS for speed and deployed on Vercel for reliability. Take control of your tasks today!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-mono bg-black text-white">
          <Navbar />
          <SpeedInsights />
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
