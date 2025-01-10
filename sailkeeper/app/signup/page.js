export default function Home() {
    return (
        <>
        <div className="md:w-2/5 bg-slate-500 mx-10 my-10 px-10 py-10">
            <h2 className="text-navBackground">Sign Up a New Organization</h2>
            <form action="/" method="">
                <input id="BizName" type="text" placeholder="Business Name" className="block py-3 my-1"></input>
                <input id="email" type="email" placeholder="Email" className="block py-3 my-1"></input>
                <input id="admin" type="string" placeholder="Admin Name" className="block py-3 my-1"></input> 
                <input id="joinID" type="string" placeholder="Unique Business Name" className="block py-3 my-1"></input>
            <button type="submit" className="bg-sky-100 rounded-lg text-slate-950 w-40">Create</button>
            </form>
            
        </div>
        <div className="md:w-2/5 bg-slate-500 h-64 mx-10 my- 10 px-10 py-10">

        </div>
        </>

    )
}