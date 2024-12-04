import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Nav */}
    <nav className="size-full bg-navBackground text-center" id="nav">
        <ul className="py-2">
            <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="/login">Login</a></li>
            <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="/signup">Signup</a></li>
            <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="#contact">Contact</a></li>
        </ul>
    </nav>

    {/* Home */}
    <article id="top" className="shadow-inner shadow-md py-32 text-left bg-white">
        <div className="my-0 mx-auto w-[50%] max-w-[90%] pl-[16%]">
            <div className="flex-wrap box-border items-stretch">
                <div className="grid-cols-1">
                    <header>
                        <h1 className="text-5xl ">Hi, I'm <strong className="font-extrabold">Sail Keeper</strong>.</h1>
                    </header>
                    <p className="text-gray-600 pb-16 text-xl">Simplifying busy boatyards by improving tracking of valuable customer assets such as sails, spars, and other non-attached equipment.</p>
                    <a href="/dashboard" 
                    className="text-2xl text-white font-extrabold bg-sky-500 rounded-lg drop-shadow-lg px-9 py-4 border border-gray-600 hover:bg-sky-400">
                        See How It Works
                        </a>
                </div>
            </div>
        </div>
    </article>

    {/* What it does */}
    <article className="shadow-inner shadow-md py-32 text-center">
        <div className="my-0 mx-auto w-[50%]">
            <header>
                <h2 className="text-4xl">Here is how I work</h2>
                <p className="text-left">When a boat is picked up or dropped off a member of your team inventories the boat with our app. When completed the customer and main office is notified of what items are being stored with the boat. Some of these like sails, spars, and cushions may be removed from the boat and stored in a different location. Sail Keeper then provides a convenient way to track those items and the boat itself as it progresses through your shops work flow.</p>
            </header>
        </div>
    </article>
    </>
  );
}
