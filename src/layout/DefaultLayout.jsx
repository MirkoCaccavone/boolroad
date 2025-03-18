import { Outlet } from "react-router-dom";

import Header from "../components/header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="container-main">
                <Outlet />
            </main>
        </>
    )
}