import { clientHttp } from '../config/config.js'


//para rodar com meu servidro local Descomentar
const createUser = (data) => clientHttp.post(`/user`, data)

/**
 * informe a query. Faz getAll desta query em academia list
 * @param {*} route 
 */
const ListUserQuery = (query) => clientHttp.get('/list', { params : query })

const ListUser = () => clientHttp.get('/list')

/**
 * informe a rota. Faz getAll desta rota
 * @param {*} route 
 */
const GetAllFromRoute = (route) => clientHttp.get(`/${route}`)


/**
 * informe a rota. Faz post de data na route informada 
 * @param {*} route 
 */
const PostInRoute = (route, data) => clientHttp.post(`/${route}`, data)

/**
 * Passe rota e depois id. Faz get com Id desta rota
 * @param {*} route 
 * @param {*} id 
 */
const getByIdAdnByRoute = (route , id) => clientHttp.get(`/${route}/${id}`)


/**
 * Passe rota e depois id. Faz o delete desta rota pelo id por param
 * @param {*} route 
 * @param {*} id 
 */
const deleteByRouteAndId = (route , id) => clientHttp.delete(`/${route}/${id}`)


const deleteUserById = (data) => clientHttp.delete(`/delete/${data}`)

/**Executa patch em user por id */
const patchByUserId = (id, data) => clientHttp.patch(`/edit/${id}`, data)

const updateUser = (data) => clientHttp.patch(`/edit/${data._id || data.id}`, data)


/**Irá retornar o token dado pelo sewrver se o 
 * login for sucesso
 */
const userAuth = async (data) => {
    return await clientHttp.post(`/auth`, data)
}


/**
 * passeobjeto com matricula e senha mock deve devolver um user existente
 * @param {passe matricula e } data 
 */
const fakeLoginMock = async (data) => {
    return await clientHttp.get(`/users?matricula=${data}`)
}


/**
 * retorna dados do user com o id informado
 * @param {id} data 
 */
const getUserById = (data) => clientHttp.get(`/users/${data}`)

/**
 * 
 * @param {id} data 
 */
const getAlunoById = (data) => clientHttp.get(`/users/${data}`)


const axiosEditCurrentUser = (id, data) => clientHttp.patch(`/user${id} `, data)

/**
 * Manda patch conforme parametros
 * @param {rota} Rota_após_base 
 * @param {id conforme schema} id 
 * @param {dados a atualizar} data 
 */
const patcByhRotaAndId = (rota, id, data) => clientHttp.patch(`/${rota}/${id} `, data)


export {
    axiosEditCurrentUser,
    createUser,
    ListUser,
    getUserById,
    userAuth,
    deleteUserById,
    patchByUserId ,
    updateUser,
    getAlunoById,
    patcByhRotaAndId,
    GetAllFromRoute,
    getByIdAdnByRoute,
    fakeLoginMock,
    PostInRoute,
    deleteByRouteAndId,
    ListUserQuery
}

