import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
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
                    <NavLink to='/location' className={''}>
                        Location
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
