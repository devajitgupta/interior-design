import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Elegance Interiors | Premium Interior Design",
  description:
    "Transform your space with our expert interior design services. From concept to completion, we create beautiful, functional spaces tailored to your lifestyle.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

