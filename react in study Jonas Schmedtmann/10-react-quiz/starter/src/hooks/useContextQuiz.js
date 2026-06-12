import { useContext } from "react";
import { ContextQuiz } from "../contexts/ContextQuiz";

export function useContextQuiz() {
  const context = useContext(ContextQuiz);
  return context;
}
