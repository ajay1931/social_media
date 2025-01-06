import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { postListContext } from '../Store/PostListStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setuserName, setIsLoggedIn } = useContext(postListContext);
    const [UserName, setUserName] = useState(''); 
    const [UserLogin, setUserLogin] = useState('');
    const [Password, setPassword] = useState('');
    const [loginType, setLoginType] = useState(false); 
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = savedUsers.find(
            (user) => user.email === UserLogin.trim() && user.password === Password.trim()
        );

        if (userExists) {
            setIsLoggedIn(true);
            setuserName(userExists.name); 
            localStorage.setItem('loggedInUser', UserLogin);
            navigate('/yourpost');
            toast.success('Logged in successfully');
        } else {
            toast.error('Invalid ID or Password');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = savedUsers.some((user) => user.email === UserLogin.trim());

        if (userExists) {
            toast.error('User already exists. Please log in.');
        } else {
            savedUsers.push({
                name: UserName.trim(),
                email: UserLogin.trim(),
                password: Password.trim(),
            });
            localStorage.setItem('users', JSON.stringify(savedUsers));
            toast.success('Account created successfully. Please log in.');
            setLoginType(true); 
            setUserName('');
            setUserLogin('');
            setPassword('');
        }
    };

    return (
        <div className='Loginform-overlay'>
            <div className='Loginform-container'>
                <form>
                    <div className="mb-3">
                        <h3>{loginType ? 'Login' : 'Sign Up'}</h3>

                        {!loginType && (
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input
                                    type="text"
                                    value={UserName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="form-control"
                                    id="nameInput"
                                    required
                                />
                            </div>
                        )}

                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">
                                {loginType ? 'Email or User ID' : 'Email'}
                            </label>
                            <input
                                type="text"
                                value={UserLogin}
                                onChange={(e) => setUserLogin(e.target.value)}
                                className="form-control"
                                id="emailInput"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                                {loginType ? 'Password' : 'Create Password'}
                            </label>
                            <input
                                type="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                id="passwordInput"
                                required
                            />
                        </div>

                        <button
                            onClick={loginType ? handleLogin : handleSignUp}
                            type='submit'
                            className="btn btn-primary"
                        >
                            {loginType ? 'Login' : 'Sign Up'}
                        </button>

                        {loginType ? (
                            <p className='Loginform-text' onClick={() => setLoginType(false)}>
                                Create an account
                            </p>
                        ) : (
                            <p className='Loginform-text' onClick={() => setLoginType(true)}>
                                Already have an account
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
