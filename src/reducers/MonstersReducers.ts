import { Monster } from "../models/Monster";

export interface IAction {
    type: ActionType;
    payload: any;
}

export enum ActionType {
    FED,
    REMOVED,
    LEVELED_UP
}

export const MonstersReducer = (monsters: Monster[], action: IAction) => {
    switch (action.type) {

        case ActionType.REMOVED: {
            const updatedMonsters = monsters.filter((monster) => monster.id !== action.payload);
            localStorage.setItem("monsters", JSON.stringify(updatedMonsters));
            return updatedMonsters;
        }
        
        case ActionType.FED: {
            const updatedMonsters = monsters.filter((monster) => monster.id !== action.payload);
            
            localStorage.setItem("monsters", JSON.stringify(updatedMonsters));
        }
    }
    return monsters
}