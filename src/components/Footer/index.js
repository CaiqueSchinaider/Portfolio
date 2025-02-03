import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.ContactContainer}>
      <h1 className={styles.ContactTitle}>Contact</h1>
      <div className={styles.EmailContainer}>
        <img src="o-email.png" alt="email" className={styles.IconEmail} />{" "}
        <p>caiqueschinaiderrufinoviana@gmail.com</p>
      </div>
      <div className={styles.TelephoneNumberContainer}>
        <img
          src="telephone.png"
          alt="telephone"
          className={styles.IconTelephone}
        />{" "}
        <p>55+ (31) 99152-2505</p>
      </div>
    </section>
  );
}

export default Footer;
