import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Note = {
  id: number
  text: string
  date: string
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Note[],
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.unshift({
        id: Date.now(),
        text: action.payload,
        date: new Date().toLocaleString(),
      })
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload)
    },
  },
})

export const { addNote, deleteNote } = notesSlice.actions
export default notesSlice.reducer
