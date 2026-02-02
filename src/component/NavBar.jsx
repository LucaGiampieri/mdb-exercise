
function NavBar() {

    return (
        <nav className="navbar">
            <h1 className="nav-title">The Movie Database</h1>
            <input
                className="nav-input"
                type="text"
                name="title"
                id="title"
                placeholder="Cosa stai cercando?" />

        </nav>
    )
}

export default NavBar
