import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

// typeof é do JS, retorna o tipo
export type RootReducer = ReturnType<typeof store.getState>
