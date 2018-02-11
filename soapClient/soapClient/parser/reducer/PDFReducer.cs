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
            // Create a reader for the given PDF file
            using (PdfReader reader = new PdfReader(fileName))
            {
                // Read pages
                for (int page = 1; page <= reader.NumberOfPages; page++)
                {

                    LocationTextExtractionStrategy located = new LocationTextExtractionStrategy();

                    string pageText =  PdfTextExtractor.GetTextFromPage(reader, page, located);
                    Console.Write(pageText);
                    result.Append(pageText);
                }
            }
            return result.ToString();
        }
    }
}
