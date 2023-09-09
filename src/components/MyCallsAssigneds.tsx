"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { CallState } from "@/store/call-slice";
import { setResolutionStatus } from "@/store/call-slice";

export default function MyCallsAssigneds() {
  const { calls } = useSelector((state: RootState) => state.call);
  const dispatch = useDispatch();
  const { role, assignedCalls, id, name } = useSelector(
    (state: RootState) => state.user
  );
  const assignedCallsIds = assignedCalls.map((call) => call);

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

  const handleResolveCall = (callId: string) => {
    if (role !== "admin" || !name) {
      return;
    }
    if (role === "admin" && name) {
      dispatch(
        setResolutionStatus({
          id: callId,
          status: "fechado",
          resolutionStatus: "resolvido",
          updatedAt: Date.now().toString(),
        })
      );
    }
  };

  return (
    <tbody>
      {filteredData.length > 0 ? (
        filteredData.map((call) => (
          <tr
            className={`${
              call.status === "aberto"
                ? "bg-blue-100"
                : call.status === "pendente"
                ? "bg-orange-200"
                : "bg-green-200"
            } hover:bg-gray-300 cursor-pointer tansform
            transition duration-300 ease-in-out`}
            key={call.id}
          >
            <td className="border px-4 py-2 capitalize text-sm">{call.title}</td>
            <td className="border px-4 py-2 capitalize text-sm">{call.status}</td>
            <td className="border px-4 py-2 capitalize text-sm">{call.priority}</td>

            <td className="border px-4 py-2">
              {handleDate(Number(call.createdAt))}
            </td>
            <td className="border px-4 py-2">
              {handleDate(Number(call.updatedAt))}
            </td>
            <td className="border px-4 py-2">{call.userName}</td>
            <td className="border px-4 py-2 capitalize text-sm">
              {call.assignee ? name : "Não atribuído"}
            </td>
            <td className="border px-4 py-2">
              {call.resolutionStatus ? call.resolutionStatus : "Não resolvido"}
            </td>
            <td className="border px-4 py-2">
              <button
                className="border px-4 py-2"
                onClick={() => handleResolveCall(call.id)}
              >
                Resolvido
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={9} className="text-center border px-4 py-2">
            Não há chamados atribuídos a você
          </td>
        </tr>
      )}
    </tbody>
  );
}
