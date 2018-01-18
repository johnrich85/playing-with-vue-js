export default class Block {
    public id: number;
    public title: string;
    public description: string;
    public type: BlockTypes;
    public icon: string;
    public data: Object;
}

export enum BlockTypes {
    StaticText,
    RemoteText,
    RemoteStats,
    RemoteList
}
