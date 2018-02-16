using System;
using System.Collections.Generic;
using soapClient.model;

namespace soapClient.client
{
    public class Client
    {
        public Client()
        {
        }



        public void send(List<BlogPost> blogposts){
            blogposts.ForEach((blogpost) => Console.WriteLine(blogpost.title + "\n\t" + blogpost.body));
        }
    }
}
