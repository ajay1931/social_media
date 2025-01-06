import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { postListContext } from '../Store/PostListStore';
import toast from 'react-hot-toast';

const SideBar = () => {
    let location = useLocation();
    const { userName, setIsLoggedIn, isLoggedIn } = useContext(postListContext)
    let navigate = useNavigate()

    const handleLogout = () => {
        setIsLoggedIn(false)
        navigate('/Login')
        toast.success('Logged out successfully')
    }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar" style={{ width: "240px" }}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"> <use href="#bootstrap" /></svg>
                <span className="fs-4">Social Media</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto ">
                <li
                    className="nav-item "
                >
                    <Link to={"/yourpost"} className={`nav-link text-white ${location.pathname === '/yourpost' ? 'active' : ''} `}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Your Post
                    </Link>
                </li>
                <li
                >
                    <Link to={"/CreatePost"} className={`nav-link text-white ${location.pathname === '/CreatePost' ? 'active' : ''}  `}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Create Post
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="data:image/png;base64,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" alt="" width="32" height="32" className="rounded-circle me-2" />
                    {isLoggedIn ? (
                        <strong>{userName}</strong>
                    ) : (
                        <strong>Login</strong>
                    )}
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a onClick={handleLogout} className="dropdown-item" href="#">Logout</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                </ul>
            </div>
        </div >
    )
}

export default SideBar
