import Head from "next/head";
import styles from "../styles/home.module.css";
import Lottie from "react-lottie";
import animationData from "../public/lottie/under-construction.json";



export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.bg}>
      <div className="text-white flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>JOBIN S</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="md:flex">
            <div className="mx-5 md:mt-16 md:mr-32">
              <h1 className="text-5xl ">
                Hey there,
                <br />
                <span className="font-bold"> I am JOBIN</span>
              </h1>
            </div>
            <div className="mx-2">
              <Lottie options={defaultOptions} height={250} width={250} />
            </div>
          </div>
          <div>
            <p className="text-xl text-center md:text-2xl md:mt-16">
              THIS WEBSITE IS UNDER CONSTRUCTION
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  return {
    props:{}
  }
}