import React, { useContext, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import toast from 'react-hot-toast';
import { postListContext } from '../Store/PostListStore';

const Login = ({ LoginPage, setLoginPage }) => {
    const { setUserID, setIsLoggedIn } = useContext(postListContext)
    const [UserLogin, setUserLogin] = useState("");
    const [Password, setPassword] = useState("");

    if (!LoginPage) return null;

    const handleLogin = (e) => {
        e.preventDefault();

        if ((UserLogin === 'user-1' || UserLogin === 'user-2') && Password === '1234') {
            setLoginPage(false)
            setIsLoggedIn(true)
            setUserID(UserLogin)
            toast.success('Loged in sucessfully')
        } else {
            toast.error('Invalid ID or Password')
        }
    }


    return (
        <div className='Loginform-overlay'>
            <div className='Loginform-container'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address or User ID</label>
                        <input
                            type="text"
                            value={UserLogin}
                            onChange={(e) => setUserLogin(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                    </div>
                    <button onClick={handleLogin} type='submit' className="btn btn-primary">Login</button>
                    <div className='Loginform-delete' onClick={() => setLoginPage(false)}>
                        <CiCircleRemove />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login
