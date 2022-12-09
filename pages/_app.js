import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Layout from "../components/layout/layout";
import Head from "next/head";


import "../styles/globals.scss";
import "../styles/globals.css";

// Import Swiper styles
import "swiper/swiper.scss";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

export function reportWebVitals(metric) {}

const App = ({ Component, pageProps }) => {

const  capa = '/media/capa.jpeg'
  const useUser = { user: "User Nome", isAdmin: false };

 
  const router = useRouter();

  useEffect(() => {
    if ("serviceworker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("../public/pwabuilder-sw.js")
          .then((reg) => {
            console.log("Service worker file found", reg);
          })
          .catc((err) => {
            console.log("Servicework error", err);
          });
      });
    } else {
      console.log("Service worker not supported");
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Head>

        <title>Gilson Paulo:  desenvolvedor web full-stack ReactJS,  NodeJS, VueJS e NuxtJS.</title>
<meta name="title" content="Gilson Paulo:  desenvolvedor web full-stack ReactJS,  NodeJS, VueJS e NuxtJS."/>
<meta name="description" content="Desenvolvedor front-end júnior atuando formalmente desde agosto de 2021. Front-end engineer working formally since August 2021."/>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap"
            rel="stylesheet"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gilsonpaulo.com.br/" />
          <meta
            property="og:title"
            content="Gilson Paulo:  desenvolvedor web full-stack ReactJS,  NodeJS, VueJS e NuxtJS."
          />
          <meta
            property="og:description"
            content="Desenvolvedor front-end júnior atuando formalmente desde agosto de 2021. Front-end engineer working formally since August 2021."
          />
          <meta property="og:image" content="https://gilsonpaulo.com.br/android-chrome-192x192.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://gilsonpaulo.com.br/" />
          <meta
            property="twitter:title"
            content="Gilson Paulo:  desenvolvedor web full-stack ReactJS,  NodeJS, VueJS e NuxtJS."
          />
          <meta
            property="twitter:description"
            content="Desenvolvedor front-end júnior atuando formalmente desde agosto de 2021. Front-end engineer working formally since August 2021."
          />
          <meta property="twitter:image" content="https://gilsonpaulo.com.br/android-chrome-192x192.png" />
    
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
