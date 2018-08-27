
export class Detail{
    subheading:String;
    content:String;
    img:String; 
    linkheading:String;   
    link:String;

    constructor(subheading,content,img,link,linkheading){
        this.subheading = subheading;
        this.content = content;
        this.img = img;
        this.link = link;
        this.linkheading = linkheading;
    }
}