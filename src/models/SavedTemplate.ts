import Block from './Block';

export default class SavedTemplate {
    public id: number;
    public title: string;
    public description: string;
    public blocks: Array<Block>;

    constructor() {
        this.blocks = Array<Block>();
    }
}


