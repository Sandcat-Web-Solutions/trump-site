import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Header(){
    const location = useLocation();
    const [ isScrolled, setIsScrolled] = useState(false);

    

    return(
        <div className="Header">
            <a href="/" className={location.pathname === '/' ? 'ActiveHeaderLink' : 'HeaderLink'}>Home</a>
            <a href="/timeline" className={location.pathname === '/timeline' ? 'ActiveHeaderLink' : 'HeaderLink'}>Timeline</a>
            <a href="/login" className={location.pathname === '/login' ? 'ActiveHeaderLink' : 'HeaderLink'}>Login</a>
        </div>
    );
}; export default Header;