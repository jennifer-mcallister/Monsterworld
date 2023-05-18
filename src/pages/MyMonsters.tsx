import { useEffect, useState } from "react";
import { Nav } from "../components/Nav"
import { Monster } from "../models/Monster";
import { Link } from "react-router-dom";
import { Monsters } from "../components/Monsters";

export const MyMonsters = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    
    useEffect(() => {
        setMonsters(JSON.parse(localStorage.getItem("monsters") || "[]"));
    }, []);
    
    return(
        <>
            <Nav></Nav>
            <h1>My Monsters</h1>
            {monsters.map(m => (
                <Link key={m.id} to={m.id}>
                    <Monsters monster={m}></Monsters>
                </Link>
            ))}
        </>
    )
}