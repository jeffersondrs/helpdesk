import axios from "axios";
import { CallState } from "../types/global-types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useUpdateTicket = ({ id }: { id: string }) => {
  const apiUrl = process.env.NEXT_PUBLIC_URL_API_BASE;

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
        updatedAt: Date.now().toString(),
      });

      if (response.status === 200) {
        toast.success("Ticket atualizado com sucesso!");

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
