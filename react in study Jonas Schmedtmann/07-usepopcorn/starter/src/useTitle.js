import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    if (!title) return;
    document.title = `Movies | ${title}`;

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);
}
