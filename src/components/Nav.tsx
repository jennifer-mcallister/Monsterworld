import { Link } from "react-router-dom"

export const Nav = () => {
    return(
        <>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/monsters"}>My Monsters</Link>
                </li>
                <li>
                    <Link to={"/create"}>Create Monster</Link>
                </li>
            </ul>
        </>
    )
}