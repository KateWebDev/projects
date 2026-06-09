import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

  const [menus, setMenus] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="menu">
      <h1 className="title">our menu</h1>
      <Categories categories={categories} setActiveCategory={setActiveCategory} />
      <Menu menus={menus} activeCategory={activeCategory} />
    </section>
  );
};
export default App;
