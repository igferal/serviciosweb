using System;
using soapClient.Model;
using soapClient.parser.reducer;

namespace soapClient.parser
{
    public class BlogPostParser
    {

        public string User { set; get; }

        public string fileRoute;

        public IReducer reducer;

        public BlogPostParser()
        {

        }


        public BlogPost parse(){


            BlogPost blogPost = new BlogPost();
            blogPost.title = fileRoute.Substring(0, fileRoute.Length - 4).Replace("Input/","");
            //Obtener extension del archivo
            switch(this.fileRoute.Split(".")[this.fileRoute.Split(".").Length-1]){

                case "txt":
                    this.reducer = new TextReducer();
                    blogPost.content = this.reducer.reduceContent(this.fileRoute);
                    break;
                case "pdf":
                    this.reducer = new PDFReducer();
                    blogPost.content = this.reducer.reduceContent(this.fileRoute);
                    break;
                case "docx":
                    this.reducer = new DocxReducer();
                    blogPost.content = this.reducer.reduceContent(this.fileRoute);
                    break;

            }


            return blogPost;

        }





    }
}
