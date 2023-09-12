import { useState } from "react";
import axios from "axios";
import { CallState } from "@/types/global-types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export const useUpdateTicket = ({ id }: { id: string }) => {
  const apiUrl = process.env.NEXT_PUBLIC_URL_API_BASE;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CallState>();

  const onSubmit = async (data: CallState) => {
    try {
      const response = await axios.put(`${apiUrl}/ticket/${id}`, {
        ...data,
        resolutionStatus: "resolvido",
        updatedAt: Date.now().toString(),
      });

      if (response.status === 200) {
        router.push("/tickets");
        alert("Ticket atualizado com sucesso!");
        reset();
      }
    } catch (error) {
      alert("Erro ao atualizar ticket!");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
