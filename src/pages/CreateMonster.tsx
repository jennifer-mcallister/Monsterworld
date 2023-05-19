import { ChangeEvent, FormEvent, useState } from "react";
import { Nav } from "../components/Nav";
import { Monster } from "../models/Monster";
import { Monsters } from "../components/Monsters";

interface IAppearance {
    body: string[],
    face: string[]
}

const appearances: IAppearance = {
    body: ["fluffyGreen", "fluffyGrey", "fluffyRed", "hornsGrey", "hornsPurple", "hornsRed"],
    face: ["evil", "grumpy", "kawaii"]
};

export const CreateMonster = () => {

    const [monsters, setMonsters] = useState<Monster[]>(JSON.parse(localStorage.getItem("monsters") || "[]"));
    const [currentMonster, setCurrentMonster] = useState<Monster>({
        id: new Date().getTime().toString(),
        monsterName: "",
        body: appearances.body[0],
        face: appearances.face[0],
        hungry: false,
        lastFed: new Date(),
    });



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

    const handlePreviousBody = () => {
        const currentBody = appearances.body.findIndex(body => body === currentMonster.body)
        if (currentBody > 0) {
            setCurrentMonster({...currentMonster, body: appearances.body[currentBody - 1]})
        }
    }

    const handleNextBody = () => {
        const currentBody = appearances.body.findIndex(body => body === currentMonster.body)
        if (currentBody < (appearances.body.length - 1)) {
            setCurrentMonster({...currentMonster, body: appearances.body[currentBody + 1]})
        }
    }

    const handlePreviousFace = () => {
        const currentFace = appearances.face.findIndex(face => face === currentMonster.face)
        if (currentFace > 0) {
            setCurrentMonster({...currentMonster, face: appearances.face[currentFace - 1]})
        }
    }

    const handleNextFace = () => {
        const currentFace = appearances.face.findIndex(face => face === currentMonster.face)
        if (currentFace < (appearances.face.length - 1)) {
            setCurrentMonster({...currentMonster, face: appearances.face[currentFace + 1]})
        }
    }

    return(
        <div>
            <Nav></Nav>
            <h1>Monster creater</h1>
            <Monsters monster={currentMonster}></Monsters>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" type="text" value={currentMonster.monsterName} onChange={handleChange} name="monsterName" />
            </form>
            <div className="appearance-options-container">
                    <button onClick={handlePreviousBody}>Back</button>
                    <p>{currentMonster.body}</p>
                    <button onClick={handleNextBody}>Next</button>
                </div>
                <div className="appearance-options-container">
                    <button onClick={handlePreviousFace}>Back</button>
                    <p>{currentMonster.face}</p>
                    <button onClick={handleNextFace}>Next</button>
                </div> 
        </div>
    )
}