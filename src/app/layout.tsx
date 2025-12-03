import Footer from "@/_Components/layout/Footer/Footer";
import TopHeader from "@/_Components/layout/TopHeader/TopHeader";
import { Toaster } from "@/_Components/ui/sonner";
import MainProvider from "@/Provider/MainProvider";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Navbar from "../_Components/layout/Navbar/Navbar";
import "./globals.css";
import BottomFilter from "@/_Components/shared/BottomFilter/BottomFilter";
import { ThemeProvider } from "@/_Components/theme-provider";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", '300', '400', '500', '600', '700', '800', '900'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Exclusive is an e-commerce website that sells exclusive products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <MainProvider>
            <TopHeader />
            <Navbar />
            <div className="container">
              {children}
            </div>
            <Toaster />
            <Footer />
            <BottomFilter />
          </MainProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
