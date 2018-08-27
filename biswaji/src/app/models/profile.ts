export class Profile{
    detail:String;
    name:String;
    gitLink:String;
    linkedInLink:String;
    img:String;

    constructor(name: String,detail: String,gitLink: String,linkedInLink: String,img: String){
        this.name = name,
        this.detail = detail,
        this.gitLink = gitLink,
        this.linkedInLink = linkedInLink,
        this.img = img
    }
}