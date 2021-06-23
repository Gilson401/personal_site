const COOKIE_KEY = "GPWEB"

const savecookie = (data) => localStorage.setItem(COOKIE_KEY, data)


//TODO verifycookie
const get_cookie = () => {
    
    const data = localStorage.getItem(COOKIE_KEY)

    if (data ) {
        return data
    }
    return false
}



const hascookie = () => {
    return get_cookie() !== false
}

export {savecookie, hascookie, get_cookie} 


/**
 * Visão geral de privacidade
Este site usa cookies para que possamos oferecer a melhor experiência de usuário possível. 
As informações dos cookies são armazenadas em seu navegador e executam funções como reconhecê-lo quando 
você retorna ao nosso site e ajudar nossa equipe a entender quais seções do site você considera mais interessantes e úteis.

**Cookies Estritamente Necessários
O cookie estritamente necessário deve estar sempre ativado para que possamos salvar suas preferências de configuração de cookies.
botão

**Cookies de Terceiros
Este site usa o Google Analytics/Pixel Facebook para coletar informações anônimas, como o número de visitantes do site e as páginas mais populares.

Manter este cookie habilitado nos ajuda a melhorar nosso site.
botão


 */