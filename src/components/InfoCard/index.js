import styles from "./InfoCard.module.css";

function InfoCard({ source, title, description }) {
  return (
    <section className={styles.ContainerInfoCard}>
      <picture className={styles.ImageBox}>
        <img src={source} />
      </picture>
      <div className={styles.CardDescription}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default InfoCard;
