//Navigation bar component
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Let's learn Japanese!</h1>
            <div className="links">
                <a href="/learn">Learn</a>
                <a href="/practice">Practice</a>
            </div>
        </nav>
    );
}

export default Navbar;