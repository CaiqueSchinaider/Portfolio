import styles from "./Banner.module.css";
function Banner() {
  return (
    <main className={styles.BannerContainer}>
      <div className={styles.PresentationContainer}>
        <h1> Welcome</h1>
        <p>
          My name is
          <strong style={{ color: "gold" }}>Caique Schinaider</strong>, and it
          will be a pleasure to turn your project idea into reality for your
          business.
        </p>
      </div>
      <div className={styles.IconsContainer}>
        <img
          src="/javascript.webp"
          alt="javascript"
          className={styles.IconJavascript}
        />
        <img src="/css.webp" alt="css" className={styles.IconCss} />
        <img src="/html.webp" alt="html" className={styles.IconHtml} />
        <img src="/react.webp" alt="react" className={styles.IconReact} />
      </div>

      <nav className={styles.Navigation}>
        <a
          href="https://github.com/CaiqueSchinaider"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.webp" alt="github" className={styles.IconGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/caique-schinaider-rufino-viana-a17b35273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="linkedin.webp"
            alt="linkedin
          "
            className={styles.IconLinkedin}
          />
        </a>
      </nav>
    </main>
  );
}

export default Banner;
