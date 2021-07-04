import Head from 'next/head'
import React from 'react'
import { Container }from 'react-bootstrap'

const Artigo10112020 = () => {




  return (
    <>
          <Head>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>

                <link rel="canonical" href="https://gilsonpaulo.com.br/artigos/cookies-vs-local-storage" />
                <title>Cookies vs Local Storage</title>
                <meta name="description" content="Cookies vs Local Storage." />
            </Head>

            <Container> 

<h1>10/11/2020 - Cookies vs Local Storage. </h1>



<p>    Nos últimos dias em um dos meus projetos  tive a dúvida sobre quando deveria 
    utilizar cookie e localStorage, qual a diferença e propósito de cada um deles. Resolvi pesquisar e compartilho aqui.</p>
    
    <h2>Cookies </h2>

    <p>
    O que são cookies? Obviamente, apesar do nome, não são aqueles biscoitos com chocolate que se compra no mercado. 
    São pequenos arquivos localizados no computador de um usuário.
    </p>

    <div className=" centro boximages">
    <img className="responsive" src="https://cdn.pixabay.com/photo/2017/05/26/07/48/cookies-2345439_960_720.jpg" alt="texto alt" />
</div>

<br></br>
    <p>
    O objetivo deles é conter informações de dados específicos de um cliente e um site, 
    podendo ser acessados pelo servidor ou pelo computador dos usuários.
    </p>

    <p>
    Eles permitem entregar customizações de uma página para um usuário específico e  
    é capaz de transportar informações de uma visita ao site.    
    </p>

    <p>
    Isto posto, qual é o conteúdo deste arquivo cookie? Trata-se de uma tabela de 
    consulta contento pares de chave e valor de dados. Desta forma , é um modo de carregar 
    informações de uma sessão de um site ou entre sessões de sites relacionados, evitando sobrecarregar 
    uma máquina de servidor com enorme quantidade de armazenamento de informações de usuários.    
    </p>

        <p>
        Se ao invés de usar cookies armazenássemos todo estes dados no servidor, estaríamos criando
        uma complexidade para buscar as informações de um usuário particular em cada visita.
        Além disso, o cookie poderia expirar após um período de tempo.
        </p>


<h2> LocalStorage </h2>

<p>
É um modo de armazenar dados no computador do cliente. Também permite salvar chave e valor sem ter uma data de expiração.
Somente podem ser acessados via Jscript e HTML5. Entretanto,  o usuário pode limpar dados/cache de todos localStorage. 


</p>
É uma forma simplificada de cookie, que proporciona maior capacidade de armazenamento.
O tamanho disponível é de 5KB, o que é maior do que um cookie, que é de 4KB. 

<p>
Os dados de um localStorage não são enviados de volta ao servidor em cada solicitação
HTTP, isso reduz o tráfego entre o cliente e o servidor.
Assim, os dados armazenados só estarão disponíveis na mesma origem.
</p>

<p>
Cookies e localStorage servem para propósitos diferentes. Cookies são principalmente para leitura no lado do servidor, enquanto localStoragre pode ser lido somente pelo lado do cliente.
Outra grande diferença é o tamanho que pode ser armazenado.
Concluindo, ao utilizar a grande questão que deverá realizar é, a aplicação precisa ter leitura de dados do lado do servidor ou somente no cliente?
</p>
<hr/>
<div id="fb-root"></div>

<div className="fb-comments" data-href="https://gilsonpaulo.com.br/artigos/cookies-vs-local-storage" data-numposts="5" data-width=""></div>
            </Container> 

    </>
  )
}

export default Artigo10112020
