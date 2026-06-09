export default function MenuItem({ id, title, category, price, img, desc }) {
  return (
    <li className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">{price}</div>
        </header>
        <div className="item-text">{desc}</div>
      </div>
    </li>
  );
}
