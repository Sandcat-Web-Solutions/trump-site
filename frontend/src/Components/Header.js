import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();   

    return (
        <div className="Header">
            <a href="/" className={location.pathname === '/' ? 'ActiveHeaderLink' : 'HeaderLink'}>Home</a>
            <a href="/timeline" className={location.pathname === '/timeline' ? 'ActiveHeaderLink' : 'HeaderLink'}>Timeline</a>
            <a href="/login" className={location.pathname === '/login' || location.pathname === '/register' ? 'ActiveHeaderLink' : 'HeaderLink'}>Login</a>
        </div>
    );
}; export default Header;