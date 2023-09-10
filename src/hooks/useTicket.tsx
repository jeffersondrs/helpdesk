import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { TicketSchema } from "../utils/ticket-schema";
import { useState } from "react";

type Ticket = z.infer<typeof TicketSchema>;

export const useTicket = () => {
  const apiUrl = process.env.NEXT_PUBLIC_URL_API_BASE;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Ticket>();

  const onSubmit = async (data: Ticket) => {
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/ticket`, {
        ...data,
        createdAt: Date.now().toString(),
      });

      if (response.status === 201) {
        alert("Ticket criado com sucesso!");
        reset();
      }

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      alert("Erro ao criar ticket!");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    setLoading,
  };
};
