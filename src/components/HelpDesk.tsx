"use client";
import React, { useState } from "react";

export default function HelpDesk() {
  const [openSuport, setOpenSuport] = useState(false);
  const [countClick, setCountClick] = useState(0);

  function handleOpenSuport() {
    setCountClick(countClick + 1);
    if (countClick >= 3) {
      setOpenSuport(true);
    }
  }

  console.log(countClick);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleOpenSuport}
        className="flex flex-col items-center justify-center w-56 h-32 rounded-lg transition duration-300 ease-in-out transform"
      >
        <h1 className="text-4xl text-white font-bold">Help Desk</h1>
      </button>
      <div className="h-40 ">
        {openSuport && (
          <form className="flex flex-col items-center justify-center gap-2">
            <input
              type="text"
              className="w-56 h-8 rounded-lg p-3 focus:outline-none focus:border-transparent"
              placeholder="Usuário"
            />
            <input
              type="text"
              className="w-56 h-8 rounded-lg p-3 focus:outline-none focus:border-transparent"
              placeholder="Senha"
            />
            <button
              type="submit"
              className="w-56 h-8 border-2 border-gray-600 rounded-lg text-gray-50"
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
