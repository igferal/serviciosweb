package com.uniovi.web.services.client.parser.impl;

import java.io.IOException;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.sun.jersey.api.client.ClientResponse;
import com.uniovi.web.services.client.model.IProxyModel;
import com.uniovi.web.services.client.model.MarvelStory;
import com.uniovi.web.services.client.parser.AbstractResponseParser;

public class MarvelResponseParser extends AbstractResponseParser {

	public IProxyModel parseResponse(ClientResponse response)
			throws JsonParseException, JsonMappingException, IOException {

		String resp = response.getEntity(String.class);
		ObjectMapper mapper = new ObjectMapper();
		JsonNode dataNode = this.getDataNode(mapper, resp.getBytes());

		int idx = 0;
		IProxyModel result = null;
		if (null != dataNode) {
			dataNode = dataNode.get("results");
			JsonNode oneResult = null;
			if (null != dataNode) {
				StringBuilder sb = new StringBuilder();
				while ((oneResult = dataNode.get(idx)) != null) {
					sb.append(oneResult.get("title").toString());
					sb.append(System.getProperty("line.separator"));
					idx++;
				}
				result = new MarvelStory("Marvel list of stories",
						sb.toString());
			}
		}
		return result;
	}
}
