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
            if (content.Contains("<body>"))
            {
                content = content.Split("<body>")[1];
            }
            if (content.Contains("</body>"))
            {
                content = content.Split("</body>")[0];
            }
            return content;
        }
    }
}
