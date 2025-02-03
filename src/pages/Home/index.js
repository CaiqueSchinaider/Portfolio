import Footer from "../../components/Footer";
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
          <InfoCard
            title="Where I Am Now?"
            description="I'm in the process of acquiring experiences that drive my growth exponentially, having had the opportunity at 16 to work at Offerwise as a Help Desk, a company that allowed me to see firsthand how this entire world operates."
            source={"/question.png"}
          />
          <InfoCard
            title="How I Got Started at Offerwise"
            description="I quickly adapted to the work in a methodical way, diving into hardware and software. I assisted employees with background issues, ensuring a smooth workflow. This drove me to create projects that simplify processes or add value to people."
            source={"/offerwise.png"}
          />
          <InfoCard
            title="My Objective"
            description="My objective is to gain more experience in this field, further solidifying all the knowledge I've gained, while evolving and adding value wherever I go. Seeing my effort return as progress is my fuel."
            source={"/goal.png"}
          />
          <InfoCard
            title="Education"
            description="I took free online courses and received guidance from people close to me who were already working in the field. This motivated me to dedicate myself further to my studies. My goal is to professionalize myself and enroll in an educational institution to expand my knowledge."
            source={"/education.png"}
          />
        </div>
        <section className={styles.ProjectsList}>
          <h1 className={styles.ProjectsTitle}> Projects</h1>
          <nav className={styles.ProjectsNavigation}>
            <a
              href="https://github.com/CaiqueSchinaider/Marketschin"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <InfoCard
                title="MarketSchin"
                description="In my free time, I created several projects, such as MarketSchin, an e-commerce platform currently in development. It is aimed at businesses that only want to handle payment processing and order delivery."
                source={"/marketschin.png"}
              />
            </a>
            <a
              href="https://github.com/CaiqueSchinaider/Lifescore"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <InfoCard
                title="LifeScore"
                description="An idea currently in development is LifeScore, a project for an application aimed at motivating people to maintain a solid routine. It incorporates RPG elements, such as routine classes, trophies, virtual cosmetics, etc., to reward those who successfully complete their tasks."
                source={"/lifescore.png"}
              />
            </a>
          </nav>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
