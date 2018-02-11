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
            Console.Write("PASEO");
            string[] lines = System.IO.File.ReadAllLines(fileName);
            Console.log(fileName);
            return string.Join("\n", lines);
        }
    }
}
