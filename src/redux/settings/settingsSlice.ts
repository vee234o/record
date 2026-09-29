import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Mode = 'light' | 'dark'

// The accent colors you can pick from in Settings
export const COLORS = {
  Blue: '#3b82f6',
  Green: '#22c55e',
  Purple: '#a855f7',
  Orange: '#f97316',
  Pink: '#ec4899',
} as const

type SettingsState = {
  mode: Mode
  color: string
}

const initialState: SettingsState = {
  mode: 'light',
  color: COLORS.Blue,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    },
  },
})

export const { setMode, setColor } = settingsSlice.actions
export default settingsSlice.reducer
