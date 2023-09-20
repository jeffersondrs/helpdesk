import Link from "next/link";
import { CallState } from "../types/global-types";

export default function TicketCard({ ticket }: { ticket: CallState }) {
  return (
    <table className="w-full">
      <tbody className="w-full">
        <tr
          key={ticket._id}
          className={`w-full h-12 text-center text-gray-950 ${
            ticket.status === "aberto"
              ? "text-red-500 bg-red-50 hover:bg-red-100 hover:text-white transition duration-300 ease-in-out"
              : ticket.status === "pendente"
              ? "text-yellow-500 bg-yellow-50 hover:bg-yellow-100 hover:text-white transition duration-300 ease-in-out"
              : ticket.status === "fechado"
              ? "text-green-500 bg-green-50 hover:bg-green-100 hover:text-white transition duration-300 ease-in-out"
              : ""
          }`}
        >
          <td className="w-24 text-center text-gray-950 border-b">
            {new Date(Number(ticket.createdAt)).toLocaleDateString("pt-BR")}
          </td>
          <td className="w-40 text-center text-gray-950 border-b border-l" >
            {ticket.title}
          </td>
          <td className="w-28 h-full text-center text-gray-950 border-b capitalize border-l">
            {ticket.status}
          </td>
          <td className="w-20 h-full text-center text-gray-950 border-b border-l">
            <Link href={`/tickets/${ticket._id}`}>
              <button
                className={`
                px-3 py-2 h-full border-b rounded-xl text-gray-950 text-xs text-center uppercase
                ${
                  ticket.status === "aberto"
                    ? "text-red-500 bg-red-50 hover:bg-red-100 hover:text-red-900 transition duration-300 ease-in-out"
                    : ticket.status === "pendente"
                    ? "text-yellow-500 bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-900 transition duration-300 ease-in-out"
                    : ticket.status === "fechado"
                    ? "text-green-500 bg-green-50 hover:bg-green-100 hover:text-green-900 transition duration-300 ease-in-out"
                    : ""
                }
                hover:text-white transition duration-300 ease-in-out shadow-lg`}
              >
                Visualizar
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
