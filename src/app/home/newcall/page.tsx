"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCalls } from "@/store/call-slice";
import { RootState } from "@/store/store";

interface Call {
  title: string;
  status: "aberto" | "pendente" | "fechado";
  description: string;
  userName: string;
  priority?: "baixa" | "média" | "alta" | "urgente";
}

export default function CallCenter() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  const [call, setCall] = useState<Call>({
    title: "",
    status: "aberto",
    description: "",
    userName: name,
    priority: "baixa",
  });

  const handleBgColorSelect = (priority: string | undefined) => {
    switch (priority) {
      case "baixa":
        return "bg-blue-200";
      case "média":
        return "bg-blue-300";
      case "alta":
        return "bg-blue-500";
      case "urgente":
        return "bg-red-600";
      default:
        return "bg-blue-200";
    }
  };

  const handleNewCall = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCalls(call));

    router.push("/home");
  };

  return (
    <main className="flex min-h-full flex-col items-center justify-center sm:flex-col py-10">
      <h1 className="text-3xl sm:text-xl text-black font-bold py-3 uppercase">
        Novo Chamado
      </h1>
      <form
        className="flex flex-col items-center justify-center bg-white sm:w-full sm:h-full gap-1 border border-gray-100 p-5"
        onSubmit={handleNewCall}
      >
        <label className="text-left flex flex-col items-start justify-start w-full">
          Título
          <input
            className="border-2 border-gray-300 w-96 h-10 sm:w-64 rounded-sm px-4"
            type="text"
            placeholder="Título"
            onChange={(event) =>
              setCall({ ...call, title: event.target.value })
            }
          />
        </label>
        <label className="text-left flex flex-col items-start justify-start w-full">
          Status
          <select
            className="border-2 border-gray-300 w-96 h-10 sm:w-64 rounded-sm px-4"
            onChange={(event) =>
              setCall({
                ...call,
                status: event.target.value ? "aberto" : "pendente",
              })
            }
          >
            <option value="open">Aberto</option>
          </select>
        </label>
        <label className="text-left flex flex-col items-start justify-start w-full">
          Prioridade
          <select
            className={`border-2 border-gray-300 w-96 h-10 sm:w-64 px-4 rounded-sm ${handleBgColorSelect(
              call.priority
            )}`}
            onChange={(event) => {
              setCall({
                ...call,
                priority: event.target.value as
                  | "baixa"
                  | "média"
                  | "alta"
                  | "urgente",
              });
            }}
          >
            <option className="bg-blue-200" value="baixa">
              Baixa
            </option>
            <option className="bg-blue-300" value="média">
              Média
            </option>
            <option className="bg-blue-500" value="alta">
              Alta
            </option>
            <option className="bg-red-600" value="urgente">
              Urgente
            </option>
          </select>
        </label>
        <label className="text-left flex flex-col items-start justify-start w-full">
          Descrição
          <textarea
            className="border-2 border-gray-300 w-96 h-40 sm:w-64 rounded-sm text-left
            p-2 min-h-32 max-h-32 resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            placeholder="Descrição"
            onChange={(event) =>
              setCall({ ...call, description: event.target.value })
            }
          />
        </label>
        <button
          className="border-2 border-gray-300 w-40 h-10 sm:w-64 rounded-lg px-4"
          type="submit"
        >
          Criar
        </button>
      </form>
    </main>
  );
}
