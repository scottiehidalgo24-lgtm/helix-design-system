import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/layout/sidebar";
import { ToastContainer } from "@/lib/toast";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Helix — Governa l'AI",
  description: "Marketplace agenti AI. Scegli, attiva, usa.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <TooltipProvider>
          <div className="flex h-screen overflow-hidden bg-[var(--bg-app)]">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto pt-0 md:pt-0">
              <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
                {children}
              </div>
            </main>
          </div>
          </TooltipProvider>
          <ToastContainer />
      </body>
    </html>
  );
}
