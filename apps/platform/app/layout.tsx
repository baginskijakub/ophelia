import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Navbar, Sidebar } from "./_layout";

export const metadata: Metadata = {
  title: "Ophelia",
  description: "The design system for building modern web applications.",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en" className="h-full">
      <body className="bg-gray-50 w-full h-screen">
        <div className="w-full h-full flex flex-col">
          <Navbar />

          <div className="w-full flex flex-1">
            <Sidebar />

            <div className="bg-white flex-1 border-l-[0.5px] border-t-[0.5px] rounded-ss-md border-gray-200">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
