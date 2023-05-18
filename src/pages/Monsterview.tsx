import { useEffect, useState } from "react";
import { Monsters } from "../components/Monsters"
import { Nav } from "../components/Nav"
import { useParams } from "react-router";
import { Monster } from "../models/Monster";

export const MonsterView = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const params = useParams();
    const currentMonster = monsters.find((m) => m.id === params.id);
    
    useEffect(() => {
        setMonsters(JSON.parse(localStorage.getItem("monsters") || "[]"));
    }, []);

    if (currentMonster) {
        return(
            <>
                <Nav></Nav>
                <h1>Monster view</h1>
                <Monsters monster={currentMonster}></Monsters>
                
            </>
        )
    } else {
        return(
            <>
                <Nav></Nav>
                <p>Hmm.. the monster you are looking for is not here..</p>
            </>
        )
    }
    

}