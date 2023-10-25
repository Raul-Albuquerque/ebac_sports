import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoFavoritado = action.payload

      if (state.itens.find((p) => p.id === produtoFavoritado.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produtoFavoritado.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produtoFavoritado)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
