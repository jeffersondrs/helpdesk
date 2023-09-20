import Link from "next/link";
import React from "react";
import { Undo2, LogOut } from "lucide-react";

export default function BackButton({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="border px-3 py-1 rounded-md bg-gray-900 flex flex-row-reverse items-center justify-center gap-2 mb-2"
    >
      <p className="text-base text-gray-50">{text}</p>
      {text === "Voltar" && <Undo2 size={16} className="text-gray-50" />}
      {text === "Sair" && <LogOut size={16} className="text-gray-50" />}
    </Link>
  );
}
