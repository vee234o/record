# Record

A small app to write down what you learn each day.

## What it does

- **Login** with your name and email.
- **Record** page: type what you learnt, save it, and see all your records. You can delete any of them.
- **Settings** page: switch between **light** and **dark** mode, and pick your favourite color.
- Everything is saved in your browser, so it is still there after a refresh.

## Built with

- React + TypeScript
- Redux Toolkit (keeps the user, records and settings)
- Tailwind CSS
- Vite

## How to run it

```bash
npm install
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

## Project layout

```
src/
  components/
    Login.tsx      login page
    Navbar.tsx     title "Record", page tabs, logout
    Record.tsx     write and list what you learnt
    Settings.tsx   dark/light mode and color
  redux/
    store.ts               puts everything together and saves to the browser
    user/userSlice.tsx     who is logged in
    notes/notesSlice.ts    the list of records
    settings/settingsSlice.ts   mode and color
```
