import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SideBar from "./_components/SideBar/SideBar";
import { Toaster } from "@/components/ui/toaster"
import NavBar from "./_components/NavBar/NavBar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ceylon Tea House",
  description: "Admin Panel of CTH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
      <body className={outfit.className}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <SideBar />
          <div className="flex-1 overflow-y-auto">
            <NavBar  />
          
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
