"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import Calls from "@/components/MyCalls";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CallState } from "@/store/call-slice";

export default function Home() {
  const router = useRouter();
  const { calls } = useSelector((state: RootState) => state.call);
  const [searchTerm, setSearchTerm] = React.useState("");
  const filterDataCalls = (call: CallState) => {
    const searchTermCallLowerCase = searchTerm.toLowerCase();

    const titleLowerCase = call.title.toLowerCase();
    const statusLowerCase = call.status.toLowerCase();
    const descriptionLowerCase = call.description.toLowerCase();
    const userNameLowerCase = call.userName?.toLowerCase();

    if (!searchTermCallLowerCase) return true;

    return (
      titleLowerCase.includes(searchTermCallLowerCase) ||
      statusLowerCase.includes(searchTermCallLowerCase) ||
      descriptionLowerCase.includes(searchTermCallLowerCase) ||
      userNameLowerCase?.includes(searchTermCallLowerCase)
    );
  };

  const filteredData = calls.filter(filterDataCalls);
  const noMatchCallResults = filteredData.length === 0;

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
                onChange={(event) => setSearchTerm(event.target.value)}
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
              <Calls calls={filteredData} />
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}