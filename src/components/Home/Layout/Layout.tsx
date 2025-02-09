import { Fragment } from "react/jsx-runtime"
import NavBar from "./NavBar"

export const Layout = ({children}: {children: React.ReactNode}) => {

    return (
        <Fragment>
            <NavBar/>
            {children}
        </Fragment>
    )
}