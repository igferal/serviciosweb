using System;
using System.IO;
using System.Collections;
using soapClient.parser;
using soapClient.Model;
using System.Collections.Generic;

namespace soapClient
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] files = Directory.GetFiles("Input");
            List<BlogPost> blogposts = new List<BlogPost>();


            foreach(string file in files){

                var parser = new BlogPostParser();
                parser.fileRoute = file;
                blogposts.Add(parser.parse());
            }

            blogposts.ForEach((blogpost)=>Console.WriteLine( blogpost.title + "\n\t" + blogpost.content));
        }
    }


}
