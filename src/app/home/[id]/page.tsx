"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { CallState, deleteCall, updateCall } from "@/store/call-slice";

export default function CallPage() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const { calls } = useSelector((state: RootState) => state.call);
  const dispatch = useDispatch();
  const call = calls.find((call) => call.id === id);

  const handleDeleteCall = async (id: string) => {
    dispatch(deleteCall({ id }));
  };

  const handleUpdateCall = async (call: CallState) => {
    dispatch(
      updateCall({
        id: call.id,
        title: call.title,
        status: call.status,
        description: call.description,
        priority: call.priority,
        userName: call.userName!,
      })
    );
  };

  return (
    <main className="flex flex-row items-center justify-center py-10">
      <form className="flex flex-col items-center justify-center bg-white gap-1 border border-gray-100 p-5">
        <label className="text-left flex flex-col items-start justify-start w-full">
          Título
          <input
            className="border-2 border-gray-300 w-96 h-10 sm:w-64 rounded-sm px-4"
            type="text"
            placeholder="Título"
            value={call?.title}
          />
        </label>
        <label className="text-left flex flex-col items-start justify-start w-full">
          Status
          <select className="border-2 border-gray-300 w-96 h-10 sm:w-64 rounded-sm px-4">
            {call?.status === "aberto" ? (
              <option className="bg-blue-200" value="aberto">
                Aberto
              </option>
            ) : (
              <option className="bg-green-200" value="fechado">
                Fechado
              </option>
            )}
          </select>
        </label>
        <label className="text-left flex flex-col items-start justify-start w-full">
          Prioridade
          <select
            className={`border-2 border-gray-300 w-96 h-10 sm:w-64 px-4
            rounded-sm `}
          >
            {call?.priority === "baixa" ? (
              <option className="bg-blue-200" value="baixa">
                Baixa
              </option>
            ) : call?.priority === "alta" ? (
              <option className="bg-blue-500" value="alta">
                Alta
              </option>
            ) : call?.priority === "média" ? (
              <option className="bg-blue-300" value="média">
                Média
              </option>
            ) : (
              <option className="bg-red-600" value="urgente">
                Urgente
              </option>
            )}
          </select>
        </label>
        <label className="text-left flex flex-col items-start justify-start w-full">
          Descrição
          <textarea
            className="border-2 border-gray-300 w-96 h-40 sm:w-64 rounded-sm text-left
            p-2 min-h-32 max-h-32 resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            placeholder="Descrição"
            value={call?.description}
          />
        </label>
        <button
          className="border-2 border-gray-300 w-40 h-10 sm:w-64 rounded-lg px-4"
          type="submit"
        >
          Salvar
        </button>
      </form>
    </main>
  );
}
