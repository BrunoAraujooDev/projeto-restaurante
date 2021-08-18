import axios from "axios";
import { getUsuario } from "../../Utilitarios/localStorageHelper";


const getAxios = () => {

    const usuario = getUsuario();
    
     return axios.create({
    baseURL: "http://localhost:8000/v2/",
    headers: {
        token: usuario.token ? usuario.token : null
    }

})}


export default getAxios;

