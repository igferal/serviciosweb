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

        public Client client { set; get; }

        public string route { set; get; }

        public string user { set; get; }

        public string password { set; get; }



        public App(string[] args)
        {
            configureUserRouteAndPass(args);
            this.checkConfig();
            this.files = new List<string>(Directory.GetFiles(this.route));
            this.blogposts = new List<blogPost>();
            this.client = new Client();

        }



        public void runApp()
        {


            this.files.ForEach(file =>
            {
                var parser = new BlogPostParser();
                parser.fileRoute = file;
                blogposts.Add(parser.parse());

            });

            client.send(this.blogposts, this.user, this.password);
        }

        private void checkConfig()
        {
            if (this.password == null || this.route == null || this.user == null)
            {
                Console.WriteLine("Se ha de especificar usuario, password y ruta");
                Environment.Exit(0);
            }

        }

        private void configureUserRouteAndPass(string[] args)
        {
            for (int i = 0; i < args.Length; i++)
            {
                if (i + 1 == args.Length) { return; }
                switch (args[i])
                {
                    case "-p":
                        this.password = args[i + 1];
                        Console.WriteLine("Contraseña usada : ****");
                        break;
                    case "-u":
                        this.user = args[i + 1];
                        Console.WriteLine("Usuario usado : {0}", this.user);

                        break;
                    case "-r":
                        this.route = args[i + 1];
                        Console.WriteLine("Ruta usada : {0}", this.route);
                        break;
                    default:
                        break;
                }
            }


        }
    }
}
