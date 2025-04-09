import styles from "./InfoCard.module.css";

function InfoCard({ source, title, description, tabIndexValue }) {
  return (
    <section className={styles.InfoCardContainer} tabIndex={tabIndexValue}>
      <picture className={styles.ImageBox}>
        <img src={source} className={styles.ImageCard} />
      </picture>
      <div className={styles.CardDescription}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default InfoCard;
