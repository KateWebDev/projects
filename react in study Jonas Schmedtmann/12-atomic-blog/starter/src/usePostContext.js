import { useContext } from "react";
import { PostContext } from "./PostContext";

export function usePostContext() {
  return useContext(PostContext);
}
