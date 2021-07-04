import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container }from 'react-bootstrap'
import { Imgsmp, Sharegroup } from '../../lib/util'

const Artigo14112020 = () => {

    const canonical = "formulario-de-contato-react-sem-back-end"
    const title = "Formulário de contato com React e sem Back-End."
    const descriptConten = "Formulário de contato com React e sem Back-End usando Emailjs-com. Protocolo SMTP "

    // function Imgsmp(props) {
    //     return (
    //         <>
    //             <div className=" centro boximages">
    //                 <img className="responsive" src={props.src} alt={props.src} />
    //             </div>
    //         </>
    //     )
    // }

    return (
        <>
            <Head>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0" nonce="bnaw32cW"></script>
                <link rel="canonical" href={"https://gilsonpaulo.com.br/artigos/" + canonical} />
                <title>{title}</title>
                <meta name="description" content={descriptConten} />
            </Head>


            <Container>
            {/* <Sharegroup shareUrl={"https://gilsonpaulo.com.br/artigos/" + canonical} quote={descriptConten} hashtag={'#GPWeb'}/> */}
                <br />
                <h1> 14/11/2020 - Formulário de contato com React e sem Back-End. </h1>

                <br />
                <p>Este artigo considera que o leitor já possui conhecimento de React, React Hook useState, Formulários em React, manipulação de inputs e
    armazenamento dos valores inputados. </p>
                {/* <br/> */}

                <p>Você fez um lindo site em React expondo teu produto. Agora você quer que os visitantes possam
                te enviar mensagens de  forma rápida e amigável,  sem sair de tua aplicação, sem precisar
     copiar e colar email em outra interface. <strong>Você quer um formulário de contato!</strong>   </p>
                <br />

                <p>A forma que será mostrada aqui é utilizando a dependência  <a href="https://www.npmjs.com/package/emailjs-com"> EmailJs-com</a>.
 </p>

                <br />

                <h4>Let's get started!</h4>

                <p>Crie uma conta na <a href="https://dashboard.emailjs.com/sign-up"> EmailJs-com</a>. A criação de uma conta é grátis e o serviço básico
gratuito dá um pacote com disparo de até 200  emails por mês, requisições até 50kb e 2 templates de mensagem.
<br /><br />
Neste tutorial uso o serviço para o protocolo SMTP. Siga as indicações da imagem abaixo para adicionar o serviço
</p>

                <Imgsmp src={"/emailjs_services_select.JPG"} />

                <br />
                <br />
                <br />

                <h4> Agora iremos salvar as definições de um serviço de email.</h4>
                <br />

                <p>
                    Defina um nome e um ID para teu serviço. Este ID será utilizado no código de disparo do email.
<br />
Informe o endereço SMTP e a porta do serviço de email. Marque o SSL se o teu host suporta este serviço.
Informe email e senha reais. É este email que irá aparecer como remetente nas mensagens.
</p>

                <Imgsmp src={"/emailjs_services_def.JPG"} />

                <br />
                <br />


                <h4> Definir o template de email.</h4>
                <br />
                <p>
                    Vá para Email Templates. Você já começa com um tamplate padrão pronto à disposição. Edite este template.
<br />
Observe que este template tem um ID. Este ID será usado no código de enviar email.
</p>

                <Imgsmp src={"/emailjs_services_templates_id.JPG"} />

                <br /><br /><br />
                <h4> Editar o template de email.</h4>
                <br />

                <p>
                    Em <strong> Email Templates</strong>. Você já começa com um template pronto à disposição. Edite este template.
                <br />
                Observe os campos que estão entre chaves duplas. Estes nomes de campo serão preenchidos com os dados que forem definidos
                no teu código. Você deve ter no código um objeto contendo chaves com estes nomes de campo. Defina estes campos conforme a tua necessidade.
                </p>

                <Imgsmp src={"/emailjs_services_templates_edit.JPG"} />

                <br /><br /><br />
                <h4> Pegue seus dados de integração / Seu User ID. </h4>
                <br />
                <p>
                    Em <strong> Integration</strong>. pegue seu user ID. Ele será usado no código de envio de email.
                <br />
                Nesta parte o Emailjs já dá algumas recomendações para codar no framework js - nosso caso.
                </p>

                <Imgsmp src={"/emailjs_services_userid.JPG"} />

                <br /><br /><br />
                <h4> Mão no código. Make the magic... </h4>
                <br />

                <p>
                    Instale a dependência <strong>$ npm install emailjs-com --save</strong>.
                </p>
                <p>
                    Tenha um formulário com os campos name, email, subject, message e um botão para submeter. O formulário deverá ter as
                    lógicas de validação necessárias.
                </p>

                <p>
                    No módulo do teu formulário faça os imports:
                <br />
                    <strong> import emailjs from 'emailjs-com'; </strong>
                    <br />
                    <strong> {`import {init} from 'emailjs-com'`}; </strong>
                </p>
                <br />

                <p>
                    No teu componente de formulário, inicialize a instância do emailjs com o seu código de ID usuário
                </p>
                <div className="codeblock">
                    {`init("user_ID_que_obteve_em_integration");`}</div>

                <br />
                <p>
                    O  método de submit email deve ter um objeto para enviar os dados ao Emailjs para que este dispare o email.
                    Observe que as chaves deste objeto são os campos que definimos no template email.
                    Para cada chave deste objeto atribuimos o valor correpondente do state que está armazenandos os dados do form
                    (exceto para to_name já que o nome do destinatário sempre será o mesmo).
                </p>

                <div className="codeblock">
                    {`

// decompondo o state que armazena os inputs do formulário
const { name, email, subject, message } = state ;

//para em seguida alimentar o objeto:
let templateParams = {
    to_name: "Nome do Destinatário do Email",
    from_name: name,
    from_email: email,
    reply_to: email*, // (opcional, conforme necessidade)
    subject: subject,
    message: message
};


emailjs.send('ID_DO_SERVIÇO', 'ID_DO_TEMPLATE_EMAIL', templateParams, 'ID_DO_USUÁRIO')
.then(function(response) {
    //  ... Se deu certo faça ...
    
}, function(error) {
    //  ... Se deu errado faça ...
   
});

`}</div>

                <br />
                <br />

                <p>
                    O exemplo deste artigo foi minimalista. Você pode acrescentar outros campos para o formulário. É interessante também colocar alertas de erro e sucesso
                    após o submit.

    <br />

    Para aprofundar os estudos recomendo <a href="https://www.emailjs.com/docs/introduction/how-does-emailjs-work/"> documentação do Emailjs </a>
                    <br />
                    <br />
    Por hoje é só! Se curtiu, comente aqui em baixo, dê feedback pelo meu  <Link href="/contato">form de contato </Link>  e compartilhe nas tuas redes.

</p>



                {/* ##################################################################################################################### */}
                <div id="fb-root"></div>
                <div className="fb-comments" data-href={"https://gilsonpaulo.com.br/artigos/" + canonical} data-numposts="5" data-width=""></div>
            </Container>

            <style jsx>{`
            
            `}</style>
        </>
    )
}

export default Artigo14112020
