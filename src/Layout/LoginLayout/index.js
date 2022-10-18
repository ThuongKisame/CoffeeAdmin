import Logo from '../components/Logo';
function LoginLayout({ children }) {
    return (
        <div className="bg-lg-img bg-no-repeat bg-cover w-full h-screen flex justify-center items-center ">
            <div className="bg-white rounded-md shadow-lg shadow-black px-10 py-8 outline-dotted outline-2 outline-primary -outline-offset-8 w-96">
                <div className="text-2xl">
                    <Logo />
                </div>
                <hr className="my-6" />
                {children}
            </div>
        </div>
    );
}

export default LoginLayout;
