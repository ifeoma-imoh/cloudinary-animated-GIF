import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>
            <Link href="/">Transform GIF</Link>
          </li>
          <li>
            <Link href="/setDelayPage">Delay between frames</Link>
          </li>
          <li>
            <Link href="/singleFramePage">Single frame</Link>
          </li>
          <li>
            <Link href="/gifToVideoPage">GIF to Video</Link>
          </li>
        </ul>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
