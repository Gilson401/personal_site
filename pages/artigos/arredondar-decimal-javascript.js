import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'

const Post04112020 = () => {
    return (
        <>
            <Head>

                <link rel="canonical" href="https://gilsonpaulo.com.br/artigos/arredondar-decimal-javascript" />
                <title>Arredondar casas decimais em JavaScript</title>
                <meta name="description" content="Sugestões para arredondar números decimais em Javascript." />
            </Head>

            <Container>
            <article> 
                <br/>
            <h1>04/11/2020 - Como arredondar as casas decimais em JavaScript </h1>

<p>Como desenvolvedores fatalmente um dia precisaremos arredondar números em JavaScript. É normal procurar um como fazer na Internet.</p>

<p>Entretanto até procedimentos simples podem ter erros de precisão. </p>
<p>Uma forma de arredondar um número decimal para 2 casas decimais, por exemplo, usando JavaScript, é usando Math.round(decimal * 100) / 100, mesmo assim o método acaba esbarrando em limitações de precisão da linguagem.</p>
<p>Esta forma é um padrão e bastante eficaz para fazer arredondamento de decimal, porém é necessário saber que este é um método pouco confiável.</p>


<h1> Uma função proposta para arredondar números decimais em Javascript</h1>

<p>Você poderá procurar e encontrar na internet funções de uma linha com este propósito, mas infelizmente elas não serão precisas. 
    Isso é se devido à natureza binária que os números decimais possuem.</p>

<p>O padrão utilizado pelo JavaScript para trabalhar com ponto flutuante é o IEE 745 . Quando se realiza uma  operação aritmética em dois números float ou double,
    é realizado um arredondamento (seja para mais ou para menos) na última casa (bit),
     onde termina o espaço que foi alocado em memória para representar o número.</p>

<p>
Isso explica o motivo de em JavaScript ocorrerem resultados estranhos para operações básicas, exemplo:
</p>



<div className="codeblock">
{`
const nummero = 0.2 + 0.4;

// false

// 0.6000000000000001


`}
</div>



<p>Na função nativa do Javascript de arredondamento Math.round ou no método toFixed também vamos esbarrar com o mesmo inconveniente ao tentar arredondar para X casas decimais.</p>

<p>Confira abaixo uma função que funciona com precisão, trazida pelo usuário do Stack Overflow <a href="https://stackoverflow.com/users/1736537/a-kunin">A Kunin  </a> </p>


            <div className="codeblock">

            
                {`const round = (num, places) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places)  + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}


`}
            
            </div>

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

export default Post04112020


