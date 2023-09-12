"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

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
  const queryClient = new QueryClient();
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
