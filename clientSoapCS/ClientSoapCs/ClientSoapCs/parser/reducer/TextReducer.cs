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
            Console.WriteLine("Procesando fichero de Texto {0}", fileName);

            return System.IO.File.ReadAllText(fileName);
        }
    }
}
