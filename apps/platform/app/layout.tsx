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
      <body className="bg-secondary w-full h-screen">
        <div className="w-full h-full flex flex-col">
          <Navbar />

          <div className="w-full flex flex-1">
            <Sidebar />

            <div className="bg-primary flex-1 border-primary-style border-l-[0.5px] border-t-[0.5px] rounded-ss-md">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
