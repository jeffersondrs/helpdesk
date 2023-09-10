import Link from "next/link";
import React from "react";
import NewTicket from "../components/NewTicket";
import HelpDesk from "@/components/HelpDesk";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-row items-center justify-start sm:flex-col">
      <aside className="flex flex-col items-center justify-center bg-black w-96 h-screen sm:h-32 sm:w-full">
        <HelpDesk />
      </aside>
      <section className="flex flex-col items-center justify-center w-full h-full bg-white">
        <Link
          href="/ticket"
          className="flex flex-col items-center justify-center w-56 h-32 hover:bg-gray-100 border-2 border-gray-900 rounded-lg transition duration-300 ease-in-out transform"
        >
          <NewTicket />
          <p className="text-xl text-gray-900">Abrir novo chamado</p>
        </Link>
      </section>
    </main>
  );
}
