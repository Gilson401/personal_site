import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container }from 'react-bootstrap'
import { Codeblock, Imgsmp } from '../../lib/util'

//pages\artigos\testes-integracao-jest-express-mongodb.js

const Artigo17112020 = () => {

const canonical = "testes-integracao-jest-express-mongodb"
const title = "Testes de integracao Jest Express e Mongodb"
const descriptConten = "Algumas observações sobre testes de integração com Jest, Express e Mongodb"



  return (
    <>
          <Head>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>
                <link rel="canonical" href={"https://gilsonpaulo.com.br/artigos/"+ canonical} />
                <title>{title}</title>
                <meta name="description" content={descriptConten} />
            </Head>


            <Container> 
                <br/>
<h1> 17/11/2020 - Algumas observações sobre testes de integração com Jest, Express e Mongodb </h1>

<br/>
<Imgsmp src={"https://marmelab.com/images/blog/jest.png"} />



<p>A documentação do Jest alega que <strong>Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade. </strong> 
Entretanto Jest pode se tornar um pesadelo para iniciantes em testes de integração de APIS com express e mongodd se algumas definições 
não coincidirem dos exemplos das aulas. Neste artigo irei abordar resumidamente alguns pontos referentes a isso. <br/>
<strong>
Este conteúdo é uma continuação adaptada do artigo   <Link href="/artigos/jest-mongodb-erros">Resolvendo os erros de implementação de testes Jest + MongoDB. </Link> <br/>
Os pontos abordados aqui são propostos para um caso específico que observei. 
<br/>É possivel que não se aplique a todos os casos de erros.
</strong> </p>

<br/>

<h5>Antes, cheque teus scripts e tuas dependências</h5>
<br/>
<Codeblock code={`//Recomendamos os scripts abaixo
"scripts": {
    "test": "jest --forceExit --detectOpenHandles",
    "test:watch": "jest --watch --detectOpenHandles",
    ...
}
...
//observe se as dependências de desenvolvimento necessárias estão instaladas
"devDependencies": {
    "@shelf/jest-mongodb": "^1.2.3",
    "jest": "^26.6.3",
    "nodemon": "^2.0.4",
    "supertest": "^6.0.1"
  }
`}/>

<br/>
<h5>raiz/jest.config.js</h5>
<p>Conforme a documentação, configurações do Jest podem ser feitas no package.json ou no arquivo jest.config.js na raiz. Optei por esta segunda forma.
Aqui em jest.config.js colocamos configurações e apontamento para outros arquivos de configuração. Se informar um arquivo aqui que não exista, dará erro.
</p>
<Codeblock code={`//jest.config.js
module.exports = {
    //globalSetup: './setup',  // esta linha demonstrou-se ser  desnecessária. Este módulo exporta global.__MONGOD__. Em tese iniciaria ou fecharia a conexão com o banco 
    globalTeardown: './teardown.js',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
        '/node_modules/'
      ],
    verbose: true,
    preset: '@shelf/jest-mongodb' 
}
`}/>

<br/>
<h5>raiz/teardown.js</h5>
<p>teardown.js chama o fechamento da conexão com o mongodb quando os testes são encerrados.
 O não fechamento apropriado da conexão causa erro. </p>

<div className="codeblock">
    {`//teardown.js
const mongoose = require('mongoose');

module.exports = async function () {
    await mongoose.connection.close() 
}
`}
</div>

<br/>

<h5>raiz/jest.setup.js</h5>
<p> Este arquivo não se mostrou obrigatório para o Jest mas em algumas situações ele é exigido / necessário.
     Por exemplo se ele foi indicado no módulo ./jest.config.js (dentro de setupFilesAfterEnv: ['./jest.setup.js']), ele será cobrado

jest.setTimeout(tempo em ms) define o tempo que o Jest de espera para um teste terminar. O padrão é 5000 (5 segundos)
  mas se vc estiver testando uma função assíncrona que demore mais que isso o jest pode acusar um falso erro.Requisições pesadas em 
  apis ou bancos de dados podem causar uma demora maior que o esperado. Conexões abertas no teste e não fechadas tambem podem causar este tempo maior.
  <br/>
  Definindo um tempo maior evitamos falso erro e ou "saídas deselegantes" do procedimento.
</p>

<Codeblock code={`//jest.setup.js
jest.setTimeout(30000)`}/>

<br/>
<h5>O teste propriamente dito -- seuteste.test.js</h5>
<p>O exemplo abaixo é o teste de integração na api encaminhando uma requisição get simples em uma rota chamada product. Se a resposta estiver 
    dentro do previsto em .expect deu match!!!

</p>
<Codeblock code={`//api.product.test.js
const { app, server} = require('../server')
const request = require('supertest');

let res = null

beforeAll(async () =>{
   res = await request(app)
})

describe('product', function() {
    it('responds with application/json; charset=utf-8',  async function(done) {
        res.get('/product')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    });
});

afterAll(()=>{
    server.close()
})
`}/>



<br/>
<p>Recomendamos leitura da <a href="https://jestjs.io/docs/pt-BR/getting-started">  documentação </a> para esclarecimento de dúvidas adicionais. </p>
<p>Isso é só por hoje!</p>

<br/>
            <div id="fb-root"></div>
            <div className="fb-comments" data-href={"https://gilsonpaulo.com.br/artigos/"+ canonical} data-numposts="5" data-width=""></div>
            </Container> 

            <style jsx>{`
            
            `}</style>
    </>
  )
}

export default Artigo17112020
