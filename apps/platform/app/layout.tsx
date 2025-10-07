import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Navbar, Sidebar } from "./_layout";
import { cx } from "cva";
import { ThemeFormProvider } from "./_components";
import localFont from "next/font/local";
import { Geist, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Ophelia",
  description: "The design system for building modern web applications.",
};

const JetBrainsMono = localFont({
  src: "./public/JetBrainsMono-Regular.woff2",
});

const GeistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html
      lang="en"
      className={cx(JetBrainsMono.className, GeistSans.className, "h-full")}
    >
      <body className="font-sans bg-secondary w-full h-screen">
        <ThemeFormProvider>
          <div className="w-full h-full flex flex-col root">
            <Navbar />

            <div className="w-full flex flex-1">
              <Sidebar />

              <div
                className={cx(
                  "bg-primary bg-[radial-gradient(#F0F2F4_1px,transparent_1px)]",
                  "[background-size:16px_16px]",
                  "border-primary-style border-l-[0.5px] border-t-[0.5px] rounded-ss-md",
                  "flex-1",
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </ThemeFormProvider>
      </body>
    </html>
  );
}
