import React from "react";
import { useRouter } from "next/navigation";
import { CallState, startCallHandlingCall } from "@/store/call-slice";
import { assignCall } from "@/store/user-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

export default function MyCalls({ calls }: { calls: CallState[] }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { name, role, id } = useSelector((state: RootState) => state.user);

  const handleDate = (date: number) => {
    const newDate = new Date(date);
    const ano = newDate.getFullYear();
    const mes = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const dia = newDate.getDate().toString().padStart(2, "0");

    const formato = `${dia}/${mes}/${ano}`;

    return formato;
  };

  const iniciarAtendimento = (callId: string) => {
    if (role !== "admin" || !name) {
      return;
    }
    if (role === "admin" && name) {
      dispatch(assignCall({ callId }));
      dispatch(
        startCallHandlingCall({
          id: callId,
          assignee: id?.toString(),
          assignmentDate: Date.now().toString(),
          status: "pendente",
          resolutionStatus: "em andamento",
          updatedAt: Date.now().toString(),
        })
      );
    }

    router.push(`/home/${callId}`);
  };

  return (
    <tbody>
      {calls.length > 0 ? (
        calls.map((call) => (
          <tr
            className={`${
              call.status === "aberto"
                ? "bg-blue-100"
                : call.status === "pendente"
                ? "bg-orange-200"
                : "bg-green-200"
            } hover:bg-gray-100 cursor-pointer`}
            onClick={() => router.push(`/home/${call.id}`)}
            key={call.id}
          >
            <td className="border px-4 py-2 capitalize">{call.title}</td>
            <td className="border px-4 py-2 capitalize">{call.status}</td>
            <td className="border px-4 py-2 capitalize">{call.priority}</td>
            <td className="border px-4 py-2 capitalize">
              {call.userName?.split(" ")[0]}
            </td>
            <td className="border px-4 py-2">
              {handleDate(Number(call.createdAt))}
            </td>
            <td className="border px-4 py-2">
              {handleDate(Number(call.updatedAt))}
            </td>
            {role === "admin" && (
              <td className="border px-4 py-2">
                {call.assignee
                  ? `${call.assignee} (${handleDate(
                      Number(call.assignmentDate)
                    )})`
                  : "Não atribuído"}
              </td>
            )}

            {role === "admin" && (
              <td className="border px-4 py-2">
                {call.assignee ? (
                  `${call.assignee} (${handleDate(
                    Number(call.assignmentDate)
                  )})`
                ) : (
                  <button
                    className="border-2 border-gray-300 h-10 rounded-lg px-2"
                    onClick={() => iniciarAtendimento(call.id)}
                  >
                    Iniciar
                  </button>
                )}
              </td>
            )}
          </tr>
        ))
      ) : (
        <tr className="bg-gray-100 ">
          <td colSpan={8} className="text-center border px-4 py-2">
            Não há chamados abertos!
          </td>
        </tr>
      )}
    </tbody>
  );
}
