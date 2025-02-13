import styles from "../../page.module.css";

export default function BlueTicket() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{ new Date().getDate() }</h1>
        <h2>Today you can fish the upper beat</h2>
      </main>
    </div>
  );
}