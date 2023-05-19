import { IInventoryItem } from "./IInventoryItem";

export interface IPlayer {
    coins: number,
    inventory: IInventoryItem[],
}