import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../Input.jsx';

function ForgetPasswordForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log(email);
    };
    return (
        <form className="text-slate-500 flex flex-col items-center pb-10" onSubmit={handleSubmit}>
            <div className="flex flex-col py-3 w-full">
                <label htmlFor="Email">Email</label>
                <Input value={email} setValue={setEmail} type="email" />
            </div>

            <button
                className="bg-zinc-200 border border-primary text-primary px-5  py-2 mt-7 mb-3 rounded hover:opacity-70"
                onClick={handleSubmit}
            >
                Gửi mã xác nhận
            </button>

            <Link to="/login" className="hover:opacity-70 ml-2 text-zinc-900 my-3">
                Đăng nhập
            </Link>

            <Outlet />
        </form>
    );
}

export default ForgetPasswordForm;
