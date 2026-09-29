import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { logoutUser } from '../redux/user/userSlice'

export type Page = 'record' | 'settings'

type Props = {
  page: Page
  setPage: (page: Page) => void
}

const Navbar = ({ page, setPage }: Props) => {
  const dispatch = useDispatch()
  const name = useSelector((state: RootState) => state.user.name)

  const tab = (id: Page, label: string) => (
    <button
      onClick={() => setPage(id)}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
        page === id
          ? 'bg-accent text-white'
          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  )

  return (
    <header className="flex flex-wrap items-center justify-between gap-2 bg-white px-6 py-3 shadow dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-accent">Record</h1>
      <nav className="flex items-center gap-2">
        {tab('record', 'Record')}
        {tab('settings', 'Settings')}
      </nav>
      <div className="flex items-center gap-3 text-sm">
        <span>Hi, {name}</span>
        <button
          onClick={() => dispatch(logoutUser())}
          className="rounded-lg border border-gray-300 px-3 py-1.5 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Navbar
