import {
    ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({children}) {
  return (
      <ClerkProvider>
        <html lang="en">
            <body className="font-mono">
                <SpeedInsights/>
                {children}
            </body>
        </html>
      </ClerkProvider>
  )
}