import React from "react";
import BackButton from "./BackButton";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Aside({ children }: { children: React.ReactElement }) {
  return (
    <main className="flex flex-row justify-center items-center h-screen w-full fixed">
      <aside className="flex flex-col justify-between items-center h-full w-96 bg-gray-950 border-r">
        <div className="w-full flex-1 p-5">
          <h1 className="text-2xl font-bold text-white py-5">Meus Tickets</h1>
          <div className="flex-1">
            <Link href="/ticket">
              <button className="flex flex-row bg-gray-50 rounded-lg justify-center items-center gap-2 py-2 mt-2 w-full">
                <p className="text-gray-900 font-bold">Novo Ticket</p>
                <Plus size={20} />
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <form className="flex flex-col w-full">
              <label className="text-white">Pesquisar</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 bg-gray-100"
                placeholder="Título, data, status..."
              />
            </form>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <form className="flex flex-col w-full">
              <label className="text-white">Título</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 bg-gray-100"
              />
            </form>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <form className="flex flex-col w-full">
              <label className="text-white">Status</label>
              <select className="w-full p-1 rounded-md border border-gray-300 bg-gray-100">
                <option value="aberto">Aberto</option>
                <option value="pendente">Pendente</option>
                <option value="fechado">Fechado</option>
              </select>
            </form>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <form className="flex flex-col w-full">
              <label className="text-white">Data</label>
              <input
                type="date"
                className="w-full p-2 rounded-md border border-gray-300 bg-gray-100"
              />
            </form>
          </div>

          <div className="flex flex-row justify-between items-center w-full mt-5">
            <form className="flex flex-col w-full">
              <label className="text-white">Prioridade</label>
              <select className="w-full p-1 rounded-md border border-gray-300 bg-gray-100">
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
              </select>
            </form>
          </div>
        </div>
        <BackButton href="/" text="Sair" />
      </aside>
      {children}
    </main>
  );
}
