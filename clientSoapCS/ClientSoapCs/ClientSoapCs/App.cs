using System;
using System.Collections.Generic;
using System.IO;
using ClientSoapCs.BlogPostService;
using soapClient.client;
using soapClient.parser;

namespace soapClient
{
    public class App

    {
        public List<string> files { set; get; }

        public List<blogPost> blogposts { set; get; }

        public Client client;



        public App()
        {
            this.files = new List<string>(Directory.GetFiles("Input"));
            this.blogposts = new List<blogPost>();
            this.client = new Client();
        }

        public void runApp(){


            this.files.ForEach(file=>{
                var parser = new BlogPostParser();
                parser.fileRoute = file;
                blogposts.Add(parser.parse());

            });

            client.send(this.blogposts,"nacho@gmail.com");
        }
    }
}
