export default function Navbar({ currentPage }) {
  const navigate = (page) => {
    window.location.hash = page === 'home' ? '#/' : `#/${page}`
  }

  return (
    <header className="navbar">
      <button className="brand" type="button" onClick={() => navigate('home')}>
        ClearDay
      </button>
      <nav aria-label="Main navigation">
        <button
          type="button"
          className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => navigate('home')}
        >
          Home
        </button>
        <button
          type="button"
          className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
          onClick={() => navigate('about')}
        >
          About
        </button>
      </nav>
    </header>
  )
}
