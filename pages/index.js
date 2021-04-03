import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import SignIn from "../components/welcome-layout/sign-in/sign-in";
import SignUp from "../components/welcome-layout/sign-up/sign-up";

export default function Home() {
  const [state, setState] = useState("SignUp");

  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>

    <div>
      {
        {
          SignIn: <SignIn setState={setState} />,
          SignUp: <SignUp setState={setState} />,
        }[state]
      }
    </div>
  );
}
