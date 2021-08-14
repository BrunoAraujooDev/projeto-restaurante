import { createSlice } from '@reduxjs/toolkit';



const SEM_CATEGORIA = "Sem categoria";



const initialState = {
  lista: [],
  listaCompleta: [],
  categoriaSelecionada: SEM_CATEGORIA,
  campoPesquisar: "",
  atualizarListaCompleta: true
};


export const cardapioSlice = createSlice({
  name: 'cardapio',
  initialState,
  reducers: {
    salvarCardapio: (state, action) => {

      const cardapio = action.payload;

      state.lista = cardapio;
      state.listaCompleta = cardapio;
    },

    filtrarCardapioPorCategoria: (state, action) => {

      const categoriaSelecionada = action.payload;

      if (categoriaSelecionada !== SEM_CATEGORIA) {
        const cardapioFiltrado = state.listaCompleta.filter(produto => produto.categoria === categoriaSelecionada);

        state.lista = cardapioFiltrado;
      } else {
        state.lista = state.listaCompleta;
        state.categoriaSelecionada = SEM_CATEGORIA;
      }
    },

    filtrarCardapioPorMaiorPreco: (state, action) => {

      const cardapio = action.payload;

      let NovaLista = [...cardapio];

      NovaLista.sort((a, b) => {
        if (parseFloat(a.preco) > parseFloat(b.preco)) { return -1; }
        if (parseFloat(a.preco) < parseFloat(b.preco)) { return 1; }
      });

      state.lista = NovaLista;
    },

    filtrarCardapioPorMenorPreco: (state, action) => {

      const cardapio = action.payload;

      let NovaLista = [...cardapio];

      NovaLista.sort((a, b) => {
        if (parseFloat(a.preco) < parseFloat(b.preco)) { return -1; }
        if (parseFloat(a.preco) > parseFloat(b.preco)) { return 1; }
      });

      state.lista = NovaLista;
    },

    salvarPesquisa: (state, action) => { state.campoPesquisar = action.payload },

    filtrarCardapioPorPesquisa: state => {

      const palavras = state.campoPesquisar.split(" ");

      const produtos = state.listaCompleta;

      const produtosFiltrados = produtos.filter(produto => {


          let valida = palavras.some( palavra => produto.produto.toLowerCase().includes( palavra.toLowerCase() ) || 
                                                produto.descricao.toLowerCase().includes( palavra.toLowerCase() ) || 
                                                produto.categoria.toLowerCase().includes( palavra.toLowerCase() ) );

        return valida;

         });

       if( produtosFiltrados.length > 0) {

          state.lista = produtosFiltrados;

       } else {

         alert("Ainda não temos no cardápio! Favor, escolha outra opção!")
          state.lista = state.listaCompleta;
      } 

    },
    atualizarLista: state => { state.atualizarListaCompleta = !state.atualizarListaCompleta; }
  },


});

export const { salvarCardapio, filtrarCardapioPorCategoria, filtrarCardapioPorMaiorPreco, filtrarCardapioPorMenorPreco, 
  salvarPesquisa, filtrarCardapioPorPesquisa, atualizarLista } = cardapioSlice.actions;


// export const selectCount = (state) => state.counter.value;

export { SEM_CATEGORIA };

export default cardapioSlice.reducer;
