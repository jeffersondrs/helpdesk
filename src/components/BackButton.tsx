import Link from "next/link";
import React from "react";
import { Undo2 } from "lucide-react";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="border px-3 py-1 rounded-md bg-gray-900 flex flex-row-reverse items-center justify-center gap-2 mb-2"
    >
      <p className="text-base text-gray-50">Voltar</p>
      <Undo2 size={16} className="text-gray-50" />
    </Link>
  );
}
