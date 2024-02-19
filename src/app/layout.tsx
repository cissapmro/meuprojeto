import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/componentes/header";

export const metadata: Metadata = {
  title: "Sistema com Next Js",
  description: "Projeto meuprojeto",
  keywords: ['Meu Projeto', 'Next Js', 'Curso da Udemy'],
  openGraph: {
    images: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Imagem do google"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
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
