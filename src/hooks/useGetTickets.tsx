import axios from "axios";
import { useQuery } from "react-query";
import { CallState } from "@/types/global-types";

export const useGetTickets = () => {
  const apiUrl = process.env.NEXT_PUBLIC_URL_API_BASE;

  const { data, isLoading, isError, error } = useQuery<CallState[]>(
    "tickets",
    async () => {
      const { data } = await axios.get(`${apiUrl}/tickets`);
      return data;
    },
    {
      refetchOnWindowFocus: true,
    }
  );

  return { data, isLoading, isError, error };
};
