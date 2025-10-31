import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.ContactContainer}>
      <h1 className={styles.ContactTitle}>Contact</h1>
      <div className={styles.EmailContainer}>
        <img
          src="/contact/email.webp"
          alt="email"
          className={styles.IconEmail}
        />{" "}
        <p className={styles.Paragraph}>
          caiqueschinaiderrufinoviana@gmail.com
        </p>
      </div>
      <div className={styles.TelephoneNumberContainer}>
        <img
          src=" /contact/telephone.webp"
          alt="telephone"
          className={styles.IconTelephone}
        />{" "}
        <p className={styles.Paragraph}>
          55+ (31) 99152-2505 | 55+ (31) 99363-8590
        </p>
      </div>
      <div className={styles.AddressContainer}>
        <img
          src="/contact/address.webp"
          alt="telephone"
          className={styles.IconTelephone}
        />{" "}
        <p className={styles.Paragraph}>
          {" "}
          Bonsucesso, Belo Horizonte | Minas Gerais - Brasil
        </p>
      </div>
    </section>
  );
}

export default Footer;
