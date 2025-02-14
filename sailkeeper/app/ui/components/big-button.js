import Link from "next/link";

export default function BigButton({ onClick, buttonText="Testing", href="/"}) {
    return (
        <Link onClick={onClick}
            href={href} 
            className="text-2xl text-white font-extrabold bg-sky-500 rounded-lg drop-shadow-lg px-9 py-4 border border-gray-600 hover:bg-sky-400">
            {buttonText}
        </Link>
        )
}