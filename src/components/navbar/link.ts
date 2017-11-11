export class Link {
    id: string;
    name: string;
    path: string;
    icon: string;

    constructor(id: string, name: string, path: string, icon: string) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.icon = icon;
    }
}
