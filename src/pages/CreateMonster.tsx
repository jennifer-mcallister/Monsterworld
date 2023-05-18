import { ChangeEvent, FormEvent, useState } from "react";
import { Nav } from "../components/Nav";
import { Monster } from "../models/Monster";
import { Monsters } from "../components/Monsters";

interface IAppearance {
    body: string[],
    face: string[]
}

export const CreateMonster = () => {

    const [monsters, setMonsters] = useState<Monster[]>(JSON.parse(localStorage.getItem("monsters") || "[]"));
    const [currentMonster, setCurrentMonster] = useState<Monster>({
        id: new Date().getTime().toString(),
        monsterName: "",
        body: "hornsPurple",
        face: "kawaii",
        hungry: false,
        lastFed: new Date(),
    });

    const appearances: IAppearance = {
        body: ["fluffyGreen", "fluffyGrey", "fluffyRed", "hornsGrey", "hornsPurple", "hornsRed"],
        face: ["evil", "grumpy", "kawaii"]
    };

    const handleSubmit = (e: FormEvent) => {
        setMonsters([...monsters, currentMonster]);
        localStorage.setItem("monsters", JSON.stringify([...monsters, currentMonster]));
        setCurrentMonster({...currentMonster, monsterName:""})
        e.preventDefault();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        if(e.target.type === "text") {
            setCurrentMonster({...currentMonster, [name]: e.target.value})
        }
    }

    const handleClickBackward = () => {
        

    }

    const handleClickForward = () => {

    }

    return(
        <div>
            <Nav></Nav>
            <h1>Monster creater</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" type="text" value={currentMonster.monsterName} onChange={handleChange} name="monsterName" />
                <div className="appearance-options-container">
                    <button onClick={handleClickBackward}>Back</button>
                    <p>{currentMonster.body}</p>
                    <button onClick={handleClickForward}>Next</button>
                </div>
                <div className="appearance-options-container">
                    <button onClick={handleClickBackward}>Back</button>
                    <p>{currentMonster.face}</p>
                    <button onClick={handleClickForward}>Next</button>
                </div>
            </form>
            <Monsters monster={currentMonster}></Monsters>
        </div>
    )
}