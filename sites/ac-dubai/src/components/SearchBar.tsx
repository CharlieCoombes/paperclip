import { Icon } from './Icon';

export function SearchBar({ compact }: { compact?: boolean }) {
  return (
    <form
      action="/companies"
      method="GET"
      className={
        compact
          ? 'flex items-center gap-2 rounded-xl bg-white p-1.5 shadow-card ring-1 ring-ink-100'
          : 'flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-soft ring-1 ring-ink-100 sm:flex-row sm:items-center'
      }
    >
      <div className="flex flex-1 items-center gap-2 rounded-lg px-3 py-2">
        <Icon name="search" className="h-4 w-4 text-ink-400" />
        <input
          type="text"
          name="q"
          placeholder="What do you need fixed? e.g. AC not cooling, gas refill…"
          className="w-full bg-transparent text-sm text-ink-800 outline-none placeholder:text-ink-400"
          autoComplete="off"
        />
      </div>
      <div className="hidden h-6 w-px bg-ink-100 sm:block" />
      <div className="flex items-center gap-2 rounded-lg px-3 py-2 sm:flex-1">
        <Icon name="pin" className="h-4 w-4 text-ink-400" />
        <input
          type="text"
          name="area"
          placeholder="Area (e.g. Marina, JLT, Downtown)"
          className="w-full bg-transparent text-sm text-ink-800 outline-none placeholder:text-ink-400"
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn-primary justify-center sm:w-auto">
        Search
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>
    </form>
  );
}
