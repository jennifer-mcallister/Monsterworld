import { Monster } from "../models/Monster";
import fluffyGreen from "../assets/body-fluffy-green.png";
import fluffyGrey from "../assets/body-fluffy-grey.png";
import fluffyRed from "../assets/body-fluffy-red.png";
import hornsGrey from "../assets/body-horns-grey.png";
import hornsPurple from "../assets/body-horns-purple.png";
import hornsRed from "../assets/body-horns-red.png";
import evil from "../assets/face-evil.png";
import grumpy from "../assets/face-grumpy.png";
import kawaii from "../assets/face-kawaii.png";

interface IImg {
    img: string,
    type: string,
}

interface IImages {
    bodys: IImg[],
    faces: IImg[],
}

interface IMonster {
    monster: Monster
}

const images: IImages = {
    bodys: [
        {img: fluffyGreen, type: "fluffyGreen"},
        {img: fluffyGrey, type: "fluffyGrey"},
        {img: fluffyRed, type: "fluffyRed"},
        {img: hornsGrey, type: "hornsGrey"},
        {img: hornsPurple, type: "hornsPurple"},
        {img: hornsRed, type: "hornsRed"}
    ],
    faces: [
        {img: evil, type: "evil"},
        {img: grumpy, type: "grumpy"},
        {img: kawaii, type: "kawaii"}
    ]
}

export const Monsters = ({monster}: IMonster ) => {

    const body = images.bodys.find((body) => body.type === monster.body);
    const face = images.faces.find((face) => face.type === monster.face);
    return(
        <div className="monster-container">
            <p>{monster.monsterName}</p>
            <div className="img-container">
                <img className="monster-body" src={body?.img}/>
                <img className="monster-face" src={face?.img}/>
            </div>
        </div>
    )
}