export class Monster {
    constructor(
        public name: string,
        public face: string,
        public body: string,
        public hungry: boolean,
        public lastFed: Date,
    ) {}
}