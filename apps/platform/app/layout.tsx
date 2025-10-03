import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Navbar, Sidebar } from "./_layout";
import { cx } from "cva";

export const metadata: Metadata = {
  title: "Ophelia",
  description: "The design system for building modern web applications.",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en" className="h-full">
      <body className="bg-secondary w-full h-screen">
        <div className="w-full h-full flex flex-col root">
          <Navbar />

          <div className="w-full flex flex-1">
            <Sidebar />

            <div
              className={cx(
                "bg-primary bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]",
                "[background-size:16px_16px]",
                "border-primary-style border-l-[0.5px] border-t-[0.5px] rounded-ss-md",
                "flex-1",
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
