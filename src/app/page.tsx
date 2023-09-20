import Link from "next/link";
import React from "react";
import NewTicket from "../components/NewTicket";
import HelpDesk from "@/components/HelpDesk";

export default function Home() {
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
          <Link href="/tickets">
            <button
              type="submit"
              className="rounded-lg w-40 py-1 bg-black text-white font-bold"
            >
              Entrar
            </button>
          </Link>
        </form>
        {/* <Link
          href={{
            pathname: "/ticket",
          }}
          className="flex flex-col items-center justify-center w-56 h-32 hover:bg-gray-100 border-2 border-gray-900 rounded-lg transition duration-300 ease-in-out transform"
        >
          <NewTicket />
          <p className="text-xl text-gray-900">Abrir novo chamado</p>
        </Link> */}
      </section>
    </main>
  );
}
