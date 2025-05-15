import { Head, UspSection, Preview, Join } from "./_components";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Head />

        <Image
          src="/header-app-snippet.jpg"
          alt="Dashboard preview"
          width={1596}
          height={864}
          unoptimized={true}
          className={styles.image}
        />

        <span className={styles.separator} />

        <UspSection />

        <span className={styles.separator} />

        <Preview />

        <span className={styles.separator} />

        <Join />
      </div>
    </div>
  );
}
