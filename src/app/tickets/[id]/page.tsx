"use client";

import React from "react";
import { useGetTickets } from "@/hooks/useGetTickets";
import Loading from "@/components/Loading";
import { usePathname } from "next/navigation";
import BackButton from "@/components/BackButton";
import { useUpdateTicket } from "@/hooks/useUpdateTicket";
import { CallState } from "@/types/global-types";
import { ToastContainer } from "react-toastify";
import Aside from "@/components/Aside";

export default function Ticket() {
  const { data, isLoading } = useGetTickets();
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const ticket = data?.find((ticket: CallState) => ticket?._id === id);
  const { register, handleSubmit, onSubmit, errors } = useUpdateTicket({ id });

  return (
    <Aside>
      <section className="flex-1 justify-center items-center flex flex-col gap-3">
        {isLoading && <Loading />}
        <ToastContainer />
        <div className="flex flex-row justify-center items-center">
          <div
            key={ticket?.title}
            className={`border p-3 transition duration-300 ease-in-out
        ${ticket?.status === "aberto" && "border-red-500 bg-red-50"}
        ${ticket?.status === "pendente" && "border-yellow-500 bg-yellow-50"}
        ${ticket?.status === "fechado" && "border-green-500 bg-green-50"}
        flex flex-col justify-between items-start gap-2 h-full
        `}
          >
            <p>
              <span className="font-bold capitalize">
                Quem criou o chamado:{" "}
              </span>
              {ticket?.createdBy}
            </p>
            <p>
              <span className="font-bold">Whatsapp: </span>
              {ticket?.phone}
            </p>
            <div className="flex flex-row gap-1">
              <span className="font-bold">Setor onde ocorreu: </span>
              <p className="capitalize">{ticket?.sector}</p>
            </div>
            <p>
              <span className="font-bold">Título: </span>
              {ticket?.title}
            </p>
            <div className="flex flex-col">
              <span className="font-bold">Descrição: </span>
              <p className="break-words overflow-auto whitespace-wrap w-96 border max-h-40 p-2">
                {ticket?.description}
              </p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="font-bold">Status: </span>
              <p className="capitalize">{ticket?.status}</p>
            </div>
            <p>
              <span className="font-bold">Criado em: </span>
              {new Date(Number(ticket?.createdAt)).toLocaleDateString("pt-BR")}
            </p>
            <p>
              <span className="font-bold">Atualizado em: </span>
              {new Date(Number(ticket?.updatedAt)).toLocaleDateString("pt-BR")}
            </p>
            {ticket?.resolutionBy && (
              <p>
                <span className="font-bold">
                  {ticket?.resolutionBy === "em andamento"
                    ? "Em atendimento por: "
                    : "Resolvido por: "}
                </span>
                {ticket?.resolutionBy}
              </p>
            )}
          </div>
          <form
            className="flex flex-col items-center justify-center w-64 p-5 border rounded-md gap-2 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {ticket?.status === "aberto" && (
              <div>
                <input
                  type="text"
                  placeholder="Nome do atendente"
                  className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                  {...register("resolutionBy", { required: true })}
                />
                {errors.resolutionBy && (
                  <p className="text-red-500">Campo obrigatório</p>
                )}
                <select
                  className="border px-3 py-1 rounded-md flex flex-row-reverse items-center justify-center gap-2 mb-5 text-gray-950 w-full"
                  {...register("status", { required: true })}
                >
                  <option className="bg-green" value="pendente">
                    Iniciar
                  </option>
                </select>
                <select
                  className="border px-3 py-1 rounded-md flex flex-row-reverse items-center justify-center gap-2 mb-5 text-gray-950 w-full"
                  {...register("resolutionStatus", { required: true })}
                >
                  <option className="bg-green" value="em andamento">
                    Em atendimento
                  </option>
                </select>
              </div>
            )}
            {ticket?.status === "pendente" && (
              <div>
                <select
                  className="border px-3 py-1 rounded-md flex flex-row-reverse items-center justify-center mb-2 text-gray-950"
                  {...register("status", { required: true })}
                >
                  <option className="bg-green" value="fechado">
                    Finalizar atendimento
                  </option>
                </select>
                <select
                  className="border px-2 py-1 rounded-md flex flex-row-reverse items-center justify-center mb-2 text-gray-950 w-full"
                  {...register("resolutionStatus", { required: true })}
                >
                  <option className="bg-green" value="resolvido">
                    Resolvido
                  </option>
                  <option className="bg-green" value="não resolvido">
                    Não resolvido
                  </option>
                </select>
              </div>
            )}
            {ticket?.status === "pendente" || ticket?.status === "aberto" ? (
              <button
                type="submit"
                className="bg-gray-950 text-gray-50 rounded-md px-2 py-1 w-32 focus:outline-none focus:border-transparent"
              >
                Enviar
              </button>
            ) : (
              <p className="text-gray-900">Chamado finalizado</p>
            )}
          </form>
        </div>
        <BackButton href="/tickets" text="Voltar" />
      </section>
    </Aside>
  );
}
