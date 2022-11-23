import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;