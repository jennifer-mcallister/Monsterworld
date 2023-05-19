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
                const updatedPlayer = { ...player, inventory: action.payload.id, coins: player.coins - action.payload.price}
                localStorage.setItem("player", JSON.stringify(updatedPlayer));
                return updatedPlayer;
            }
            return player;

        }
    }
    return player;
}