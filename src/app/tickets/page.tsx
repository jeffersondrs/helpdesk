"use client";

import React from "react";
import { useGetTickets } from "@/hooks/useGetTickets";
import { CallState } from "@/types/global-types";
import Loading from "@/components/Loading";
import TicketCard from "@/components/TicketCard";
import { ToastContainer } from "react-toastify";
import Aside from "@/components/Aside";

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
    <Aside>
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
    </Aside>
  );
}
