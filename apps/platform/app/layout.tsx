import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Navbar, Sidebar } from "./_layout";
import { cx } from "cva";
import { ThemeFormProvider } from "./_components";
import { Geist, Geist_Mono } from "next/font/google";
import { ConfigFormProvider } from "./_components/config-form";

export const metadata: Metadata = {
  title: "Ophelia",
  description: "The design system for building modern web applications.",
};

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={cx(GeistMono.className, GeistSans.className, "h-full")}
    >
      <body className="font-sans bg-secondary w-full h-screen">
        <ConfigFormProvider>
          <ThemeFormProvider>
            <div className="w-full h-full flex flex-col root">
              <Navbar />

              <div className="w-full flex flex-1">
                <Sidebar />

                {children}
              </div>
            </div>
          </ThemeFormProvider>
        </ConfigFormProvider>
      </body>
    </html>
  );
}
