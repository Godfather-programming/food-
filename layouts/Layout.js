

import Link from "next/link";
import styles from "./Layout.module.scss"

function Layout({ children }) {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.header}>
          <span className={styles.title}> <Link href="/"> BotoFood </Link> </span>
          <div className={styles.option}>
            <span> menu </span>
            <span> categories </span>
          </div>
        </div>
      </header>

     <main>
         <div>{children}</div>
     </main>

      <footer>
        <div className={styles.footer}>
          <p>
            {" "}
            <a href="https://botostart.ir" target="_blank"> Godfather </a> Next.js courses | BotoFood project &copy;{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
