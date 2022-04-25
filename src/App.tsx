import Countdown, { zeroPad } from "react-countdown";

import styles from "./home.module.scss";

interface countdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function App() {
  const Completionist = () => (
    <p
      style={{
        color: "#6C63FF",
        fontSize: "1.95rem",
        fontWeight: "bold",
      }}
    >
      O lançamento começou!
    </p>
  );

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: countdownProps) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className={styles.countdownWrapper}>
          <h1>READY TO LAUNCH IN...</h1>
          <div>
              <p>Dias</p>
              <p>Horas</p>
              <p>Minutos</p>
              <p>Segundos</p>
            </div>
          <span>
            {zeroPad(days)} : {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
          </span>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImages}>
        <img src="/assets/top-image.svg" alt="topImage" />
        <img src="/assets/bottom-image.svg" alt="topImage" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.countdownContainer}>
          <Countdown
            date={Date.now() + 10000}
            renderer={renderer}
            zeroPadDays={2}
          />
          <p>Inscreva-se para saber mais sobre o lançamento</p>
          <button>Inscreva-se</button>
        </div>

        <img src="/assets/rocket.svg" alt="rocket" />
      </div>
    </div>
  );
}

export default App;
