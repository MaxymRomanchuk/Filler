import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
                    <a className="navbar-brand" href="/#">S-Need software</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={() => {localStorage.setItem('active', '0')}}>
                                    Головна
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts" onClick={() => {localStorage.setItem('active', '1')}}>
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;