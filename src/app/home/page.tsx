"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import Calls from "@/components/MyCalls";
import { Search } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start sm:flex-col">
      <section className="flex flex-col items-center justify-center bg-gray-100 w-full h-screen sm:w-full sm:h-full">
        <div className="flex flex-col items-center justify-center bg-white w-full h-screen sm:w-full sm:h-full">
          <div className="flex flex-row items-center justify-evenly w-full h-16 px-3">
            <button
              className="flex flex-row items-center justify-center border-2 border-gray-300 h-10 rounded-lg px-4"
              onClick={() => router.push("/home/newcall")}
            >
              <p className="">Novo</p>
              <Plus className="inline-block ml-2" size={16} />
            </button>
            <div className="flex flex-row items-center justify-center">
              <input
                className="border-2 border-gray-300 w-80 h-10 rounded-lg px-4 sm:w-48"
                type="text"
                placeholder="Pesquisar"
              />
              <button className="border-2 border-gray-300 h-10 rounded-lg px-2">
                <Search className="inline-block" size={16} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white w-full h-screen sm:w-full sm:h-full">
            <h1 className="text-2xl sm:text-xl text-black font-bold py-3 uppercase">
              Meus Chamados
            </h1>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Titulo</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Data</th>
                  <th className="px-4 py-2">Ações</th>
                </tr>
              </thead>
              <Calls />
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
