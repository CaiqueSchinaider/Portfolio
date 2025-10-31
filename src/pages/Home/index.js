import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import InfoCard from "../../components/InfoCard";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { useState } from "react";
import PopUpCards from "../../components/PopUpCards";
import { code } from "framer-motion/client";

function Home() {
  const [popUpShow, setPopUpShow] = useState(null);

  function HandlePopUpCards(data) {
    if (!data) {
      setPopUpShow(null);
      document.body.classList.remove("no-scroll");
      return;
    }
    const { linkGit, linkDeploy, projectName, haveDeploy, haveCode } = data;
    if (!popUpShow) {
      setPopUpShow({
        linkGit,
        linkDeploy,
        projectName,
        haveDeploy,
        haveCode,
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
          haveCode={popUpShow.haveCode}
        />
      ) : null}
      <Banner />
      <section className={styles.AboutMeContainer}>
        <h1 className={styles.Title}>A little about me</h1>
        <p className={styles.DescriptionContainer}>
          I have strong analytical skills to understand client needs and goals.
          Each project is unique and exclusive, and my commitment is to deliver
          effective results.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.AttributesList}>
            <InfoCard
              title="Why hire my services?"
              description="I work with modern technologies that drive leading brands, including React.js, Next.js, Tailwind, and others. Each project is unique and exclusive, and my commitment is to deliver effective results through API integration and cloud solutions."
              source={"/question.webp"}
              tabIndexValue="1"
            />
            <InfoCard
              title="Experience "
              description="Although I have been creating projects since I was 15, I began my professional career at 16, joining the Support and Systems Analysis team at Offerwise, and later moving to the programming team. In parallel, I work as a freelancer on customized projects under my supervision."
              source={"/offerwise.webp"}
              tabIndexValue="2"
            />
            <InfoCard
              title="My Objective"
              description="My goal is to associate my name with major projects and institutions that value quality and commitment to the product, leveraging teamwork and dedication to the cause to deliver tangible results."
              source={"/goal.webp"}
              tabIndexValue="3"
            />
            <InfoCard
              title="Education"
              description="I value self-directed learning, which has been my main driver in the industry, allowing me to independently master the key languages and frameworks used by major companies, such as React.js, React Native, Next.js, TypeScript, and JavaScript, as well as create sophisticated visual solutions with Tailwind and CVA (Class Variance Authority)."
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
                  linkDeploy: "https://marketschin-j3jo.vercel.app",
                  projectName: "MarketSchin",
                  haveDeploy: true,
                  haveCode: true,
                })
              }
              style={{ textDecoration: "none", cursor: "pointer" }}
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
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <InfoCard
                title="SchinGym"
                description="SchinGym is a project aimed at helping people who practice weight training manage their workouts. It allows them to edit their workout plans, track body progress with easy-to-understand statistics, and increase weights in an intuitive way."
                source={"/schingym.webp"}
              />
            </div>
            <div
              style={{ textDecoration: "none", cursor: "pointer" }}
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
                description="Personal project created by me with the purpose of developing a framework for creating possible lineups for the Cruzeiro team, supporting live broadcasts on the Cruzeiro Sports channel, especially in pre-game shows. It was used by Diogo Medeiros in some live streams to display these lineups."
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
