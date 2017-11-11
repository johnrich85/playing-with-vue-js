export default class Block {
    public id: number;
    public title: string;
    public type: BlockTypes;
    public icon: string;
}

export enum BlockTypes {
    StaticText,
    RemoteText,
    RemoteStats,
    RemoteList
}
