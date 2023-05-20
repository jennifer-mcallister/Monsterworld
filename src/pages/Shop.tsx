import { Nav } from "../components/Nav";
import carrot from "../assets/carrot.png";
import { useReducer } from "react";
import { ActionType, IAction, PlayerReducer } from "../reducers/PlayerReducer";

interface IShopGoods {
    id: number,
    type: string,
    price: number,
    img: string,
}

const shopItems: IShopGoods[] = [
    {id: 0, type: "carrot", price: 10, img: carrot}
];

export const Shop = () => {
    const [player, dispatch] = useReducer(PlayerReducer, (JSON.parse(localStorage.getItem("player") || "[]")));

    return (
        <>
            <Nav></Nav>
            <h1>Shop</h1>
            {shopItems.map((item) => (
                <div key={item.id} className="shopgood-container item-container" onClick={() => {
                    const action: IAction = {
                        type: ActionType.BUY_PRODUCT,
                        payload: item,
                    };
                    dispatch(action)
                }}>
                    <div className="img-container">
                        <img src={item.img}/>
                    </div>
                    <span>{item.type} </span>
                    <span>{item.price} G</span>
                </div>
            ))}
        </>
    )
}