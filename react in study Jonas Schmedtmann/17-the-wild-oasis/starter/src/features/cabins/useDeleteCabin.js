import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteCabin, isLoading: isDeleted } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Deleted successfully");
    },
    onError: () => toast.error("The record has not been deleted"),
    onMutate: () => toast("The removal process has begun"),
  });

  return { mutateDeleteCabin, isDeleted };
}
