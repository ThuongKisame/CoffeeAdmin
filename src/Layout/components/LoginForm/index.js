import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../Input.jsx/index.js';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(email);
        console.log(password);
        navigate('/');
    };

    // document.addEventListener('keyup', (e) => {
    //     if (e.keyCode === 13) {
    //         handleSubmit();
    //     }
    // });

    return (
        <form className="text-slate-500 flex flex-col items-center pb-10" onSubmit={handleSubmit}>
            <div className="flex flex-col py-3 w-full">
                <label htmlFor="Email">Email</label>
                <Input value={email} setValue={setEmail} type="email" />
            </div>
            <div className="flex flex-col py-3 w-full">
                <label htmlFor="Email">Mật khẩu</label>
                <Input value={password} setValue={setPassword} type="password" />
            </div>
            <button
                className="bg-zinc-200 border border-primary text-primary px-5  py-2 mt-7 mb-3 rounded hover:opacity-70"
                onClick={handleSubmit}
            >
                Đăng nhập
            </button>

            <Link to="/forgetpassword" className="hover:opacity-70 ml-2 text-zinc-900 my-3">
                Quên mật khẩu !
            </Link>

            <Outlet />
        </form>
    );
}

export default LoginForm;
