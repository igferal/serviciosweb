package com.uniovi.web.services.client.parser.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.sun.jersey.api.client.ClientResponse;
import com.uniovi.web.services.client.model.IProxyModel;
import com.uniovi.web.services.client.model.MarvelStory;
import com.uniovi.web.services.client.parser.AbstractResponseParser;

public class MarvelResponseParser extends AbstractResponseParser {

	public List<IProxyModel> parseResponse(ClientResponse response)
			throws JsonParseException, JsonMappingException, IOException {

		String resp = response.getEntity(String.class);
		ObjectMapper mapper = new ObjectMapper();
		JsonNode dataNode = this.getDataNode(mapper, resp.getBytes());

		int idx = 0;
		List<IProxyModel> result = new ArrayList<IProxyModel>();

		if (null != dataNode) {
			dataNode = dataNode.get("results");
			JsonNode oneResult = null;
			if (null != dataNode) {
				while ((oneResult = dataNode.get(idx)) != null) {
					result.add(
							new MarvelStory(oneResult.get("title").toString()));
					idx++;
				}
			}
		}
		return result;
	}
}
