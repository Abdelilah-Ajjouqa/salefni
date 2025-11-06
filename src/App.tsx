import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/credit-types">Credit Types</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
