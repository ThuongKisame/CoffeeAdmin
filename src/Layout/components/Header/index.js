import Logo from '../Logo';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
    const userName = 'user name';
    return (
        <header className="h-14 w-full bg-header">
            <div className="flex items-center justify-between h-full">
                <div className="ml-8 text-xl">
                    <Logo />
                </div>
                <div className="mr-8 text-2xl flex items-center justify-center">
                    <p className="mr-2 text-lg">{userName}</p>
                    <FaUserCircle />
                </div>
            </div>
        </header>
    );
}

export default Header;
