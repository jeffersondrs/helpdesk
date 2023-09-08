"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CallState } from "@/store/call-slice";

export default function MyCallsAssigneds() {
  const { calls } = useSelector((state: RootState) => state.call);

  console.log(calls.map((call) => call.id));
  const { role, assignedCalls, id } = useSelector((state: RootState) => state.user);
  const assignedCallsIds = assignedCalls.map((call) => call);
  console.log(id);
  const filterCallForAssigned = (
    calls: CallState[],
    assignedCallIds: string[]
  ) => {
    return calls.filter((call) => assignedCallIds.includes(call.id));
  };

  const filteredData = filterCallForAssigned(calls, assignedCallsIds);

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
      {filteredData.length > 0 &&
        filteredData.map((call) => (
          <>
            <tr
              className={`${
                call.status === "aberto"
                  ? "bg-blue-100"
                  : call.status === "pendente"
                  ? "bg-orange-200"
                  : "bg-green-200"
              } hover:bg-gray-100 cursor-pointer`}
            >
              <td className="border px-4 py-2 capitalize">{call.title}</td>
              <td className="border px-4 py-2 capitalize">{call.status}</td>
              <td className="border px-4 py-2 capitalize">{call.priority}</td>

              <td className="border px-4 py-2">
                {handleDate(Number(call.createdAt))}
              </td>
              <td className="border px-4 py-2">
                {handleDate(Number(call.updatedAt))}
              </td>
              <td className="border px-4 py-2">{call.userName}</td>
              <td className="border px-4 py-2 capitalize">
                {call.assignee ? call.assignee : "Não atribuído"}
              </td>
            </tr>
          </>
        ))}
    </tbody>
  );
}
