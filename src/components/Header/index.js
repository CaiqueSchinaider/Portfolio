import styles from "./Header.module.css";
function Header() {
  return (
    <main className={styles.HeaderContainer}>
      <div className={styles.PresentationContainer}>
        <h1> Welcome</h1>
        <p>
          My name is{" "}
          <strong style={{ color: "gold" }}>Caique Schinaider</strong>, and
          despite being young, I am a great enthusiast of the technology world,
          always seeking to learn more, practice, and create!
        </p>
      </div>
      <div className={styles.IconsContainer}>
        <img
          src="/javascript.png"
          alt="javascript"
          className={styles.IconJavascript}
        />
        <img src="/css.webp" alt="css" className={styles.IconCss} />
        <img src="/html.png" alt="html" className={styles.IconHtml} />
        <img src="/react.png" alt="react" className={styles.IconReact} />
      </div>

      <nav className={styles.Navigation}>
        <a
          href="https://github.com/CaiqueSchinaider"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.png" alt="github" className={styles.IconGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/caique-schinaider-rufino-viana-a17b35273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="linkedin.png"
            alt="linkedin
          "
            className={styles.IconLinkedin}
          />
        </a>
      </nav>
    </main>
  );
}

export default Header;
