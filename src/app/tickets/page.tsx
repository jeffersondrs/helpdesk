"use client";

import React from "react";
import { useGetTickets } from "@/hooks/useGetTickets";
import { CallState } from "@/types/global-types";
import BackButton from "@/components/BackButton";
import Loading from "@/components/Loading";
import Link from "next/link";

export default function GetTickets() {
  const { data, isLoading } = useGetTickets();

  const sortedData = data?.sort((a, b) => {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    return 0;
  });

  return (
    <main className="flex flex-col justify-center items-center h-screen w-full">
      <div className="pt-5">
        <BackButton href="/" />
      </div>
      {isLoading && <Loading />}
      <section className="flex flex-row flex-wrap justify-center overflow-y-scroll gap-2 items-center min-w-full flex-1 py-3">
        {sortedData?.map((ticket: CallState) => (
          <Link href={`/tickets/${ticket._id}`} key={ticket._id}>
            <div
              key={ticket._id}
              className={`border p-3 transition duration-300 ease-in-out w-64 h-40 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between items-start
              ${
                ticket.status === "aberto" &&
                "border-red-500 bg-red-50 hover:bg-red-200"
              }
              ${
                ticket.status === "pendente" &&
                "border-yellow-500 bg-yellow-50 hover:bg-yellow-200"
              }
              ${
                ticket.status === "fechado" &&
                "border-green-500 bg-green-50 hover:bg-green-200"
              }
              `}
            >
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap w-56">
                <span className="font-bold ">Título: </span>
                {ticket.title}
              </p>
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                <span className="font-bold">Setor: </span>
                {ticket.sector}
              </p>

              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                <span className="font-bold">Status: </span>
                {ticket.status}
              </p>
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                <span className="font-bold">Criado: </span>
                {new Date(Number(ticket.createdAt)).toLocaleDateString("pt-BR")}
              </p>

              {ticket.resolutionBy && (
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  <span className="font-bold">Atendido por: </span>
                  {ticket.resolutionBy.split(" ")[0]}
                </p>
              )}
              {ticket.resolutionStatus && (
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  <span className="font-bold">Status: </span>
                  {ticket.resolutionStatus}
                </p>
              )}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
