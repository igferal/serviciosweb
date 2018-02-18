package com.uniovi.web.services.client.parser;

import java.io.IOException;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

public abstract class AbstractResponseParser implements ResponseParser {

	protected JsonNode getDataNode(ObjectMapper mapper, byte[] respBytes)
			throws JsonParseException, JsonMappingException, IOException {
		JsonNode rootNode = null;
		rootNode = mapper.readValue(respBytes, JsonNode.class);
		return rootNode.get("data");
	}
}
