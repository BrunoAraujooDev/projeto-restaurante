import {  createSlice } from '@reduxjs/toolkit';
import { getUsuario } from '../../Utilitarios/localStorageHelper';



const initialState = {
  usuarioLogado: getUsuario().token ? true : false,
  usuarioOnline: getUsuario().usuario ? getUsuario().usuario : null,
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
