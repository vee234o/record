import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { addNote, deleteNote } from '../redux/notes/notesSlice'

const Record = () => {
  const [text, setText] = useState('')
  const notes = useSelector((state: RootState) => state.notes)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addNote(text.trim()))
    setText('')
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <label htmlFor="learnt" className="block text-lg font-semibold">
          What did you learn today?
        </label>
        <textarea
          id="learnt"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="I learnt that..."
          className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none focus:border-accent dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-5 py-2 font-semibold text-white hover:opacity-90"
        >
          Save
        </button>
      </form>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Your records ({notes.length})</h2>
        {notes.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">Nothing yet. Write your first one above.</p>
        )}
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex items-start justify-between gap-4 rounded-lg border-l-4 border-accent bg-white p-4 shadow-sm dark:bg-gray-800"
          >
            <div>
              <p className="whitespace-pre-wrap">{note.text}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{note.date}</p>
            </div>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Record
