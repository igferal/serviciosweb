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
            //quitamos la ruta
            string title = fileRoute.Split('\\')[fileRoute.Split('\\').Length - 1];
            //Obtener extension del archivo
            switch(this.fileRoute.Split('.')[this.fileRoute.Split('.').Length-1]){

                case "txt":
                    this.reducer = new TextReducer();
                    blogPost.title = title.Replace(".txt", "");
                    blogPost.body = this.reducer.reduceContent(this.fileRoute);
                    break;
                case "pdf":
                    blogPost.title = title.Replace(".pdf", "");
                    this.reducer = new PDFReducer();
                    blogPost.body = this.reducer.reduceContent(this.fileRoute);
                    break;
                case "html":
                    blogPost.title = title.Replace(".html", "");
                    this.reducer = new HTMLParser();
                    blogPost.body = this.reducer.reduceContent(this.fileRoute);
                    break;

            }


            return blogPost;

        }





    }
}
