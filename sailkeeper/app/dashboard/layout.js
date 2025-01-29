import SideNav from "../ui/dashboard/sidenav";
import Navbar from "../ui/dashboard/navbar";

export default function Layout({ children }) {
    return(
        <div>
            <div className="w-full flex-none">
                <Navbar />
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-none md:w-64 h-screen">
                    <SideNav />
                </div>
                <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
                    {children}
                </div>
            </div>
        </div>
    );
}