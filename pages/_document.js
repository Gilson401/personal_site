

import { GA_TRACKING_ID } from '../lib/gtag'

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head lang="pt-br" >
//           {/* Global Site Tag (gtag.js) - Google Analytics */}

//           <script 
//               data-ad-client="pub-9363748503768775"
//               async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
//           </script>

//           <script
//             async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//           />
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_TRACKING_ID}', {
//               page_path: window.location.pathname,
//             });
//           `,
//             }}
//           />

//         <meta name="purpleads-verification" content="70407f2343dffdaedd326605"></meta>
       

//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
        
//       </Html>
//     )
//   }
// }


import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }


    render() {
    return (
      <Html>
        <Head lang="pt-br" >
          {/* Global Site Tag (gtag.js) - Google Analytics */}

          <script 
              data-ad-client="pub-9363748503768775"
              async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
          </script>

          <script
            async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        <meta name="purpleads-verification" content="70407f2343dffdaedd326605"></meta>
       

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        
      </Html>
    )
  }
}