
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jeetendra Karki - Portfolio",
  description: "Full Stack Developer | Problem Solver | Tech Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // useSmoothScroll()

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'