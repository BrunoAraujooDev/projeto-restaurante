import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  lista: [],
};


export const categoriasSlice = createSlice({
  name: 'categoria',
  initialState,
  reducers: {
    salvarCategorias: (state, action) => {

    const cardapio = action.payload;

    const categorias = [];


    for( let i = 0; i < cardapio.length ;i++ ){
        
      const produto = cardapio[i];

        if(!categorias.includes(produto.categoria)) {
          
            categorias.push(produto.categoria);
        }   
    }

      state.lista = categorias;
    },
  },
});

export const { salvarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
