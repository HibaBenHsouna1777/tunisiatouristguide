import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tunisia Tourist Guide",
  description: "Discover the beauty of Tunisia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'