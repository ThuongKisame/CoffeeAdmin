import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
function ManagementLayout({ children }) {
    return (
        <>
            <Header />
            <div className="flex ">
                <Sidebar />
                <div className="w-1/8 bg-black"></div>
            </div>
        </>
    );
}

export default ManagementLayout;
