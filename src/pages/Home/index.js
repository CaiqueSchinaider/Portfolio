import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import InfoCard from "../../components/InfoCard";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { useState } from "react";
import PopUpCards from "../../components/PopUpCards";

function Home() {
  const [popUpShow, setPopUpShow] = useState(null);

  function HandlePopUpCards(data) {
    if (!data) {
      setPopUpShow(null);
      document.body.classList.remove("no-scroll");
      return;
    }
    const { linkGit, linkDeploy, projectName, haveDeploy } = data;
    if (!popUpShow) {
      setPopUpShow({
        linkGit,
        linkDeploy,
        projectName,
        haveDeploy,
      });

      document.body.classList.add("no-scroll");
    }
  }
  return (
    <main className={styles.MainContainer}>
      {popUpShow &&
      popUpShow.linkDeploy &&
      popUpShow.linkGit &&
      popUpShow.projectName ? (
        <PopUpCards
          hide={() => HandlePopUpCards()}
          linkGit={popUpShow.linkGit}
          linkDeploy={popUpShow.linkDeploy}
          projectName={popUpShow.projectName}
          haveDeploy={popUpShow.haveDeploy}
        />
      ) : null}
      <Banner />
      <section className={styles.AboutMeContainer}>
        <h1 className={styles.Title}>A little about me</h1>
        <p className={styles.DescriptionContainer}>
          I have always been curious, and that led me to dive deeper into
          technology to understand how things work. Programming turned out to be
          a world of its own, where my ideas can be put on the table, or rather,
          into lines of code.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.AttributesList}>
            <InfoCard
              title="Where I Am Now?"
              description="I'm in the process of acquiring experiences that drive my growth exponentially, having had the opportunity at 16 to work at Offerwise as a Help Desk, a company that allowed me to see firsthand how this entire world operates."
              source={"/question.webp"}
              tabIndexValue="1"
            />
            <InfoCard
              title="How I Got Started at Offerwise"
              description="I quickly adapted to the work in a methodical way, diving into hardware and software. I assisted employees with background issues, ensuring a smooth workflow. This drove me to create projects that simplify processes or add value to people."
              source={"/offerwise.webp"}
              tabIndexValue="2"
            />
            <InfoCard
              title="My Objective"
              description="My objective is to gain more experience in this field, further solidifying all the knowledge I've gained, while evolving and adding value wherever I go. Seeing my effort return as progress is my fuel."
              source={"/goal.webp"}
              tabIndexValue="3"
            />
            <InfoCard
              title="Education"
              description="I have been self-studying, relying on free courses and available online documentation, gradually expanding my knowledge and ability to create solutions. I have experience with JavaScript, CSS, HTML, React, and Firebase (FireStorage and Authentication). I am currently starting to learn TypeScript."
              source={"/education.webp"}
              tabIndexValue="4"
            />
          </div>
        </motion.div>
        <section className={styles.ProjectsList}>
          <h1 className={styles.ProjectsTitle}> Projects</h1>
          <nav className={styles.ProjectsNavigation}>
            <div
              onClick={() =>
                HandlePopUpCards({
                  linkGit: "https://github.com/CaiqueSchinaider/Marketschin",
                  linkDeploy: "#",
                  projectName: "MarketSchin",
                  haveDeploy: false,
                })
              }
              style={{ textDecoration: "none" }}
            >
              <InfoCard
                title="MarketSchin"
                description="In my free time, I created several study projects, such as MarketSchin, an e-commerce platform currently in development. It is aimed at businesses that want to focus only on payment processing and order delivery."
                source={"/marketschin.webp"}
              />
            </div>
            <div
              onClick={() =>
                HandlePopUpCards({
                  linkGit:
                    "https://github.com/CaiqueSchinaider/SchinGymExample",
                  linkDeploy: "https://schingym.vercel.app",
                  projectName: "SchinGym",
                  haveDeploy: true,
                  haveCode: true,
                })
              }
              style={{ textDecoration: "none" }}
            >
              <InfoCard
                title="SchinGym"
                description="SchinGym is a project aimed at helping people who practice weight training manage their workouts. It allows them to edit their workout plans, track body progress with easy-to-understand statistics, and increase weights in an intuitive way."
                source={"/schingym.webp"}
              />
            </div>
            <div
              style={{ textDecoration: "none" }}
              onClick={() =>
                HandlePopUpCards({
                  linkGit: "https://github.com/CaiqueSchinaider/CruzeiroSports",
                  linkDeploy: "https://cruzeiro-sports.vercel.app",
                  projectName: "Cruzeiro Sports + Lineup",
                  haveDeploy: true,
                  haveCode: false,
                })
              }
            >
              <InfoCard
                title="Lineup To Cruzeiro Sports"
                description="Personal project created by me, a fan of YouTuber Diogo Medeiros (Cruzeiro Sports).
Allows creating possible lineups for the Cruzeiro team to assist live broadcasts, especially in pre-game shows.
Used by Diogo in some live streams to display these lineups."
                source={"/cruzeirosports.webp"}
              />
            </div>
          </nav>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
