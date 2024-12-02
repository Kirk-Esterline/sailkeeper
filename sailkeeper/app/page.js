import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="size-full bg-navBackground text-center" id="nav">
                <ul className="py-2">
                    <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="/login">Login</a></li>
                    <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="/signup">Signup</a></li>
                    <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="#portfolio">Portfolio</a></li>
                    <li className="inline-block"><a className="block text-white font-semibold leading-10 h-10 px-6" href="#contact">Contact</a></li>
                </ul>
            </nav>

    <article id="top" className="wrapper style1">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-5-large col-12-medium">
                            <span className="image fit"><img src="images/pic00.jpg" alt="" /></span>
                        </div>
                        <div className="col-8 col-7-large col-12-medium">
                            <header>
                                <h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
                            </header>
                            <p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
                            <a href="#work" className="button large scrolly">Learn about what I do</a>
                        </div>
                    </div>
                </div>
            </article>
    </>
  );
}
