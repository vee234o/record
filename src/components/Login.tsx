import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.trim() && email.trim()) {
      dispatch(setUser({ name: name.trim(), email: email.trim() }))
    }
  }

  const input =
    'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white'

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
      >
        <h1 className="text-center text-3xl font-bold text-accent">Record</h1>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Log in to write down what you learnt.
        </p>

        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            className={input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-accent py-2 font-semibold text-white hover:opacity-90"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
