import Link from "next/link";

const Nav = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
            <div className="container-fluid">
                <Link href='/'>Dream</Link>
            </div>
        </nav>
    )
}

export default Nav;