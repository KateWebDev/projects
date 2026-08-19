import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: mutateEditSettings, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("Update successfully");
    },
    onError: () => toast.error("The record has not been updating"),
    onMutate: () => toast("The updated process has begun"),
  });
  return { mutateEditSettings, isEditing };
}
