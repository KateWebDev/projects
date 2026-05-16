export default function Search({ searchFilm, setSearchFilm }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={searchFilm}
      onChange={(e) => setSearchFilm(e.target.value)}
    />
  );
}
