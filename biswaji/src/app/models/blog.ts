import { Detail } from "./Detail";

export class Blog{
    id:number;
    date:String;
    heading:String;
    detail:Detail[];

    constructor(id,heading,detail){
        this.id = id;
        this.heading = heading;
        this.detail = detail;
    }
}