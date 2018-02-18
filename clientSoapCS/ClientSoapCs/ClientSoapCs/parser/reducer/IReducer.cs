using System;
namespace soapClient.parser.reducer
{
    public interface IReducer
    {
        string reduceContent(string fileName);
    }
}
