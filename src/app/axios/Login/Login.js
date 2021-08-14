import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import loginHelper from "../../../Utilitarios/loginHelper";
import { salvarUsuario } from "../../../Store/Slices/usuarioSlice";
import "./Login.css";
import cancel from "../../../image/cancel.png";

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const logar = async () => {

        const resultado = await loginHelper(usuario, senha);

        if (resultado.sucesso) {

            // Salva no redux as informações do usuário logado.
            dispatch(salvarUsuario(resultado.usuario));


            // Direciona para a página principal.
            history.push("/");

        } else {

            setMensagem(true)

        }
    }

    const fecharToast = () => {
        setMensagem(false)
    }



    return <>

            {mensagem ?

                // <div id="login-toast">
                    
                //     
                // </div>
                <div class="alert alert-danger" role="alert" id="login-toast">
                O usuário e/ou senha não foram identificados
                    <img src={cancel}  onClick={ () => fecharToast()} id="login-botao-fechar" alt="Botão para fechar a mensagem"/>
              </div>


                : null}
        <form onSubmit={e => e.preventDefault()} id="login-form" >


            <div className="mb-3 login-div">
                <input type="text" className="form-input" name="email" id="email" required aria-describedby="emailHelp"
                    onChange={e => setUsuario(e.target.value)} />
                <label htmlFor="email" className="form-label">Usuário</label>
            </div>
            <div className="mb-3 login-div">
                <input type="password" className="form-input" name="password" id="password" required
                    onChange={e => setSenha(e.target.value)} />
                <label htmlFor="password" className="form-label">Senha</label>
            </div>
            <button type="submit" className="btn login-botao"
                onClick={() => logar()}>Entrar</button>
        </form>

    </>


}

export default Login;