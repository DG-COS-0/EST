import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Nouveau compte créer. Veuillez verifier l'adresse mail du new User."
      );
    },
  });

  return { signup, isLoading };
}
