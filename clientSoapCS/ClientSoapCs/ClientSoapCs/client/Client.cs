using ClientSoapCs.BlogPostService;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.Text;

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

        public void send(List<blogPost> blogposts, string email, string pass)
        {
            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(ValidateServerCertificate);
            BlogPostServiceClient blogPostService = new BlogPostServiceClient();

            blogPostService.ClientCredentials.UserName.UserName = email;
            blogPostService.ClientCredentials.UserName.Password = pass;
            string auth = Convert.ToBase64String(Encoding.ASCII.GetBytes(email + ":" + pass));
            try
            {
                using (new OperationContextScope(blogPostService.InnerChannel))
                {
                    var httpRequestProperty = new HttpRequestMessageProperty();
                    httpRequestProperty.Headers["Password"] = blogPostService.ClientCredentials.UserName.Password;
                    httpRequestProperty.Headers[System.Net.HttpRequestHeader.Authorization] = "Basic " + auth;
                    OperationContext.Current.OutgoingMessageProperties[HttpRequestMessageProperty.Name] = httpRequestProperty;
                    blogPostService.saveList(blogposts.ToArray(), email);
                    Console.WriteLine("Posts creados, consultalos en la web!");

                }


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

            }
        }
    }
}
