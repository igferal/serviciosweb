using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace soapClient
{
    class Program
    {
        static void Main(string[] args)
        {
            App app = new App(args);
            app.runApp();
            
        }
    }
}
