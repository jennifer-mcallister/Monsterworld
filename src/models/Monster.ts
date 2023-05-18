export class Monster {
    constructor(
        public id: string,
        public monsterName: string,
        public face: string,
        public body: string,
        public hungry: boolean,
        public lastFed: Date,
    ) {}
}