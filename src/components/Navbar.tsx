import { Link, NavLink } from "react-router-dom"
const RNMLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"

const Navbar = () => {
    return (
        <>
        <nav className="w-full bg-slate-900 py-3">
            <div className="container flex justify-between text-white">
                <Link to={'/'} className="">
                    Rick & Morty <span className="text-blue-500">Wiki</span>
                </Link>
                <div className="flex gap-4 justify-end">
                    <NavLink to='/' className={''}>
                        Charcters
                    </NavLink>
                    <NavLink to='/episodes' className={''}>
                        Episodes
                    </NavLink>
                </div>
            </div>
        </nav>
        
        <img src={RNMLogo} alt="rick and morty" className='mx-auto  w-60 md:w-80 my-4'/>
        
        </>
    )
}

export default Navbar
