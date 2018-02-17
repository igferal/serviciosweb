using System;
using ClientSoapCs.BlogPostService;
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


        public blogPost parse(){


            blogPost blogPost = new blogPost();
            blogPost.title = fileRoute.Substring(0, fileRoute.Length - 4).Replace("Input/","");
            //Obtener extension del archivo
            switch(this.fileRoute.Split('.')[this.fileRoute.Split('.').Length-1]){

                case "txt":
                    this.reducer = new TextReducer();
                    blogPost.body = this.reducer.reduceContent(this.fileRoute);
                    break;
                case "pdf":
                    this.reducer = new PDFReducer();
                    blogPost.body = this.reducer.reduceContent(this.fileRoute);
                    break;
                case "html":
                    this.reducer = new HTMLParser();
                    blogPost.body = this.reducer.reduceContent(this.fileRoute);
                    break;

            }


            return blogPost;

        }





    }
}
