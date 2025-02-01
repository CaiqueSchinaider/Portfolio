import { useEffect, useState } from "react";
import styles from "./Card.module.css";

function Card() {
  const [src, setSrc] = useState(1);
  const [status, setStatus] = useState({
    src: "",
    text: "",
    rotate: "",
  });

  useEffect(() => {
    if (src == 1) {
      setStatus({
        src: "/morgana.jpg",
        text: " Essa aqui o seu jeito gotico o atrai",
        rotate: "0deg",
      });
    } else if (src == 2) {
      setStatus({
        src: "/ravena.jpg",
        text: "Seu jeito sensivel trevoso",
      });
    } else if (src == 3) {
      setStatus({
        src: "/vampira.jpg",
        text: "Vampira sempre cai bem",
      });
    } else if (src == 4) {
      setStatus({
        src: "/vitoria1.png",
        text: " Essa é um caso a parte..",
      });
    } else if (src == 5) {
      setStatus({
        src: "/vitoria2.png",
        text: "O jeito dela, ééeee... Encantador",
      });
    } else if (src == 6) {
      setStatus({
        src: "/vitoria 3.png",
        text: " Essa biluteteia é realmente apaixonante.. ",
      });
    }
  }, [src]);
  return (
    <section className={styles.ContainerCard}>
      {/* <img src="/morgana.jpg" alt="#" /> */}
      {/* <p> Essa aqui o seu jeito gotico o atrai</p> */}

      {/* <img src="/ravena.jpg" alt="#" /> */}
      {/* <p> Seu jeito sensivel trevoso</p> */}

      {/* <img src="/vampira.jpg" alt="#" /> */}
      {/* <p> Vampiras sempre cai bem</p> */}

      {/* <img src="/vitoria1.png" alt="#" /> */}
      {/* <p> Essa é um caso a parte..</p> */}

      {/* <img src="/vitoria2.png" alt="#" /> */}
      {/* <p> O jeito dela, ééeee... Encantador </p> */}
      {/* Essa biluteteia é realmente apaixonante.. */}
      <img
        src={status.src}
        alt="#"
        style={{ transform: `rotate(${status.rotate})` }}
      />
      <p spellCheck="false">{status.text}</p>
      <button
        onClick={() => {
          setSrc(src + 1);
        }}
        style={{ display: src == 6 ? "none" : "null" }}
      >
        Ver proximo
      </button>
    </section>
  );
}

export default Card;
