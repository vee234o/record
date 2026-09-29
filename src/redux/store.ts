import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import notesReducer from './notes/notesSlice'
import settingsReducer from './settings/settingsSlice'

const KEY = 'record-app'

// Load saved data from the browser (if any) so a refresh doesn't erase everything
function loadState() {
  try {
    const saved = localStorage.getItem(KEY)
    return saved ? JSON.parse(saved) : undefined
  } catch {
    return undefined
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer,
  settings: settingsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState() as Partial<ReturnType<typeof rootReducer>> | undefined,
})

// Save to the browser every time something changes
store.subscribe(() => {
  try {
    localStorage.setItem(KEY, JSON.stringify(store.getState()))
  } catch {
    // ignore storage errors
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
