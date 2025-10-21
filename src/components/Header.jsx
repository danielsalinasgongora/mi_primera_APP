export default function Header({ theme, onToggle }) {
  return (
    <header className="header">
      <h1>Mi Primera App React</h1>
      <button className="btn" onClick={onToggle}>
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </header>
  )
}
