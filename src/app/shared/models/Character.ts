export class Character {
    public id: string = '';
    public name: string = '';
    public status: string = '';
    public location: Location = {name:''};
    public image: string = '';
    public episode: string[] = [];
}

interface Location {
    name: string;
}
  