import React, { useContext, useState } from 'react'
import Login from './Login'
import { Link, useLocation } from 'react-router-dom'
import { postListContext } from '../Store/PostListStore'

const Header = () => {
    let location = useLocation()
    const { userName, isLoggedIn } = useContext(postListContext)

    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to={'/'} className={`nav-link px-2 text-secondary ${location.pathname === '/' ? 'active and text-white' : ''} `}>Home</Link></li>
                            <li><a href="#" className="nav-link px-2 text-secondary">Profile</a></li>
                            <li><a href="#" className="nav-link px-2 text-secondary">Settings</a></li>
                            <li><a href="#" className="nav-link px-2 text-secondary">About</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                            {isLoggedIn ? (
                                <h3>{userName}</h3>
                            ) : (
                                <h3>Login</h3>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
