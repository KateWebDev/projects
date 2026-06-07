import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export default function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Error in CitiesContext");
  return context;
}
