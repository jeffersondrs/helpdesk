"use client";

import React from "react";
import { useGetTickets } from "@/hooks/useGetTickets";
import { CallState } from "@/types/global-types";
import BackButton from "@/components/BackButton";
import Loading from "@/components/Loading";
import TicketCard from "@/components/TicketCard";
import { ToastContainer } from "react-toastify";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function GetTickets() {
  const { data, isLoading } = useGetTickets();

  function compareByStatus(a: CallState, b: CallState): number {
    const statusOrder = {
      aberto: 1,
      pendente: 2,
      fechado: 3,
    };

    const statusA = statusOrder[a.status];
    const statusB = statusOrder[b.status];

    if (statusA < statusB) {
      return -1;
    } else if (statusA > statusB) {
      return 1;
    } else {
      const createdAtA = new Date(a.createdAt).getTime();
      const createdAtB = new Date(b.createdAt).getTime();

      if (createdAtA < createdAtB) {
        return -1;
      } else if (createdAtA > createdAtB) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  const sortedData = data?.slice().sort(compareByStatus);

  return (
    <main className="flex flex-row justify-center items-center h-screen w-full">
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
                className="w-full p-1 rounded-md border border-gray-300 bg-gray-100"
                placeholder="Título, data, status..."
              />
            </form>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <form className="flex flex-col w-full">
              <label className="text-white">Título</label>
              <input
                type="text"
                className="w-full p-1 rounded-md border border-gray-300 bg-gray-100"
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
                className="w-full p-1 rounded-md border border-gray-300 bg-gray-100"
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
      <section className="flex flex-col w-full max-h-screen">
        <table className="w-full h-10 bg-gray-50 border-b">
          <thead className="w-full h-full mr-2">
            <tr className="w-full h-full">
              <th className="w-24 text-gray-950 font-medium">Data</th>
              <th className="w-44 text-gray-950  font-medium">Título</th>
              <th className="w-24 text-gray-950  font-medium">Status</th>
              <th className="w-28 text-gray-950  font-medium">Ações</th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-scroll overflow-scroll overflow-x-hidden h-screen">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex-1">
              <ToastContainer />
              {sortedData?.map((ticket) => (
                <TicketCard key={ticket._id} ticket={ticket} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
