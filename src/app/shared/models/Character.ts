export class Character {
    public id: string = '';
    public name: string = '';
    public status: string = '';
    public location: Location = {name:''};
    public image: string = '';
    public episode: string[] = [];
    public gender ?: string = '';
    public species?: string = '';
    public origin?: Origin = {name:''};
}

interface Location {
    name: string;
}
  
interface Origin {
    name?: string;
}
  