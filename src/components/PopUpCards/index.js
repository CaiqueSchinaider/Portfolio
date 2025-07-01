import { style } from "framer-motion/client";
import styles from "./PopUpCards.module.css";

function PopUpCards({
  linkGit,
  linkDeploy,
  projectName,
  hide,
  haveDeploy,
  haveCode,
}) {
  return (
    <main className={styles.PopUpCardsBackground}>
      <section className={styles.PopUpCardsBody}>
        <h1 className={styles.PopUpCardsTitle}>
          {projectName}
          <img
            onClick={() => hide()}
            className={styles.IconBack}
            src="/exit.webp"
            style={{
              position: "absolute",
              width: "30px",
              top: "-13px",
              right: "-13px",
              filter: "contrast(10)",
            }}
            alt="back icon"
          />
        </h1>
        {/* //////////////// */}
        <section className={styles.PopUpCardsLinks}>
          {haveCode ? (
            <a
              className={styles.PopUpCardsLinkContainer}
              href={linkGit}
              target="_blank"
              rel="noopener"
            >
              <div className={styles.PopUpCardsLinkBox}>
                <p className={styles.PopUpCardsParagraph}>Code</p>
                <div className={styles.ImageBox}>
                  <img
                    className={styles.PopUpCardsImage}
                    src="/github.webp"
                    alt="icon git"
                  />
                </div>
              </div>
            </a>
          ) : null}

          {haveDeploy ? (
            <a
              className={styles.PopUpCardsLinkContainer}
              href={linkDeploy}
              target="_blank"
              rel="noopener"
            >
              <div className={styles.PopUpCardsLinkBox}>
                <p className={styles.PopUpCardsParagraph}>Deploy</p>
                <div className={styles.ImageBoxVercel}>
                  <img
                    className={styles.PopUpCardsImageVercel}
                    src="/vercelnew.webp"
                    alt="icon deploy"
                  />
                </div>
              </div>
            </a>
          ) : null}
        </section>
        {/* //////////////// */}
      </section>
    </main>
  );
}

export default PopUpCards;
