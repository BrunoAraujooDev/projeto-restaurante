import { configureStore } from '@reduxjs/toolkit';
import cardapioReducer from './Slices/cardapioSlice';
import categoriasReducer from './Slices/categoriasSlice';
import usuarioReducer from './Slices/usuarioSlice';

export const store = configureStore({
  reducer: { // Reducer Global
    cardapio: cardapioReducer,
    categorias: categoriasReducer,
    usuario: usuarioReducer,
  },
});
