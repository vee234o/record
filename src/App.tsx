import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import Login from './components/Login'
import Navbar, { type Page } from './components/Navbar'
import Record from './components/Record'
import Settings from './components/Settings'

const App = () => {
  const [page, setPage] = useState<Page>('record')
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const { mode, color } = useSelector((state: RootState) => state.settings)

  // Apply the chosen mode and color to the whole page
  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    document.documentElement.style.setProperty('--accent', color)
  }, [mode, color])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {isLoggedIn ? (
        <>
          <Navbar page={page} setPage={setPage} />
          {page === 'record' ? <Record /> : <Settings />}
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
