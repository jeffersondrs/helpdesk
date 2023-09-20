"use client";

import React from "react";
import { useTicket } from "@/hooks/useTicket";
import Loading from "@/components/Loading";
import BackButton from "@/components/BackButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Next() {
  const { register, handleSubmit, onSubmit, errors, loading } = useTicket();

  return (
    <main className="flex min-h-screen flex-row items-center justify-start">
      <ToastContainer bodyClassName={"text-sm font-bold text-gray-900 z-50"} />
      <section className="flex flex-col items-center justify-center w-full h-screen bg-white">
        <div className="flex-1 flex flex-col justify-center items-center">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h1 className="text-2xl text-gray-900 font-bold mb-2 py-5 cursor-pointer">
                Abrir novo chamado
              </h1>
              <form
                className="flex flex-col items-center justify-center flex-1 border flex-wrap gap-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-row items-center justify-center flex-wrap">
                  <div className="p-5 gap-2 flex flex-col h-96 ml-5 sm:ml-0 md:ml-0">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row justify-between items-center font-light">
                        <label className="text-xs font-bold text-gray-900">
                          Nome
                        </label>
                        <span>
                          {errors.createdBy && (
                            <p className="text-red-500 text-xs">
                              {errors.createdBy.message}
                            </p>
                          )}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Nome"
                        className={`border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm
                        ${
                          errors.createdBy
                            ? "focus:ring-red-500 border-red-500"
                            : "focus:ring-gray-500"
                        }
                    `}
                        {...register("createdBy", { required: true })}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row justify-between items-center font-light">
                        <label className="text-xs font-bold text-gray-900">
                          Whatsapp
                        </label>
                        <span>
                          {errors.phone && (
                            <p className="text-red-500 text-xs">
                              {errors.phone.message}
                            </p>
                          )}
                        </span>
                      </div>
                      <input
                        type="phone"
                        placeholder="Telefone"
                        className={`border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm
                        ${
                          errors.phone
                            ? "focus:ring-red-500 border-red-500"
                            : "focus:ring-gray-500"
                        }
                    `}
                        {...register("phone", { required: true })}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row justify-between items-center font-light">
                        <label className="text-xs font-bold text-gray-900">
                          Loja
                        </label>
                        <span>
                          {errors.store && (
                            <p className="text-red-500 text-xs">
                              {errors.store.message}
                            </p>
                          )}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Loja"
                        className={`border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm
                        ${
                          errors.store
                            ? "focus:ring-red-500 border-red-500"
                            : "focus:ring-gray-500"
                        }
                    `}
                        {...register("store", { required: true })}
                      />
                    </div>

                    <div className="flex flex-row gap-8 pt-2 justify-center items-center">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-gray-900 ">
                          Setor
                        </label>
                        <select
                          className="border border-gray-300 rounded-md px-2 py-1 w-44 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm"
                          {...register("sector", { required: true })}
                          defaultValue={"caixa"}
                        >
                          <option value="caixa">Caixa</option>
                          <option value="frente">Frente de loja</option>
                          <option value="fiscal">Fiscal</option>
                          <option value="gerencia">Gerência</option>
                          <option value="pdv">PDV</option>
                          <option value="rh">RH</option>
                          <option value="ti">TI</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-gray-900 ">
                          Prioridade
                        </label>
                        <select
                          {...register("priority", { required: true })}
                          className="border border-gray-300 rounded-md px-2 py-1 w-44 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm"
                          defaultValue={"baixa"}
                        >
                          <option value="baixa">Baixa</option>
                          <option value="media">Média</option>
                          <option value="alta">Alta</option>
                          <option value="urgente">Urgente</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-900">
                        Categoria
                      </label>
                      <input
                        type="text"
                        placeholder="Categoria (opcional)"
                        className="border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm"
                        {...register("category")}
                      />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-2 h-96 mr-5 sm:mr-0 md:mr-0">
                    <div className="flex flex-col gap-1">
                      {" "}
                      <div className="flex flex-row justify-between items-center font-light">
                        <label className="text-xs font-bold text-gray-900">
                          Titulo
                        </label>
                        <span>
                          {errors.title && (
                            <p className="text-red-500 text-xs">
                              {errors.title.message}
                            </p>
                          )}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Titulo"
                        className={`border border-gray-300 rounded-md px-2 py-1 w-96 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent text-sm
                        ${
                          errors.title
                            ? "focus:ring-red-500 border-red-500"
                            : "focus:ring-gray-500"
                        }
                    `}
                        {...register("title", { required: true })}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row justify-between items-center font-light">
                        <label className="text-xs font-bold text-gray-900">
                          Descrição
                        </label>
                        <span>
                          {errors.description && (
                            <p className="text-red-500 text-xs">
                              {errors.description.message}
                            </p>
                          )}
                        </span>
                      </div>
                      <textarea
                        placeholder="Descrição"
                        className={`border border-gray-300 rounded-md px-2 py-1 w-96 h-48 min-h-full focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent resize-none leading-relaxed text-sm
                        ${
                          errors.description
                            ? "focus:ring-red-500 border-red-500"
                            : "focus:ring-gray-500"
                        }
                        `}
                        {...register("description", { required: true })}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gray-950 text-gray-50 rounded-md px-2 py-1 w-56 h-12 focus:outline-none focus:border-transparent"
                  onClick={handleSubmit(onSubmit)}
                >
                  Enviar
                </button>
              </form>
            </>
          )}
        </div>
        <div className="py-5">
          <BackButton href="/tickets" text="Voltar" />
        </div>
      </section>
    </main>
  );
}
