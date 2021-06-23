import axios from 'axios'

/**
 * Instância do axios configurada para 'https://apiacademia.herokuapp.com'
 */
const clientHttp = axios.create({
    baseURL:  'http://localhost:3001'
})

// clientHttp.defaults.headers['Content-Type'] = 'application/json';
// clientHttp.defaults.headers['x-forwarded-proto'] = 'https';



const interceptor = clientHttp.interceptors.response.use(
    response => response,
    error => {
 
        const { response: { status } } = error;

   

        if (error.message === 'Network Error' && !error.response) {
            alert('você está sem internet')
        }

        switch (status) {
            case 401:

                history.push('/login')
                break;
            case 403:
                history.push(`/erro/403`)
                break;
            default:

                history.push(`/erro/${status}`)

                break;
        }
        axios.interceptors.response.eject(interceptor);
        return Promise.reject(error);
    }
);



export {
    clientHttp
}
