import { useReducer } from "react";
import { ActionType, IAction, PlayerReducer } from "../reducers/PlayerReducer";
import carrot from "../assets/carrot.png";

const images = [carrot];

export const Inventory = () => {
    const [player, dispatch] = useReducer(PlayerReducer, (JSON.parse(localStorage.getItem("player") || "[]")));


    
    return (
        <>
            
            {player.inventory.map((item) => (
                <div key={item.id} className="item-container inventory" onClick={() => {
                    const action: IAction = {
                        type: ActionType.USE_PRODUCT,
                        payload: item,
                    };
                    dispatch(action)
                }}>
                    <div className="img-container">
                        <img src={images[0]}/>
                    </div>
                    <span>{item.item} X {item.quantity} </span>
                    <span>{item.price} G</span>
                    
                </div>
            ))}
        </>
    )
}