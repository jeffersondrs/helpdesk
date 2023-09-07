import React from "react";
import { useRouter } from "next/navigation";
import { CallState } from "@/store/call-slice";

export default function MyCalls({ calls }: { calls: CallState[] }) {
  const router = useRouter();

  const handleDate = (date: number) => {
    const newDate = new Date(date);
    const ano = newDate.getFullYear();
    const mes = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const dia = newDate.getDate().toString().padStart(2, "0");

    const formato = `${dia}/${mes}/${ano}`;

    return formato;
  };

  return (
    <tbody>
      {calls.map((call) => (
        <>
          <tr>
            <td className="border px-4 py-2">
              {call?.userName?.split(" ")[0]}
            </td>
            <td className="border px-4 py-2">{call.title}</td>
            <td className="border px-4 py-2">{call.status}</td>
            <td className="border px-4 py-2">
              {handleDate(Number(call.createdAt))}
            </td>
            <td className="border px-4 py-2">
              <button
                className="border-2 border-gray-300 h-10 rounded-lg px-4"
                onClick={() => router.push(`/home/${call.id}`)}
              >
                Visualizar
              </button>
            </td>
          </tr>
        </>
      ))}
    </tbody>
  );
}
