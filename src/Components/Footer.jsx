import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Help
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            API
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Privacy
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            terms
                        </a>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2021 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer
