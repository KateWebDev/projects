import { pizzaData } from "./data.js";

function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <section className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
        delicious.
      </p>
      <MenuList />
    </section>
  );
}

function MenuList() {
  return (
    pizzaData.length > 0 && (
      <ul className="pizzas">
        {pizzaData.map((item) => (
          <li key={item.name}>
            <Pizza {...item} />
          </li>
        ))}
      </ul>
    )
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <article className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </article>
  );
}

function Footer() {
  const hour = new Date().getHours();

  return (
    <footer className="footer">
      {hour >= 12 && hour <= 22 ? (
        <div className="order">
          <p>We're open until 22:00. Come visit us or order online</p>
          <button className="btn">Order now</button>
        </div>
      ) : (
        <p>Sorry we're closed</p>
      )}
    </footer>
  );
}

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
