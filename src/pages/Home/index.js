import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.MainContainer}>
      <Header />
      <section className={styles.AboutMeContainer}>
        <h1 className={styles.Title}>A little about me</h1>
        <p className={styles.DescriptionContainer}>
          I have always been curious, and that led me to dive deeper into
          technology to understand how things work. Programming turned out to be
          a world of its own, where my ideas can be put on the table, or rather,
          into lines of code.
        </p>
        <div className={styles.AttributesList}>
          <InfoCard title="OI" description="Meu nome caique Schinaider" />
        </div>
      </section>
    </main>
  );
}

export default Home;
