using System;
using System.Text;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;

namespace soapClient.parser.reducer
{
    public class PDFReducer : IReducer
    {
        public PDFReducer()
        {
        }

        public string reduceContent(string fileName)
        {

            StringBuilder result = new StringBuilder();
            using (PdfReader reader = new PdfReader(fileName))
            {
                for (int page = 1; page <= reader.NumberOfPages; page++)
                {

                    LocationTextExtractionStrategy located = new LocationTextExtractionStrategy();

                    string pageText =  PdfTextExtractor.GetTextFromPage(reader, page, located);
                    result.Append(pageText);
                }
            }
            Console.WriteLine("Procesando fichero PDF {0}", fileName);

            return result.ToString();
        }
    }
}
