using System;
namespace soapClient.parser.reducer
{
    public class TextReducer : IReducer
    {
        public TextReducer()
        {
        }

        public string reduceContent(string fileName)
        {
            return System.IO.File.ReadAllText(fileName);
        }
    }
}
