"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { name } = useSelector((state: RootState) => state.user);

  return (
    <>
      <nav className="flex flex-row items-center justify-between w-full h-16 sm:h-16 border-b bg-gray-50">
        <Link href="/home" className="cursor-pointer">
          <h1 className="text-2xl text-gray-900 font-bold px-4">Help Desk</h1>
        </Link>
        {pathname === "/home/newcall" && (
          <button
            className="border-2 border-gray-300 w-20 h-10 rounded-lg px-4"
            onClick={() => router.push("/home")}
          >
            Voltar
          </button>
        )}
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-xl text-gray-900 font-bold px-4">
            Olá {name.split(" ")[0]}!
          </h1>
        </div>

        <button
          className="border-2 border-gray-300 w-20 h-10 sm:w-16 rounded-lg px-4 sm:text-xs"
          onClick={() => router.push("/")}
        >
          Sair
        </button>
      </nav>
      {children}
    </>
  );
}
