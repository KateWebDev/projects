import { useContext } from "react";
import { FakeAuthContext } from "../contexts/FakeAuthContext";

export default function useFakeAuthContext() {
  const context = useContext(FakeAuthContext);

  if (context === undefined) throw new Error("Error in FakeAuthContext");
  return context;
}
