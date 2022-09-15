import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import {  ResponsiveIframe } from '../../lib/util'



const Portfolio_academia = () => {

const canonical = "vueTypescriptPinia"
const title = "Demonstração de Typescript Vue3 e Pinia"
const descriptConten = "Demonstração de Typescript Vue3 e Pinia"

  return (
    <>
          <Head>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>
                <link rel="canonical" href={"https://gilsonpaulo.com.br/portfolio/"+ canonical} />
                <title>{title}</title>
                <meta name="description" content={descriptConten} />
            </Head>


            <Container> 
            <br/>
<h1> Portfólio - Typescript Vue3 Pinia </h1>

<img className="responsive" src="/media/vue3TypescriptPinia.PNG" alt="daniela consultora"/>

<h3 className="mt-4">Sobre: </h3>
<p>Este projeto é uma demonstração de Vue3 com Typescript, Pinia e TailwindCSS. 
</p>

<p>
Consumo de duas APIS públicas com serviços dedicados com Axios;
</p>

<p>
Armazenamento de dados na store Pinia, uma para cada serviço;

</p>

<a className="d-block" href="https://vue-pinia-typescript.netlify.app/" target="_blank">
Link Aplicação
</a>

<a className="d-block" href="https://github.com/Gilson401/vue3-pinia-ts/" target="_blank">
Link GitHub
</a>

<h3 className="mt-4">Dependências: </h3>

<p >

"@vueuse/core": "^8.9.2",<br/>
    "axios": "^0.25.0",<br/>
    "element-plus": "^2.0.1",<br/>
    "nprogress": "^0.2.0",<br/>
    "pinia": "^2.0.16",<br/>
    "prism-theme-vars": "^0.2.4",<br/>
    "vue": "^3.2.25",<br/>
    "vue-i18n": "^9.1.9",<br/>
    "vue-router": "^4.1.2"<br/>

</p>

<br/>

            <div id="fb-root"></div>
            <div className="fb-comments" data-href={"https://gilsonpaulo.com.br/portfolio/"+ canonical} data-numposts="5" data-width=""></div>
            </Container> 

            <style jsx>{`
            
            `}</style>
    </>
  )
}

export default Portfolio_academia
