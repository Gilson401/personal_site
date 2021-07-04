import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import Head from 'next/head';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResponsiveIframe } from '../lib/util';

const Blog = () => {

    return (

        <>

            <Head>
                <link rel="canonical" href="https://gilsonpaulo.com.br/blog" />           
            </Head>
      

        <StContainer className='darkbg' >
        <hr/>



        <h3>30/11/2020 - Vídeo com meu atual work-in-progress</h3>
        <p>Trata-se de um CMS para negócios diversos. No exemplo temos um para venda de produtos alimentícios o sem gluten.
        </p>
        <br/>

        <ResponsiveIframe url="https://www.youtube.com/embed/zcb-qTlW2fA"/>


        <br/><br/><br/>
        <h3>15/11/2020 - Share Buttons da lib react-share </h3>
        <br/>

        <p> 
            Adicionei botões de compartilhamento da lib <a href="https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/">react-share</a>. Foi tão fácil que não sei merece um artigo.
        </p>



        <br/>
        <h3>03/11/2020 - Vazamento de informações de usuários do site Geekie e do time Athletico </h3>
        <br/>
            <p>   
            Informações de usuários de um site do Brasil chamado Geekie e do time Athletico foram vazados na rede: um cracker pôs à venda um 
            banco de dados cerca de 34 milhões de registros dos usuários de diversas partes do planeta, incluindo registros do site educacional
             brasileiro Geekie e do Clube Athletico Paranaense. Os dados que vazaram incluem senhas,  
            CPF,  e-mails,  gênero, nomes, número de celular e data de nascimento. As informações são do site Olhar Digital.
                
                <a href="ttps://olhardigital.com.br/fique_seguro/noticia/cracker-coloca-a-venda-34-milhoes-de-registros-de-usuarios-de-17-empresas/109674">   Olhar Digital.</a>
                <br/>        <br/>

                <div className=" centro boximages">
                    <img className="responsive" src="https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883632_960_720.jpg" alt="hacker com números" />
                </div>

            </p>
        <br/>

        <h3>01/11/2020 - Site migrado para NextJS  </h3>
        <br/>
            <p>   
                Decidi implementar o NextJs por questões de SEO (Search Engine Optimization, ou Otimização de Mecanismo de Busca ).
                Dependendo da proposta, é fundamental que seu site possa ser encontrado com facilidade pelos buscadores da internet. O React puro tem como característica a renderização 
                no lado do cliente (no browser do usuário)  e por este motivo o "crawler" fica prejudicado.
                <br/>        <br/>
                <a href="https://www.tecmundo.com.br/blog/2770-o-que-e-seo-.htm">   O que é SEO.</a>
                <br/>        <br/>

                <div className=" centro boximages">
                    <img className="responsive" src="/media/next.JPG" alt="texto alt" />
                </div>

            </p>

        <hr/>

        
            <h3>18/10/2020 - Hello world!  </h3>

             <p>   
                Estou muito feliz e agradeço a Deus por este momento. Este é meu primeiro projeto fora do curso fullstack MERN que estou fazendo no 
                
                <a href="https://www.infnet.edu.br/infnet/sobre/">   Instituto Infnet.</a>
            </p>

            <div className=" centro boximages">
                
                <img className="responsive" src="/media/pilha.jpg" alt="texto alt" />
            </div>

           
            <p>
                As dependências utilizadas neste site são:
            </p>
            <p>
            <ul>
       
                <li>"bootstrap": "^4.5.2",</li>
                <li>"encrypt_object": "^1.0.3",</li>
                <li> "express": "^4.17.1", </li>
                <li> "react": "^16.13.1", </li>
                <li> "react-dom": "^16.13.1", </li>
                <li>  "react-iframe": "^1.8.0", </li>    
                <li> "react-router-dom": "^5.2.0", </li>
                <li> "react-scripts": "^3.4.3", </li>
                 <li> "styled-components": "^5.2.0"  </li>
            </ul>    
            </p>


            <p>
                Em breve novos conteúdos.
            </p>

        </StContainer>

         </>

    )
}

export default Blog

const img2 = styled.img`
  width: 100%;
  height: auto;
`


const StContainer = styled(Container)`
min-height: 70vh;
padding-top: 30px;

.container {
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                        padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
                      }
                      
                      /* Then style the iframe to fit in the container div with full height and width */
                      .responsive-iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        width: 100%;
                        height: 100%;
                      }
                    #slide {
                        height: 50px;
                        transition:             height 500ms ease;
                            -moz-transition:    height 500ms ease;
                            -ms-transition:     height 500ms ease;
                            -o-transition:      height 500ms ease;
                            -webkit-transition: height 500ms ease;
                    }

                    .responsive {
                        width: 100%;
                        height: auto;
                        
                    }


ul{
li{
    a{font-family:Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
font-size: 20px;
}
}
}

`