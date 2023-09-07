"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function CallPage() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const { calls } = useSelector((state: RootState) => state.call);

  const call = calls.find((call) => call.id === id);

  return (
    <main className="flex min-h-screen flex-row items-center justify-start sm:flex-col">
      <div className="flex flex-col items-center justify-center bg-white w-full h-screen sm:w-full sm:h-full">
        <h1>Título: {call?.title}</h1>
        <h1>Status: {call?.status}</h1>
        <h1>Descrição: {call?.description}</h1>
        <h1>Usuário: {call?.userName}</h1>
        <h1>Prioridade: {call?.priority}</h1>
      </div>
    </main>
  );
}
