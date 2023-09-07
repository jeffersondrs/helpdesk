import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Abrir Chamado",
  description: "Abertura de chamado para Help Desk setor TI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Navigation>{children}</Navigation>
  );
}
