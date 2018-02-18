package com.uniovi.web.services.client.parser;

import java.io.IOException;
import java.util.List;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;

import com.sun.jersey.api.client.ClientResponse;
import com.uniovi.web.services.client.model.IProxyModel;

public interface ResponseParser {

	List<IProxyModel> parseResponse(ClientResponse response)
			throws JsonParseException, JsonMappingException, IOException;
}
