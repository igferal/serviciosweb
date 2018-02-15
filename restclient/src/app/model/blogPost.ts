export class BlogPost {
  constructor(
    public title: string,
    public body: string,
    public creationDate: Date,
    public tags: String[],
    public creator: any,
    public id = null 
  ) {}
}
