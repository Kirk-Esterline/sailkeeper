import Navbar from "../ui/dashboard/navbar";

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