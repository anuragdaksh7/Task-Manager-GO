import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Task Manager App",
  description:
    "Boost your productivity with our AI capable task manager. Built with Go and NextJS for speed and deployed on Vercel for reliability. Take control of your tasks today!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-mono">
          <Navbar />
          <SpeedInsights />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
