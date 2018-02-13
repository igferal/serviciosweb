export class BlogPost {
  constructor(
    public title: string,
    public body: string,
    public date: Date,
    public tags: String[],
    public creator: any = { id: 2, name: "Nacho", email: "nacho@gmail.com" },
    public id = null 
  ) {}
}
