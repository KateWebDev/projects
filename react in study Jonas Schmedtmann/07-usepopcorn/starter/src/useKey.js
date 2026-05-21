import { useEffect } from "react";

export default function useKey(key, action) {
  useEffect(() => {
    function closeKey(evt) {
      if (evt.key.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", closeKey);

    return () => {
      document.removeEventListener("keydown", closeKey);
    };
  }, [key, action]);
}
