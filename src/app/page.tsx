"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import HelpDesk from "@/components/HelpDesk";

export default function Home() {
  const router = useRouter();

  async function handleLogin() {
    router.push("/tickets");
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-start sm:flex-col">
      <aside className="flex flex-col items-center justify-center bg-black w-96 h-screen sm:h-32 sm:w-full">
        <HelpDesk />
      </aside>
      <section className="flex flex-col items-center justify-center w-full h-full bg-white">
        <form className="flex flex-col items-center justify-center gap-3 py-5">
          <div className="flex flex-col items-start justify-center">
            <label className="text-gray-900 font-bold pl-1 text-sm">
              Usuário
            </label>
            <input
              type="text"
              className="max-w-56 h-8 rounded-lg p-3 border"
              placeholder="Usuário"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label className="text-gray-900 font-bold pl-1 text-sm">
              Senha
            </label>
            <input
              type="password"
              className="max-w-56 h-8 rounded-lg p-3 border"
              placeholder="Senha"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg w-40 py-1 bg-black text-white font-bold"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
