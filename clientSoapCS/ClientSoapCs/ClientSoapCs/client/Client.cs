using ClientSoapCs.BlogPostService;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

namespace soapClient.client
{
    public class Client
    {
        public Client()
        {
        }

        public static bool ValidateServerCertificate(Object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }

        public void send(List<blogPost> blogposts,string email) {
            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(ValidateServerCertificate);
            blogposts.ForEach((blogpost) => Console.WriteLine(blogpost.title + "\n\t" + blogpost.body));
            BlogPostService blogPostService = new BlogPostServiceClient();
            saveList saveList = new saveList();
            saveList.arg0 = blogposts.ToArray();
            saveList.arg1 = email;
            blogPostService.saveList(saveList);

        }
    }
}
