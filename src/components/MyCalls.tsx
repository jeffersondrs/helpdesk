import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from "next/navigation";
import { setCalls } from "../store/call-slice";

export default function MyCalls() {
  const { calls } = useSelector((state: RootState) => state.call);
  const router = useRouter();

  return (
    <tbody>
      {calls.map((call) => (
        <>
          <tr>
            <td className="border px-4 py-2">{call.userName}</td>
            <td className="border px-4 py-2">{call.title}</td>
            <td className="border px-4 py-2">{call.status}</td>
            <td className="border px-4 py-2">{call.createdAt}</td>
            <td className="border px-4 py-2">
              <button
                className="border-2 border-gray-300 h-10 rounded-lg px-4"
                onClick={() => router.push(`/home/call-page/${call.id}`)}
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
