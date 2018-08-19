import { Detail } from "./Detail";

export class Blog{
    id:number;
    heading:String;
    detail:Detail[];

    constructor(id,heading,detail){
        this.id = id;
        this.heading = heading;
        this.detail = detail;
    }
}