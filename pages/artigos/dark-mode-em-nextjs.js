import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'
import { Sharegroup } from '../../lib/util'

const Post07112020 = () => {
    return (
        <>
            <Head>

                <link rel="canonical" href="https://gilsonpaulo.com.br/artigos/dark-mode" />
                <title>DarkMode ou LightMode theme com NextJS</title>
                <meta name="description" content="Uma solução de DarkMode / LightMode em NextJS." />
            </Head>

            <Container>
            <article> 
            {/* <Sharegroup shareUrl={"https://gilsonpaulo.com.br/artigos/dark-mode"} quote={"Uma solução de DarkMode / LightMode em NextJS." } hashtag={'#GPWeb'}/> */}
                <br/>
            <h1>07/11/2020 - Uma solução de DarkMode / LightMode em NextJS. </h1>

<br/>

<p> Hoje apliquei uma solução para alternar entre light  e dark mode com o apoio do <a href="https://nextjs.org/blog/styling-next-with-styled-jsx"> tutorial do NextJS  </a> para global styles.</p>

<p> Em resumo a solução aplica um useState num arquivo de layout para controlar a cor de texto, cor do background e texto do botão de alternar modo</p>

<p> Os estados serão usados em variáveis dentro de template strings no  estilo (style jsx, default do NextJs)  </p>
<p> Quase toda a implementação do alternador de modo fica dentro deste arquivo de layout.</p> 

<div className="codeblock">
{`//um estado para controlar o modo que está sendo usado:
const [isLight, setIsLight]=useState(true)

//estado definindo o modo inicial
const [modo, setModo] = useState({
    textcolor:"black",
    bgcolor: "white",
    buttonTxt: "Dark Mode"
})
`}
</div>
<br/>
<p>Handle dos estados</p>


<div className="codeblock">
{`//O botão abaixo está aplicado como uma children de Nav. 
//Por enquanto, por questões de aparência decidi colocar junto dos botões de navegação.
//Ele recebe o setstate de islight e troca seu valor alternando entre truie e false
<Nav >
<Button onClick={()=>setIsLight(!isLight)}  > {modo.buttonTxt} </Button>
</Nav>
`}            
</div>
<br/>
<p>Botão de chamada de toggleTheme </p>

<div className="codeblock">
{`//O use effect usa setModo para atualizar o modo toda vez que  isLight é alterado

useEffect(() => {
  
    setModo({
        textcolor: '$ {isLight ? "black" : "white"}',
        bgcolor: '$ {isLight ? "white" : "black"}',
        buttonTxt: '$ {isLight ?  "Dark Mode" : "Light Mode"}'
    })
  
}, [isLight])


`}   

</div>

<br/>
<p> Por fim a aplicação dos estados no estilo: </p>

<div className="codeblock">
{`// O style jsx é em template string atente que deve substituir as aspas simples por sinal de crase. 
// O símbolo do cifrão deve ficar colado ao {} 
<style jsx global>{ '
        main{
            color: $ {modo.textcolor};
            background-color: $ {modo.bgcolor};
        } 
        body{
            color: $ {modo.textcolor};
            background-color: $ {modo.bgcolor};
        '}
</style>
`}   
</div>

<br/>

<p> Para conferir o resultado pode clicar no boão no canto acima à direita</p>

<div className=" centro boximages">
                    <img className="responsive" src="/media/darkmode.JPG" alt="resultado para dark mode" />
</div>
<br/>
<p> Light Mode: </p>


<div className=" centro boximages">
                    <img className="responsive" src="/media//whitemode.JPG" alt="light mode" />
</div>
<br/>
<p> Por hoje é só pessoal !</p>

</article>

</Container>
            <style jsx>
                {
                    `
                    .codeblock {
                        box-sizing: inherit;
font-family: Consolas,Menlo,Monaco,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Courier New,Courier,monospace;
line-height: 1.5;
border-radius: .2rem;
font-size: 1em;
direction: ltr;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
tab-size: 4;
hyphens: none;
background: #2a2734;
color: white;
padding: 1em;
margin: .5em 0;
overflow: auto;
                    }

                    `
                }
            </style>


        </>


    )
}

export default Post07112020


