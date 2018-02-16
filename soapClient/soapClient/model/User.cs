using System;
namespace soapClient.model
{
    public class User
    {

        public string email { set; get; }


        public User(string email)
        {
            this.email = email;
        }

    }
}
