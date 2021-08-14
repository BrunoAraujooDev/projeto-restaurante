import axios from "axios";
import usuario from "../../Utilitarios/localStorageHelper";



export default axios.create({
    baseURL: "http://localhost:8000/v2/",
    headers: {
        token: usuario.token ? usuario.token : null
    }

})

