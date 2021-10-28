import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <header className={"header"}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Форма</Link>
                    </li>
                    <li>
                        <Link to="/preview">Превью</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;