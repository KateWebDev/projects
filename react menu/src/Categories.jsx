export default function Categories({ categories, setActiveCategory }) {
  return (
    <ul className="btn-container">
      {categories.map((category, index) => (
        <li key={index}>
          <button className="btn" type="button" onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
