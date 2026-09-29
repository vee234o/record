import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { COLORS, setColor, setMode } from '../redux/settings/settingsSlice'

const Settings = () => {
  const { mode, color } = useSelector((state: RootState) => state.settings)
  const dispatch = useDispatch()

  return (
    <div className="mx-auto max-w-2xl space-y-8 p-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Mode</h2>
        <div className="flex gap-2">
          {(['light', 'dark'] as const).map((m) => (
            <button
              key={m}
              onClick={() => dispatch(setMode(m))}
              className={`rounded-lg border px-5 py-2 capitalize ${
                mode === m
                  ? 'border-accent bg-accent text-white'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Color</h2>
        <div className="flex gap-3">
          {Object.entries(COLORS).map(([name, value]) => (
            <button
              key={name}
              title={name}
              aria-label={name}
              onClick={() => dispatch(setColor(value))}
              style={{ backgroundColor: value }}
              className={`h-10 w-10 rounded-full ${
                color === value ? 'ring-4 ring-gray-400 ring-offset-2 dark:ring-offset-gray-900' : ''
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Settings
