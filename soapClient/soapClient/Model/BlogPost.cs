using System;
namespace soapClient.model
{
    public class BlogPost
    {

        public string body { set; get; }

        public string title { set; get; }

        public string userMail { set; get; }

        public DateTime creationDate { set; get; }

        public User user { get; set; }

        public BlogPost()
        {

            this.creationDate = new DateTime();
            this.user = new User("nacho@gmail.com");


        }
    }
}
