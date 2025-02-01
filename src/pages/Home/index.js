import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.MainContainer}>
      <div className={styles.ContainerEyes}>
        <p> Esses olhos...</p>
        <img src="/vitoriaeyes.png" className={styles.ImageEyes} />
      </div>
      <h1>Tipos de meninas do Schinaider</h1>
      <Card />
    </main>
  );
}

export default Home;
