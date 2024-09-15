// app/layout.js or wherever you define RootLayout
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blockchainist",
  description: "Bau Blockchainist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex flex-col`}
      >
        <Navbar />
        
        <main className="flex-1 mt-[70px] custom:mt-24   custom:scrollbar scrollbar-w-[10px]  custom:scrollbar-w-3  scrollbar-thumb-gray-700 scrollbar-track-white hover:scrollbar-thumb-gray-600 active:scrollbar-thumb-gray-500  overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
