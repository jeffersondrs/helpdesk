import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Provider from "../store/provider/Provider";

const poppins = Poppins({ subsets: ["latin-ext"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Chamados - Help Desk",
  description: "Sistema de chamados para Help Desk setor TI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
