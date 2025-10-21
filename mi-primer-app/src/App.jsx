import { useState /*, useEffect */ } from 'react'
import Header from './components/Header.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')

  // Persistencia opcional (déjalo comentado si quieres que se vea más “principiante”):
  // useEffect(() => {
  //   const saved = localStorage.getItem('tema')
  //   if (saved) setTheme(saved)
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('tema', theme)
  // }, [theme])

  function toggleTheme() {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggle={toggleTheme} />

      <main className="main">
        <section className="card">
          <h2>Tema actual: {theme === 'light' ? 'Claro' : 'Oscuro'}</h2>
          <p>App simple de ejemplo con <code>useState</code> para cambiar el tema.</p>
          <p><strong>Autor:</strong> Daniel Salinas Góngora (Alumno 1er año)</p>
          <button className="btn" onClick={toggleTheme}>
            Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
          </button>
        </section>

        <section className="info">
          <h3>¿Qué demuestra?</h3>
          <ul>
            <li>Componentes: <code>App</code> y <code>Header</code>.</li>
            <li>Estado con <code>useState</code>.</li>
            <li>Interactividad con un botón.</li>
            <li>HTML semántico y CSS simple.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <small>IPG — Programación Front End (Unidad 2, Semana 4)</small>
      </footer>
    </div>
  )
}
