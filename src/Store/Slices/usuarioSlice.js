import {  createSlice } from '@reduxjs/toolkit';
import usuario from '../../Utilitarios/localStorageHelper';



const initialState = {
  usuarioLogado: usuario.token ? true : false,
  usuarioOnline: usuario.usuario ? usuario.usuario : null,
};


export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    salvarUsuario: (state, action) => {

        state.usuarioOnline = action.payload;
        state.usuarioLogado = true;

    },
    
    realizarLogout:  state  => state = initialState,
    
  },
});

export const { salvarUsuario, realizarLogout } = usuarioSlice.actions;

export default usuarioSlice.reducer;
