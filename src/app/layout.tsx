import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/componentes/header";

export const metadata: Metadata = {
  title: "Sistema com Next Js",
  description: "Curso da Udemy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
