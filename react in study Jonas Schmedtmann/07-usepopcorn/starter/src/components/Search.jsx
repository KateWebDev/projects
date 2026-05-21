import { useRef } from "react";
import useKey from "../useKey";

export default function Search({ searchFilm, setSearchFilm }) {
  const entryField = useRef(null);

  useKey("enter", () => {
    if (document.activeElement === entryField.current) return;

    entryField.current.focus();
    setSearchFilm("");
  });
  return (
    <input
      className="search"
      name="search"
      type="text"
      placeholder="Search movies..."
      value={searchFilm}
      onChange={(e) => setSearchFilm(e.target.value)}
      ref={entryField}
    />
  );
}
