import { IPlayer } from "../models/IPlayer";


export interface IAction {
    type: ActionType;
    payload: any;
}

export enum ActionType {
    BUY_PRODUCT,
    USE_PRODUCT,
}

export const PlayerReducer = (player: IPlayer, action: IAction) => {
    switch(action.type) {
        case ActionType.BUY_PRODUCT: {

            if (player.coins >= action.payload.price) {
                let productInInventory = false;
                let updatedInventory = player.inventory.map((item) => {
                    if (item.id === action.payload.id) {
                        productInInventory = true;
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                })
                if(!productInInventory) {
                    updatedInventory = [...updatedInventory, {
                        id: action.payload.id, 
                        img: action.payload.img,
                        item: action.payload.type,
                        price: action.payload.price,
                        quantity: 1}
                    ];
                }
                console.log(updatedInventory)
                const updatedPlayer = { ...player, inventory: updatedInventory, coins: player.coins - action.payload.price}
                localStorage.setItem("player", JSON.stringify(updatedPlayer));
                return updatedPlayer;
            }
            return player;
        }
    }
    return player;
}