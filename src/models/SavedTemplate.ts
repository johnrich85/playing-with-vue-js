import Block from './Block';

export default class SavedTemplate {
    public id: number;
    public title: string;
    public description: string;
    public rows: Array<Array<Block>>;
    public layout: String;

    constructor() {
        this.rows = Array<Array<Block>>();
    }

    addRow() {
        return this.rows.push(Array<Block>());
    }

    addRows(numrows: number) {
        let a = 0;

        for (a; a < numrows; a++) {
            this.addRow();
        }
    }

    addBlock(row: number, block: Block) {
        if (typeof this.rows[row] === 'undefined') {
            console.log('Out of bounds: Row ' + row + ' does not exist');
        }

        this.rows[row].push(block);
    }


    addBlocks(row: number, blocks: Array<Block>) {
        blocks.forEach(b => this.addBlock(row, b));
    }

    getBlocks() {
        let blocks = Array<Block>();

        this.rows.forEach(r => {
            r.forEach(b =>  blocks.push(b));
        });

        return blocks;
    }
}


