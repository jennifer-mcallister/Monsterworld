import { Link } from "react-router-dom"
import { IPlayer } from "../models/IPlayer";

export const Nav = () => {
    const player: IPlayer= JSON.parse(localStorage.getItem("player") || "{}");

    return(
        <>
            <span>Monstercoins {player.coins} G</span>
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
                <li>
                    <Link to={"/shop"}>Shop</Link>
                </li>
            </ul>
        </>
    )
}