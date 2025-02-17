import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topnav from "@/components/navs/Topnav";
import MainNav from "@/components/navs/MainNav";
import NavLast from "@/components/navs/NavLast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased top`}
      >

       <nav>
       <Topnav></Topnav>
       <MainNav></MainNav>
       <NavLast></NavLast>
       </nav>

        {children}
      </body>
    </html>
  );
}
