import { useReducer, useState } from "react";
import { Monsters } from "../components/Monsters"
import { Nav } from "../components/Nav"
import { useParams } from "react-router";
import { IPlayer } from "../models/IPlayer";
import { ActionType, IAction, MonstersReducer } from "../reducers/MonstersReducers";
import { Inventory } from "../components/Inventory";

export const MonsterView = () => {
    const params = useParams();
    const [player, setPlayer] = useState<IPlayer>(JSON.parse(localStorage.getItem("player") || "{}"));
    const [allMonsters, dispatch] = useReducer(MonstersReducer, (JSON.parse(localStorage.getItem("monsters") || "[]")));
    const currentMonster = allMonsters.find((m) => m.id === params.id);

    const generateCoins = () => {
        setPlayer({...player, coins: player.coins + 1});
        localStorage.setItem("player", JSON.stringify({...player, coins: player.coins + 1}));
    }

    if (currentMonster) {
        return(
            <>
                <Nav></Nav>
                <h1>{currentMonster.monsterName}</h1>
                <div onClick={generateCoins}>
                    <Monsters monster={currentMonster}></Monsters>
                </div>
                <button onClick={() => {
                    const action: IAction = {
                        type: ActionType.REMOVED,
                        payload: currentMonster.id,
                    };
                    dispatch(action)
                }}>Delete</button>  
                <Inventory></Inventory> 
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