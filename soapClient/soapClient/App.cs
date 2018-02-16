using System;
using System.Collections.Generic;
using System.IO;
using soapClient.client;
using soapClient.model;
using soapClient.parser;

namespace soapClient
{
    public class App

    {
        public List<string> files { set; get; }

        public List<BlogPost> blogposts { set; get; }

        public Client client;



        public App()
        {
            this.files = new List<string>(Directory.GetFiles("Input"));
            this.blogposts = new List<BlogPost>();
            this.client = new Client();
        }

        public void runApp(){


            this.files.ForEach(file=>{
                var parser = new BlogPostParser();
                parser.fileRoute = file;
                blogposts.Add(parser.parse());

            });

            client.send(this.blogposts);
        }
    }
}
