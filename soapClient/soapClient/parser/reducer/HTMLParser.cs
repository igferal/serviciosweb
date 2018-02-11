using System;
namespace soapClient.parser.reducer
{
    public class HTMLParser : IReducer
    {
        public HTMLParser()
        {
        }

        public string reduceContent(string fileName)
        {
            string content = System.IO.File.ReadAllText(fileName);
            content = content.Split("<body>")[1];
            content = content.Split("</body>")[0];
            return content;
        }
    }
}
