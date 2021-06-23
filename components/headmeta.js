import React, { useEffect } from 'react'
import Head from 'next/head';
import styled from 'styled-components';

const Headmeta = () => {


    

    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-XYZFG2LYTT"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `                   
                        function myFunction() {
                            alert("Hello! I am an alert box!");
                        }
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XYZFG2LYTT');
                        `,
                    }}
                
                />

                <meta name="google-site-verification"
                    content="qQVKnBn1BNlIODJ-sGRNOWnXlv439MGNXBQvhlh8H1w" />

                <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
                </script>

            </Head>


        </>
    )
}

const Ins2 = styled.ins`
display : inline-block;
width : 728 px;
height: 90 px;
`

export default Headmeta
