import { Link } from "react-router-dom";

import PageNav from "../../components/PageNav";
import styles from "./Home.module.css";
import useFakeAuthContext from "../../hooks/useFakeAuthContext";

export default function Home() {
  const { isAuthenticated } = useFakeAuthContext();
  return (
    <>
      <main className={styles.homepage}>
        <PageNav />

        <section className={styles.intro}>
          <h1 className={styles.title}>You travel the world. WorldWise keeps track of your adventures.</h1>
          <p className={styles.text}>
            A world map that track your footsteps into every city you can think of. Never forget your wonderful
            experiences, and show your friends how you have wandered the world
          </p>
          <Link className="cta" to={isAuthenticated ? "/app" : "/login"}>
            start tracking now
          </Link>
        </section>
      </main>
    </>
  );
}
