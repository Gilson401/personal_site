// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Layout from '../components/layout/layout'
import Head from 'next/head';


export function reportWebVitals(metric) {
    
}

const App = ({ Component, pageProps }) => {
    //TODO
    // Here you would fetch and return the user
    const useUser = { user: "User Nome", isAdmin: false }

    const saveuser = () => {
        if (useUser) {
            alert("Tem user")
        }
    }
    const { user, isAdmin } = useUser
    const adminpages = "/admin"
    const router = useRouter()
    
    useEffect(() => {

        if ((!user.isAdmin) && adminpages.includes(router.route) && router.route.length > 1) {
            router.push("/login")
            alert(`Este user não está autorizado em ${router.route}. Redirecionado para login`)

        }

    }, [router.route])


    useEffect(() => {
      
        const handleRouteChange = (url) => {
          
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
         router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])





    return (
        <>
            <Layout >
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App
