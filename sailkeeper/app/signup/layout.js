import Navbar from "../ui/dashboard/navbar";
import "../globals.css";

export default function layout({ children }) {
    return (
        <>
            <div className="w-full flex-none">
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}