"use client"
import { useEffect } from 'react'

export default function NavBar()
{
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap')
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Leona</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Portfolio</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}