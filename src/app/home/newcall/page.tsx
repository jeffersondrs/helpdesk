"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCalls } from "@/store/call-slice";
import { RootState } from "@/store/store";

interface Call {
  title: string;
  status: string;
  description: string;
  userName: string;
}

export default function CallCenter() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  const [call, setCall] = useState<Call>({
    title: "",
    status: "",
    description: "",
    userName: name,
  });

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
        <input
          className="border-2 border-gray-300 w-96 h-10 sm:w-64 rounded-lg px-4"
          type="text"
          placeholder="Título"
          onChange={(event) => setCall({ ...call, title: event.target.value })}
        />
        <input
          className="border-2 border-gray-300 w-96 h-10 sm:w-64 rounded-lg px-4"
          type="text"
          placeholder="Status"
          onChange={(event) => setCall({ ...call, status: event.target.value })}
        />
        <textarea
          className="border-2 border-gray-300 w-96 h-40 sm:w-64 rounded-sm text-left
            p-2 min-h-32 max-h-32 resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          placeholder="Descrição"
          onChange={(event) =>
            setCall({ ...call, description: event.target.value })
          }
        />
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
