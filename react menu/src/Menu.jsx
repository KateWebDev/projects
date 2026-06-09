import MenuItem from "./MenuItem";

export default function Menu({ menus, activeCategory }) {
  if (activeCategory === "all") {
    return (
      <ul className="section-center">
        {menus.map((menu) => (
          <MenuItem key={menu.id} {...menu} />
        ))}
      </ul>
    );
  }
  return (
    <ul className="section-center">
      {menus.map((menu) => activeCategory === menu.category && <MenuItem key={menu.id} {...menu} />)}
    </ul>
  );
}
