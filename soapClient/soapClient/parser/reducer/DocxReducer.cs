using System;
using System.IO;
using System.Text;
using SautinSoft.Document;

namespace soapClient.parser.reducer
{
    public class DocxReducer : IReducer
    {
        public DocxReducer()
        {
        }

        public  string reduceContent(string fileName)
        {
            FileInfo pathToDocx = new FileInfo(fileName); 
 
            // Let's parse docx docuemnt and get all text from it. 
            DocumentCore docx = DocumentCore.Load(pathToDocx.FullName); 
 
            StringBuilder text = new StringBuilder(); 
 
            foreach (Paragraph par in docx.GetChildElements(true, ElementType.Paragraph)) 
            { 
                foreach (Run run in par.GetChildElements(true, ElementType.Run)) 
                { 
                    text.Append(run.Text); 
                } 
                text.AppendLine(); 
            } 
 
            // Show extracted text. 
            Console.WriteLine(text);
            return text.ToString();
         }

    }
}
