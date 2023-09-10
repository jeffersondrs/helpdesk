"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Undo2 } from "lucide-react";
import { useTicket } from "@/hooks/useTicket";
import Loading from "@/components/Loading";

export default function Next() {
  const { register, handleSubmit, onSubmit, errors, loading } = useTicket();

  return (
    <main className="flex min-h-screen flex-row items-center justify-start">
      <section className="flex flex-col items-center justify-center w-full h-screen bg-white">
        <h1 className="text-2xl text-gray-900 font-bold mb-4 pt-10">
          Abrir novo chamado
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center">
          {loading ? (
            <Loading />
          ) : (
            <form
              className="flex flex-row items-center justify-center w-full h-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="p-5 gap-2 flex flex-col">
                <label className="text-sm text-gray-900 flex flex-col gap-1">
                  Nome
                  <input
                    type="text"
                    placeholder="Nome"
                    className="border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    {...register("createdBy", { required: true })}
                  />
                </label>
                {errors.createdBy && (
                  <span className="text-sm text-red-500">
                    Este campo é obrigatório
                  </span>
                )}
                <label className="text-sm text-gray-900 flex flex-col gap-1">
                  Whatsapp
                  <input
                    type="phone"
                    placeholder="Telefone"
                    className="border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    {...register("phone", { required: true })}
                  />
                </label>
                <label className="text-sm text-gray-900 flex flex-col gap-1">
                  Loja
                  <input
                    type="text"
                    placeholder="Loja"
                    className="border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    {...register("store", { required: true })}
                  />
                </label>
                <div className="flex flex-row gap-8 pt-2 justify-center items-center">
                  <label className="text-sm text-gray-900 flex flex-col gap-1">
                    Setor
                    <select
                      className="border border-gray-300 rounded-md px-2 py-1 w-44 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                      {...register("sector", { required: true })}
                    >
                      <option value="caixa">Caixa</option>
                      <option value="frente">Frente de loja</option>
                      <option value="fiscal">Fiscal</option>
                      <option value="gerencia">Gerência</option>
                      <option value="pdv">PDV</option>
                      <option value="rh">RH</option>
                      <option value="ti">TI</option>
                    </select>
                  </label>
                  <label className="text-sm text-gray-900 flex flex-col gap-1">
                    Prioridade
                    <select
                      {...register("priority", { required: true })}
                      className="border border-gray-300 rounded-md px-2 py-1 w-44 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    >
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                      <option value="urgente">Urgente</option>
                    </select>
                  </label>
                </div>
                <label className="text-sm text-gray-900 flex flex-col gap-1">
                  Categoria
                  <input
                    type="text"
                    placeholder="Categoria (opcional)"
                    className="border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    {...register("category")}
                  />
                </label>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <label className="text-sm text-gray-900 flex flex-col gap-1">
                  Titulo
                  <input
                    type="text"
                    placeholder="Titulo"
                    className="border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    {...register("title", { required: true })}
                  />
                </label>

                <label className="text-sm text-gray-900 flex flex-col gap-1">
                  Descrição
                  <textarea
                    placeholder="Descrição"
                    className="border border-gray-300 rounded-md px-2 py-1 w-96 h-56 max-h-60 min-h-full focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                    {...register("description", { required: true })}
                  />
                </label>
                <button
                  type="submit"
                  className="bg-gray-950 text-gray-50 rounded-md px-2 py-1 w-96 focus:outline-none focus:border-transparent"
                  onClick={handleSubmit(onSubmit)}
                >
                  Enviar
                </button>
              </div>
            </form>
          )}
        </div>
        <Link
          href="/"
          className="border px-3 py-1 rounded-md bg-gray-900 flex flex-row-reverse items-center justify-center gap-2 mb-5"
        >
          <p className="text-base text-gray-50">Voltar</p>
          <Undo2 size={16} className="text-gray-50" />
        </Link>
      </section>
    </main>
  );
}
