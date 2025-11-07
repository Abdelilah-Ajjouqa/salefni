import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutInterface {
    children: ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;