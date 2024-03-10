import { useQuery } from "@tanstack/react-query";
import { getPdatas } from "../../services/apiPdatas";

export function usePdatas() {
  const {
    isLoading,
    data: pdatas,
    error,
  } = useQuery({
    queryKey: ["pdatas"],
    queryFn: getPdatas,
  });

  return { isLoading, error, pdatas };
}
